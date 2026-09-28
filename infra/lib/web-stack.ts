import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import { Construct } from 'constructs';

const DOMAIN_NAME = 'logcolombia.com';
const WWW_DOMAIN_NAME = `www.${DOMAIN_NAME}`;

export class WebAppStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Hosted zone que ya existe en Route53 (se busca por nombre, no se crea).
        // Requiere env.account concreto en bin/app.ts (CDK_DEFAULT_ACCOUNT lo resuelve el CLI).
        const hostedZone = route53.HostedZone.fromLookup(this, 'HostedZone', {
            domainName: DOMAIN_NAME,
        });

        // Certificado TLS para CloudFront. Debe estar en us-east-1, que es la región del stack.
        // La validación DNS crea automáticamente los CNAME de validación en la hosted zone.
        const certificate = new acm.Certificate(this, 'SiteCertificate', {
            domainName: DOMAIN_NAME,
            subjectAlternativeNames: [WWW_DOMAIN_NAME],
            validation: acm.CertificateValidation.fromDns(hostedZone),
        });

        const siteBucket = new s3.Bucket(this, 'SiteBucket', {
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
        });

        const distribution = new cloudfront.Distribution(this, 'SiteDistribution', {
            defaultBehavior: {
                origin: origins.S3BucketOrigin.withOriginAccessControl(siteBucket),
                viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            },
            defaultRootObject: 'index.html',
            domainNames: [DOMAIN_NAME, WWW_DOMAIN_NAME],
            certificate,
            minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
            errorResponses: [
                {
                    httpStatus: 403,
                    responseHttpStatus: 200,
                    responsePagePath: '/index.html',
                },
                {
                    httpStatus: 404,
                    responseHttpStatus: 200,
                    responsePagePath: '/index.html',
                },
            ],
        });

        // Registros alias (A e IPv6 AAAA) hacia CloudFront, para el apex y para www.
        const aliasTarget = route53.RecordTarget.fromAlias(
            new targets.CloudFrontTarget(distribution),
        );

        [
            { idPrefix: 'Apex', recordName: DOMAIN_NAME },
            { idPrefix: 'Www', recordName: WWW_DOMAIN_NAME },
        ].forEach(({ idPrefix, recordName }) => {
            new route53.ARecord(this, `${idPrefix}AliasRecord`, {
                zone: hostedZone,
                recordName,
                target: aliasTarget,
            });
            new route53.AaaaRecord(this, `${idPrefix}AliasRecordIPv6`, {
                zone: hostedZone,
                recordName,
                target: aliasTarget,
            });
        });

        new s3deploy.BucketDeployment(this, 'DeployWebsite', {
            sources: [s3deploy.Source.asset(path.join(__dirname, '../../.output/public'))],
            destinationBucket: siteBucket,
            distribution, // <--- Vincula la distribución
            distributionPaths: ['/*'], // <--- Invalida la caché automáticamente
        });

        // Imprime las URLs al finalizar el deploy
        new cdk.CfnOutput(this, 'CloudFrontURL', {
            value: `https://${distribution.distributionDomainName}`,
            description: 'URL de acceso a la web mediante CloudFront',
        });

        new cdk.CfnOutput(this, 'SiteURL', {
            value: `https://${DOMAIN_NAME}`,
            description: 'URL del sitio con dominio personalizado',
        });
    }
}