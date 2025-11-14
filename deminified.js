!(function (t) {
	var e = {};
	function o(s) {
		if (e[s]) return e[s].exports;
		var a = (e[s] = { i: s, l: !1, exports: {} });
		return t[s].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
	}
	(o.m = t),
		(o.c = e),
		(o.d = function (t, e, s) {
			o.o(t, e) ||
				Object.defineProperty(t, e, {
					configurable: !1,
					enumerable: !0,
					get: s,
				});
		}),
		(o.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t.default;
						}
					: function () {
							return t;
						};
			return o.d(e, "a", e), e;
		}),
		(o.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(o.p = "/wp-content/themes/danielschofield/dist/"),
		o((o.s = 1));
})([
	function (t, e) {
		t.exports = jQuery;
	},
	function (t, e, o) {
		o(2), (t.exports = o(8));
	},
	function (t, e, o) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			function (t) {
				var e = o(0),
					s = (o.n(e), o(3)),
					a = o(5),
					n = o(6),
					i = o(7),
					r = new s.a({ common: a.a, home: n.a, about: i.a });
				t(document).ready(function () {
					return r.loadEvents();
				});
			}.call(e, o(0));
	},
	function (t, e, o) {
		"use strict";
		var s = o(4),
			a = function (t) {
				this.routes = t;
			};
		(a.prototype.fire = function (t, e, o) {
			void 0 === e && (e = "init"),
				document.dispatchEvent(
					new CustomEvent("routed", {
						bubbles: !0,
						detail: { route: t, fn: e },
					}),
				);
			var s =
				"" !== t && this.routes[t] && "function" == typeof this.routes[t][e];
			s && this.routes[t][e](o);
		}),
			(a.prototype.loadEvents = function () {
				var t = this;
				this.fire("common"),
					document.body.className
						.toLowerCase()
						.replace(/-/g, "_")
						.split(/\s+/)
						.map(s.a)
						.forEach(function (e) {
							t.fire(e), t.fire(e, "finalize");
						}),
					this.fire("common", "finalize");
			}),
			(e.a = a);
	},
	function (t, e, o) {
		"use strict";
		e.a = function (t) {
			return (
				"" +
				t.charAt(0).toLowerCase() +
				t
					.replace(/[\W_]/g, "|")
					.split("|")
					.map(function (t) {
						return "" + t.charAt(0).toUpperCase() + t.slice(1);
					})
					.join("")
					.slice(1)
			);
		};
	},
	function (t, e, o) {
		"use strict";
		(function (t) {
			e.a = {
				init: function () {
					function e() {
						var e = t(window).height(),
							o = t(window).scrollTop();
						t(".trans").each(function () {
							t(this).offset().top < 0.75 * e + o
								? t(this).hasClass("show") || t(this).addClass("show")
								: t(this).removeClass("show");
						}),
							t(".lazyload").each(function () {
								t(this).offset().top < e + o &&
									(t(this).hasClass("show") || t(this).addClass("show"),
									t(this).hasClass("lazyload") &&
										(t(this).addClass("lazyloaded").removeClass("lazyload"),
										t(this).attr("srcset", t(this).data("srcset"))));
							});
					}
					setTimeout(function () {
						t("body").removeClass("blur");
					}, 250),
						t("a").on("click", function (e) {
							(e.preventDefault(),
							"_blank" === t(e.currentTarget).attr("target"))
								? window.open(e.currentTarget.href, "_blank").focus()
								: (t("body").addClass("blur"),
									setTimeout(function () {
										window.location.href = e.currentTarget.href;
									}, 250));
						}),
						t(".projects-drop--toggle").on("click", function () {
							var o = t(".projects-drop--inner"),
								s = o.find("a").length,
								a = 32;
							t(".project-overlay").toggleClass("open"),
								t(window).width() >= 992 && (a = 22),
								o.hasClass("open")
									? o.css({ maxHeight: 0 }).removeClass("open")
									: o.css({ maxHeight: s * a + 40 }).addClass("open"),
								e();
						}),
						t(".projects-drop--inner a").on("mouseover", function () {
							t(".bottom-left-img .default").removeClass("active"),
								t(".bottom-left-img .project").removeClass("active"),
								t(
									".bottom-left-img .project-" + t(this).attr("data-id"),
								).addClass("active");
						}),
						t(".projects-drop--inner").on("mouseout", function () {
							t(".bottom-left-img .default").addClass("active"),
								t(".bottom-left-img .project").removeClass("active");
						}),
						e(),
						document.addEventListener("scroll", function () {
							e();
						}),
						t(".project--more-text--more").on("click", function () {
							t(".project--more-text--more").addClass("hide"),
								t(".project--more-text").addClass("open"),
								t(".project--carousel").addClass("fade");
						}),
						t(".project--more-text--less").on("click", function () {
							t(".project--more-text--more").removeClass("hide"),
								t(".project--more-text").removeClass("open"),
								t(".project--carousel").removeClass("fade");
						}),
						t(".menu-toggle").on("click", function () {
							t(".menu-toggle").toggleClass("active"),
								t(".menu").toggleClass("open"),
								t("body").toggleClass("disable-scroll");
						}),
						t(".project--carousel--controls--prev").on("click", function () {
							t(".project--carousel").animate(
								{ scrollLeft: t(".project--carousel").scrollLeft() - 500 },
								400,
							);
						}),
						t(".project--carousel--controls--next").on("click", function () {
							t(".project--carousel").animate(
								{ scrollLeft: t(".project--carousel").scrollLeft() + 500 },
								400,
							);
						}),
						t(".project--carousel--item").on("click", function () {
							t("body").addClass("just-blur");
							var o = t(this).attr("data-id");
							setTimeout(function () {
								!(function (o) {
									var s = t("<div />", {
											class: "lightbox-carousel",
											css: { opacity: 0, transition: "opacity 0.2s ease" },
											html: [
												t("<div />", {
													class: "lightbox-carousel--close",
													html: '<svg width="18px" height="19px" viewBox="0 0 18 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Large-â€”-Project-Page-1-Lightbox" transform="translate(-1562.000000, -20.000000)" stroke="#CCCCCC" stroke-width="2"> <g id="Group-5" transform="translate(1562.000000, 20.000000)"> <polyline id="Stroke-1" points="0.7151 17.6335 8.9901 9.1665 0.7151 0.6985"></polyline> <polyline id="Stroke-3" points="17.2849 0.699 9.0099 9.166 17.2849 17.634"></polyline> </g> </g> </g> </svg>',
												}).on("click", function () {
													t("body").addClass("just-blur"),
														setTimeout(function () {
															t(".lightbox-carousel").remove(),
																setTimeout(function () {
																	t("body").removeClass("just-blur");
																}, 200);
														}, 400);
												}),
												t("<div />", {
													class: "lightbox-carousel--prev",
													html: '<svg width="13px" height="22px" viewBox="0 0 13 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Project-Page-1" transform="translate(-18.000000, -345.000000)" stroke="#CCCCCC" stroke-width="2"> <g id="Group" transform="translate(20.000000, 346.000000)"> <g id="Arrow-Copy" transform="translate(5.000000, 10.000000) scale(-1, 1) translate(-5.000000, -10.000000) "> <polyline id="Stroke-1" points="-1.82076576e-13 19.799 9.9 9.899 -1.82076576e-13 -1.0658141e-14"></polyline> </g> </g> </g> </g> </svg>',
												}).on("click", function () {
													var o, s, a;
													(o = t(".lightbox-carousel--track")),
														(s = parseInt(o.attr("data-current"))),
														(a = 0 == s ? 0 : s - 1),
														o.attr("data-current", a),
														o.css({
															transform: "translateX(-" + 100 * a + "vw)",
														}),
														t(".lightbox-carousel--icon.active").removeClass(
															"active",
														),
														t(".lightbox-carousel--icon--" + a).addClass(
															"active",
														),
														setTimeout(function () {
															e();
														}, 400);
												}),
												t("<div />", {
													class: "lightbox-carousel--next",
													html: '<svg width="13px" height="22px" viewBox="0 0 13 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Project-Page-1" transform="translate(-1169.000000, -345.000000)" stroke="#CCCCCC" stroke-width="2"> <g id="Stroke-1" transform="translate(1170.000000, 346.000000)"> <polyline points="-1.82076576e-13 19.799 9.9 9.899 -1.82076576e-13 -1.0658141e-14"></polyline> </g> </g> </g> </svg>',
												}).on("click", function () {
													var o, s, a, n;
													(o = t(".lightbox-carousel--track")),
														(s = parseInt(o.attr("data-current"))),
														(a = t(".lightbox-carousel--item").length - 1),
														(n = s == a ? a : s + 1),
														o.attr("data-current", n),
														o.css({
															transform: "translateX(-" + 100 * n + "vw)",
														}),
														t(".lightbox-carousel--icon.active").removeClass(
															"active",
														),
														t(".lightbox-carousel--icon--" + n).addClass(
															"active",
														),
														setTimeout(function () {
															e();
														}, 400);
												}),
											],
										}),
										a = t("<div />", {
											class: "lightbox-carousel--icons",
										}).appendTo(s),
										n = t("<div />", { class: "lightbox-carousel--track" });
									t(".project--carousel--item").each(function () {
										t("<div />", {
											class: "lightbox-carousel--item",
											html: [
												t("<div />", {
													class: "lightbox-carousel--image",
													html: t(this).html(),
												}),
											],
										}).appendTo(n),
											t("<div />", {
												class:
													"lightbox-carousel--icon lightbox-carousel--icon--" +
													t(this).attr("data-id"),
											}).appendTo(a);
									}),
										n.appendTo(s),
										n
											.css({ transform: "translateX(-" + 100 * o + "vw)" })
											.attr("data-current", o),
										t("body").append(s),
										t(".lightbox-carousel--icon--" + o).addClass("active"),
										setTimeout(function () {
											n.css({ transition: "transform 0.4s ease" }),
												s.css({ opacity: 1 });
										}, 200);
								})(o),
									setTimeout(function () {
										t("body").removeClass("just-blur");
									}, 400);
							}, 600);
						});
				},
				finalize: function () {},
			};
		}).call(e, o(0));
	},
	function (t, e, o) {
		"use strict";
		e.a = { init: function () {}, finalize: function () {} };
	},
	function (t, e, o) {
		"use strict";
		(function (t) {
			e.a = {
				init: function () {
					t(".about--info--toggle .profile").on("click", function () {
						t(".about--info--toggle .active").removeClass("active"),
							t(this).addClass("active"),
							t(".about--info--content.active").removeClass("active"),
							t(".about--info--content--profile").addClass("active");
					}),
						t(".about--info--toggle .accolades").on("click", function () {
							t(".about--info--toggle .active").removeClass("active"),
								t(this).addClass("active"),
								t(".about--info--content.active").removeClass("active"),
								t(".about--info--content--accolades").addClass("active");
						}),
						t(".about--info--toggle .clients").on("click", function () {
							t(".about--info--toggle .active").removeClass("active"),
								t(this).addClass("active"),
								t(".about--info--content.active").removeClass("active"),
								t(".about--info--content--clients").addClass("active");
						});
				},
			};
		}).call(e, o(0));
	},
	function (t, e) {},
]);
