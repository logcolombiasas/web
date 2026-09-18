import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CgjnGae4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var truck_transporting_default = "/assets/truck_transporting-CzIn5RVz.mp4";
var logcolombia_mechanical_default = "/assets/logcolombia-mechanical-Dvv92i_Z.jpg";
var logcolombia_roadside_default = "/assets/logcolombia-roadside-CFgqslA1.jpg";
var logcolombia_maintenance_default = "/assets/logcolombia-maintenance-VKUNhWzB.jpg";
var logcolombia_sales_default = "/assets/logcolombia-sales-Bhrt3P-E.jpg";
var logcolombia_operation_default = "/assets/logcolombia-operation-BsPJusrU.jpg";
var logcolombia_team_default = "/assets/logcolombia-team-IZ5HNF6w.jpg";
var logcolombia_logo_default = "/assets/logcolombia-logo-BVkZc90E.png";
var QUOTE_URL = "https://wa.link/d9yjgl";
var SERVICE_URL = "https://wa.link/hkiijg";
var services = [
	{
		title: "Asistencia técnico-mecánica",
		image: logcolombia_mechanical_default,
		copy: "Diagnóstico preciso, seguridad y cumplimiento para tu vehículo."
	},
	{
		title: "Asistencia en carretera y traslado",
		image: logcolombia_roadside_default,
		copy: "Respuesta 24/7 y traslado seguro ante cualquier imprevisto."
	},
	{
		title: "Mantenimiento preventivo y correctivo",
		image: logcolombia_maintenance_default,
		copy: "Tecnología y experiencia para prolongar la vida útil de tu vehículo."
	},
	{
		title: "Comercialización de vehículos",
		image: logcolombia_sales_default,
		copy: "Vehículos usados, financiación flexible y una compra transparente."
	}
];
function Brand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		className: "brand",
		href: "#top",
		"aria-label": "Logcolombia, inicio",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: logcolombia_logo_default,
			alt: "Logcolombia",
			width: "640",
			height: "641"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Logcolombia" })]
	});
}
function Arrow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		children: "↗"
	});
}
function Index() {
	(0, import_react.useEffect)(() => {
		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
		if (reducedMotion) {
			revealItems.forEach((item) => item.classList.add("is-visible"));
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			});
		}, {
			threshold: .14,
			rootMargin: "0px 0px -8% 0px"
		});
		revealItems.forEach((item) => observer.observe(item));
		let frame = 0;
		const updateParallax = () => {
			frame = 0;
			document.querySelectorAll("[data-parallax]").forEach((item) => {
				const rect = item.getBoundingClientRect();
				if (rect.bottom < 0 || rect.top > window.innerHeight) return;
				const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
				item.style.setProperty("--parallax-y", `${Math.max(-18, Math.min(18, progress * -24))}px`);
			});
		};
		const onScroll = () => {
			if (!frame) frame = window.requestAnimationFrame(updateParallax);
		};
		updateParallax();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", onScroll);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "top",
		className: "overflow-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hero-shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						src: truck_transporting_default,
						autoPlay: true,
						loop: true,
						muted: true,
						playsInline: true,
						className: "hero-media hero-enter-media"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "site-header hero-enter-header",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								className: "desktop-nav",
								"aria-label": "Navegación principal",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#top",
										children: "Inicio"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#services",
										children: "Servicios"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#about",
										children: "Nosotros"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#coverage",
										children: "Cobertura"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#contact",
										children: "Contacto"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "nav-cta",
										href: QUOTE_URL,
										target: "_blank",
										rel: "noreferrer",
										children: ["Cotizar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "mobile-nav",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
									"aria-label": "Abrir menú",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Menú" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#top",
										children: "Inicio"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#services",
										children: "Servicios"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#about",
										children: "Nosotros"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#coverage",
										children: "Cobertura"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: QUOTE_URL,
										target: "_blank",
										rel: "noreferrer",
										children: "Cotizar"
									})
								] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-content",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow light hero-enter hero-enter-1",
								children: "Atención automotriz integral · 24/7"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-title-mask",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "hero-enter hero-enter-2",
									children: [
										"Tu vehículo,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"nuestra pasión."
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-copy hero-enter hero-enter-3",
								children: "Mantenimiento, asistencia en carretera y soluciones especializadas con respuesta rápida en Colombia."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-actions hero-enter hero-enter-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "button button-solid",
									href: QUOTE_URL,
									target: "_blank",
									rel: "noreferrer",
									children: ["Cotizar ahora ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "button button-ghost",
									href: "tel:+573104622366",
									children: "Llamar al 310 462 2366"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "scroll-cue hero-enter hero-enter-4",
						href: "#services",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Conoce más" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "services",
				className: "products-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-intro",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						"data-reveal": true,
						children: "Soluciones integrales"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						"data-reveal": true,
						"data-reveal-delay": "1",
						children: [
							"Todo lo que tu vehículo necesita.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Cuando más lo necesitas."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "product-grid",
					children: services.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "product-card",
						"data-reveal": true,
						"data-reveal-delay": String(index % 4 + 1),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: service.image,
								width: 1200,
								height: 1500,
								alt: service.title,
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "product-shade" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "product-overlay",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", index + 1] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: service.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: service.copy }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: QUOTE_URL,
										target: "_blank",
										rel: "noreferrer",
										children: ["Cotizar servicio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
									})
								]
							})
						]
					}, service.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "manifesto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow light",
						"data-reveal": true,
						children: "Movilidad sin pausas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						"data-reveal": true,
						"data-reveal-delay": "1",
						children: "Transformamos problemas automotrices en soluciones efectivas, seguras y personalizadas."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "manifesto-rule",
						"data-reveal": true,
						"data-reveal-delay": "2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Disponibles 24/7" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Más de 12 ciudades principales" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cobertura nacional" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "coverage",
				className: "split-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "split-media",
					"data-reveal": "image",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						"data-parallax": true,
						src: logcolombia_operation_default,
						width: 1600,
						height: 1100,
						alt: "Operación profesional de traslado vehicular",
						loading: "lazy"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "split-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							"data-reveal": true,
							children: "Asistencia / 01"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							"data-reveal": true,
							"data-reveal-delay": "1",
							children: [
								"En ruta con",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"confianza."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-reveal": true,
							"data-reveal-delay": "2",
							children: "Cuando cada segundo cuenta, nuestro equipo responde con grúas, asistencia técnico-mecánica y cobertura amplia. Desde el rescate en carretera hasta la reparación, trabajamos para devolverte la movilidad."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "text-link",
							"data-reveal": true,
							"data-reveal-delay": "3",
							href: SERVICE_URL,
							target: "_blank",
							rel: "noreferrer",
							children: ["Solicitar asistencia ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "about",
				className: "split-section reverse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "split-media",
					"data-reveal": "image",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						"data-parallax": true,
						src: logcolombia_team_default,
						width: 1600,
						height: 1100,
						alt: "Técnico especializado realizando un diagnóstico automotriz",
						loading: "lazy"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "split-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							"data-reveal": true,
							children: "Logcolombia / 02"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							"data-reveal": true,
							"data-reveal-delay": "1",
							children: [
								"Innovación y pasión",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"en cada viaje."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-reveal": true,
							"data-reveal-delay": "2",
							children: "Somos una empresa de soluciones automotrices integrales comprometida con simplificar la vida de nuestros clientes. Unimos tecnología avanzada, atención personalizada y un equipo experto que entiende el valor de la movilidad."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "text-link",
							"data-reveal": true,
							"data-reveal-delay": "3",
							href: QUOTE_URL,
							target: "_blank",
							rel: "noreferrer",
							children: ["Hablar con un asesor ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "journal-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					"data-reveal": true,
					children: "Por qué elegirnos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						"data-reveal": true,
						"data-reveal-delay": "1",
						children: [
							"Compromiso que",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"te acompaña."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-reveal": true,
						"data-reveal-delay": "2",
						children: "Profesionalismo, soporte cercano, garantía sobre los servicios y facilidades de pago para que cada recorrido empiece con tranquilidad."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "value-list",
						"data-reveal": true,
						"data-reveal-delay": "3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Respuesta inmediata" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Técnicos calificados" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Calidad garantizada" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Atención personalizada" })
						]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "cta-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow light",
					"data-reveal": true,
					children: "Estamos listos 24/7"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					"data-reveal": true,
					"data-reveal-delay": "1",
					children: [
						"Sigue tu camino.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Nosotros respondemos."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "round-link",
					"data-reveal": true,
					"data-reveal-delay": "2",
					href: QUOTE_URL,
					target: "_blank",
					rel: "noreferrer",
					"aria-label": "Cotizar un servicio por WhatsApp",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				id: "contact",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Localización, operación y gestión vehicular en Colombia." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+573104622366",
							children: "310 462 2366"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SERVICE_URL,
							target: "_blank",
							rel: "noreferrer",
							children: "Servicio al cliente"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							children: "Volver arriba ↑"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "© 2026 Logcolombia. Todos los derechos reservados." })
				]
			})
		]
	});
}
//#endregion
export { Index as component };
