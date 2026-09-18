#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { WebAppStack } from '../lib/web-stack';

const app = new cdk.App();

new WebAppStack(app, 'LogcolombiaWebStack', {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: 'us-east-1', // ACM para CloudFront debe desplegarse siempre en us-east-1
    },
});