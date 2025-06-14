(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    7166: function (e, t) {
      var r;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var n = {}.hasOwnProperty;
        function i() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            if (r) {
              var o = typeof r;
              if ("string" === o || "number" === o)
                e.push((this && this[r]) || r);
              else if (Array.isArray(r)) e.push(i.apply(this, r));
              else if ("object" === o) {
                if (
                  r.toString !== Object.prototype.toString &&
                  !r.toString.toString().includes("[native code]")
                ) {
                  e.push(r.toString());
                  continue;
                }
                for (var a in r)
                  n.call(r, a) && r[a] && e.push((this && this[a]) || a);
              }
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((i.default = i), (e.exports = i))
          : void 0 !==
              (r = function () {
                return i;
              }.apply(t, [])) && (e.exports = r);
      })();
    },
    7811: function (e, t) {
      "use strict";
      /*!
       * content-type
       * Copyright(c) 2015 Douglas Christopher Wilson
       * MIT Licensed
       */ var r =
          /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,
        n = /\\([\u000b\u0020-\u00ff])/g,
        i = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
      function o(e) {
        (this.parameters = Object.create(null)), (this.type = e);
      }
      t.Q = function (e) {
        if (!e) throw TypeError("argument string is required");
        var t,
          a,
          c,
          s =
            "object" == typeof e
              ? (function (e) {
                  var t;
                  if (
                    ("function" == typeof e.getHeader
                      ? (t = e.getHeader("content-type"))
                      : "object" == typeof e.headers &&
                        (t = e.headers && e.headers["content-type"]),
                    "string" != typeof t)
                  )
                    throw TypeError(
                      "content-type header is missing from object"
                    );
                  return t;
                })(e)
              : e;
        if ("string" != typeof s)
          throw TypeError("argument string is required to be a string");
        var l = s.indexOf(";"),
          u = -1 !== l ? s.slice(0, l).trim() : s.trim();
        if (!i.test(u)) throw TypeError("invalid media type");
        var d = new o(u.toLowerCase());
        if (-1 !== l) {
          for (r.lastIndex = l; (a = r.exec(s)); ) {
            if (a.index !== l) throw TypeError("invalid parameter format");
            (l += a[0].length),
              (t = a[1].toLowerCase()),
              34 === (c = a[2]).charCodeAt(0) &&
                -1 !== (c = c.slice(1, -1)).indexOf("\\") &&
                (c = c.replace(n, "$1")),
              (d.parameters[t] = c);
          }
          if (l !== s.length) throw TypeError("invalid parameter format");
        }
        return d;
      };
    },
    8693: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, r, n) {
          return !1;
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    5074: function (e, t, r) {
      "use strict";
      var n = r(5696),
        i = r(7980);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(6495).Z,
        a = r(2648).Z,
        c = r(1598).Z,
        s = r(7273).Z,
        l = c(r(7294)),
        u = a(r(1597)),
        d = r(8164),
        h = r(2358),
        f = r(6650);
      r(3766);
      var p = a(r(1586)),
        g = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        };
      function m(e) {
        return void 0 !== e.default;
      }
      function b(e) {
        return "number" == typeof e || void 0 === e
          ? e
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function v(e, t, r, n, i, a, c) {
        e &&
          e["data-loaded-src"] !== t &&
          ((e["data-loaded-src"] = t),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(function () {})
            .then(function () {
              if (e.parentElement && e.isConnected) {
                if (("blur" === r && a(!0), null == n ? void 0 : n.current)) {
                  var t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  var c = !1,
                    s = !1;
                  n.current(
                    o({}, t, {
                      nativeEvent: t,
                      currentTarget: e,
                      target: e,
                      isDefaultPrevented: function () {
                        return c;
                      },
                      isPropagationStopped: function () {
                        return s;
                      },
                      persist: function () {},
                      preventDefault: function () {
                        (c = !0), t.preventDefault();
                      },
                      stopPropagation: function () {
                        (s = !0), t.stopPropagation();
                      },
                    })
                  );
                }
                (null == i ? void 0 : i.current) && i.current(e);
              }
            }));
      }
      var y = l.forwardRef(function (e, t) {
          var r = e.imgAttributes,
            n = e.heightInt,
            i = e.widthInt,
            a = (e.qualityInt, e.className),
            c = e.imgStyle,
            u = e.blurStyle,
            d = e.isLazy,
            h = e.fill,
            f = e.placeholder,
            p = e.loading,
            g = e.srcString,
            m = (e.config, e.unoptimized),
            b = (e.loader, e.onLoadRef),
            y = e.onLoadingCompleteRef,
            _ = e.setBlurComplete,
            w = e.setShowAltText,
            x = (e.onLoad, e.onError),
            j = s(e, [
              "imgAttributes",
              "heightInt",
              "widthInt",
              "qualityInt",
              "className",
              "imgStyle",
              "blurStyle",
              "isLazy",
              "fill",
              "placeholder",
              "loading",
              "srcString",
              "config",
              "unoptimized",
              "loader",
              "onLoadRef",
              "onLoadingCompleteRef",
              "setBlurComplete",
              "setShowAltText",
              "onLoad",
              "onError",
            ]);
          return (
            (p = d ? "lazy" : p),
            l.default.createElement(
              l.default.Fragment,
              null,
              l.default.createElement(
                "img",
                Object.assign(
                  {},
                  j,
                  {
                    loading: p,
                    width: i,
                    height: n,
                    decoding: "async",
                    "data-nimg": h ? "fill" : "1",
                    className: a,
                    style: o({}, c, u),
                  },
                  r,
                  {
                    ref: l.useCallback(
                      function (e) {
                        t &&
                          ("function" == typeof t
                            ? t(e)
                            : "object" == typeof t && (t.current = e)),
                          e &&
                            (x && (e.src = e.src),
                            e.complete && v(e, g, f, b, y, _, m));
                      },
                      [g, f, b, y, _, x, m, t]
                    ),
                    onLoad: function (e) {
                      v(e.currentTarget, g, f, b, y, _, m);
                    },
                    onError: function (e) {
                      w(!0), "blur" === f && _(!0), x && x(e);
                    },
                  }
                )
              )
            )
          );
        }),
        _ = l.forwardRef(function (e, t) {
          var r,
            a,
            c,
            v = e.src,
            _ = e.sizes,
            w = e.unoptimized,
            x = void 0 !== w && w,
            j = e.priority,
            k = void 0 !== j && j,
            A = e.loading,
            O = e.className,
            S = e.quality,
            E = e.width,
            C = e.height,
            I = e.fill,
            M = e.style,
            H = e.onLoad,
            W = e.onLoadingComplete,
            R = e.placeholder,
            N = void 0 === R ? "empty" : R,
            P = e.blurDataURL,
            L = e.layout,
            T = e.objectFit,
            z = e.objectPosition,
            D =
              (e.lazyBoundary,
              e.lazyRoot,
              s(e, [
                "src",
                "sizes",
                "unoptimized",
                "priority",
                "loading",
                "className",
                "quality",
                "width",
                "height",
                "fill",
                "style",
                "onLoad",
                "onLoadingComplete",
                "placeholder",
                "blurDataURL",
                "layout",
                "objectFit",
                "objectPosition",
                "lazyBoundary",
                "lazyRoot",
              ])),
            q = l.useContext(f.ImageConfigContext),
            U = l.useMemo(
              function () {
                var e = g || q || h.imageConfigDefault,
                  t = []
                    .concat(i(e.deviceSizes), i(e.imageSizes))
                    .sort(function (e, t) {
                      return e - t;
                    }),
                  r = e.deviceSizes.sort(function (e, t) {
                    return e - t;
                  });
                return o({}, e, { allSizes: t, deviceSizes: r });
              },
              [q]
            ),
            G = D,
            Z = G.loader || p.default;
          delete G.loader;
          var F = "__next_img_default" in Z;
          if (F) {
            if ("custom" === U.loader)
              throw Error(
                'Image with src "'.concat(v, '" is missing "loader" prop.') +
                  "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
              );
          } else {
            var B = Z;
            Z = function (e) {
              return e.config, B(s(e, ["config"]));
            };
          }
          if (L) {
            "fill" === L && (I = !0);
            var V = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[L];
            V && (M = o({}, M, V));
            var X = { responsive: "100vw", fill: "100vw" }[L];
            X && !_ && (_ = X);
          }
          var Q = "",
            Y = b(E),
            J = b(C);
          if ("object" == typeof (r = v) && (m(r) || void 0 !== r.src)) {
            var K = m(v) ? v.default : v;
            if (!K.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(K)
                )
              );
            if (!K.height || !K.width)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(K)
                )
              );
            if (
              ((a = K.blurWidth),
              (c = K.blurHeight),
              (P = P || K.blurDataURL),
              (Q = K.src),
              !I)
            ) {
              if (Y || J) {
                if (Y && !J) {
                  var $ = Y / K.width;
                  J = Math.round(K.height * $);
                } else if (!Y && J) {
                  var ee = J / K.height;
                  Y = Math.round(K.width * ee);
                }
              } else (Y = K.width), (J = K.height);
            }
          }
          var et = !k && ("lazy" === A || void 0 === A);
          ((v = "string" == typeof v ? v : Q).startsWith("data:") ||
            v.startsWith("blob:")) &&
            ((x = !0), (et = !1)),
            U.unoptimized && (x = !0),
            F && v.endsWith(".svg") && !U.dangerouslyAllowSVG && (x = !0);
          var er = n(l.useState(!1), 2),
            en = er[0],
            ei = er[1],
            eo = n(l.useState(!1), 2),
            ea = eo[0],
            ec = eo[1],
            es = b(S),
            el = Object.assign(
              I
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: T,
                    objectPosition: z,
                  }
                : {},
              ea ? {} : { color: "transparent" },
              M
            ),
            eu =
              "blur" === N && P && !en
                ? {
                    backgroundSize: el.objectFit || "cover",
                    backgroundPosition: el.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf-8,'.concat(
                        d.getImageBlurSvg({
                          widthInt: Y,
                          heightInt: J,
                          blurWidth: a,
                          blurHeight: c,
                          blurDataURL: P,
                          objectFit: el.objectFit,
                        }),
                        '")'
                      ),
                  }
                : {},
            ed = (function (e) {
              var t = e.config,
                r = e.src,
                n = e.unoptimized,
                o = e.width,
                a = e.quality,
                c = e.sizes,
                s = e.loader;
              if (n) return { src: r, srcSet: void 0, sizes: void 0 };
              var l = (function (e, t, r) {
                  var n = e.deviceSizes,
                    o = e.allSizes;
                  if (r) {
                    for (
                      var a, c = /(^|\s)(1?\d?\d)vw/g, s = [];
                      (a = c.exec(r));
                      a
                    )
                      s.push(parseInt(a[2]));
                    if (s.length) {
                      var l = 0.01 * Math.min.apply(Math, s);
                      return {
                        widths: o.filter(function (e) {
                          return e >= n[0] * l;
                        }),
                        kind: "w",
                      };
                    }
                    return { widths: o, kind: "w" };
                  }
                  return "number" != typeof t
                    ? { widths: n, kind: "w" }
                    : {
                        widths: i(
                          new Set(
                            [t, 2 * t].map(function (e) {
                              return (
                                o.find(function (t) {
                                  return t >= e;
                                }) || o[o.length - 1]
                              );
                            })
                          )
                        ),
                        kind: "x",
                      };
                })(t, o, c),
                u = l.widths,
                d = l.kind,
                h = u.length - 1;
              return {
                sizes: c || "w" !== d ? c : "100vw",
                srcSet: u
                  .map(function (e, n) {
                    return ""
                      .concat(
                        s({ config: t, src: r, quality: a, width: e }),
                        " "
                      )
                      .concat("w" === d ? e : n + 1)
                      .concat(d);
                  })
                  .join(", "),
                src: s({ config: t, src: r, quality: a, width: u[h] }),
              };
            })({
              config: U,
              src: v,
              unoptimized: x,
              width: Y,
              quality: es,
              sizes: _,
              loader: Z,
            }),
            eh = v,
            ef = {
              imageSrcSet: ed.srcSet,
              imageSizes: ed.sizes,
              crossOrigin: G.crossOrigin,
            },
            ep = l.useRef(H);
          l.useEffect(
            function () {
              ep.current = H;
            },
            [H]
          );
          var eg = l.useRef(W);
          l.useEffect(
            function () {
              eg.current = W;
            },
            [W]
          );
          var em = o(
            {
              isLazy: et,
              imgAttributes: ed,
              heightInt: J,
              widthInt: Y,
              qualityInt: es,
              className: O,
              imgStyle: el,
              blurStyle: eu,
              loading: A,
              config: U,
              fill: I,
              unoptimized: x,
              placeholder: N,
              loader: Z,
              srcString: eh,
              onLoadRef: ep,
              onLoadingCompleteRef: eg,
              setBlurComplete: ei,
              setShowAltText: ec,
            },
            G
          );
          return l.default.createElement(
            l.default.Fragment,
            null,
            l.default.createElement(y, Object.assign({}, em, { ref: t })),
            k
              ? l.default.createElement(
                  u.default,
                  null,
                  l.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + ed.src + ed.srcSet + ed.sizes,
                        rel: "preload",
                        as: "image",
                        href: ed.srcSet ? void 0 : ed.src,
                      },
                      ef
                    )
                  )
                )
              : null
          );
        });
      (t.default = _),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    6512: function (e, t, r) {
      "use strict";
      var n = r(5696);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = r(2648).Z,
        o = r(7273).Z,
        a = i(r(7294)),
        c = r(5509),
        s = r(4514),
        l = r(4130),
        u = r(146),
        d = r(4318),
        h = r(6514),
        f = r(8681),
        p = r(6675),
        g = r(8693),
        m = r(6085),
        b = new Set();
      function v(e, t, r, n, i) {
        if (i || s.isLocalURL(t)) {
          if (!n.bypassPrefetchedCheck) {
            var o =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (b.has(o)) return;
            b.add(o);
          }
          Promise.resolve(e.prefetch(t, r, n)).catch(function (e) {});
        }
      }
      function y(e) {
        return "string" == typeof e ? e : l.formatUrl(e);
      }
      var _ = a.default.forwardRef(function (e, t) {
        var r,
          i,
          l = e.href,
          b = e.as,
          _ = e.children,
          w = e.prefetch,
          x = e.passHref,
          j = e.replace,
          k = e.shallow,
          A = e.scroll,
          O = e.locale,
          S = e.onClick,
          E = e.onMouseEnter,
          C = e.onTouchStart,
          I = e.legacyBehavior,
          M = void 0 !== I && I,
          H = o(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (r = _),
          M &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = a.default.createElement("a", null, r));
        var W = !1 !== w,
          R = a.default.useContext(h.RouterContext),
          N = a.default.useContext(f.AppRouterContext),
          P = null != R ? R : N,
          L = !R,
          T = a.default.useMemo(
            function () {
              if (!R) {
                var e = y(l);
                return { href: e, as: b ? y(b) : e };
              }
              var t = n(c.resolveHref(R, l, !0), 2),
                r = t[0],
                i = t[1];
              return { href: r, as: b ? c.resolveHref(R, b) : i || r };
            },
            [R, l, b]
          ),
          z = T.href,
          D = T.as,
          q = a.default.useRef(z),
          U = a.default.useRef(D);
        M && (i = a.default.Children.only(r));
        var G = M ? i && "object" == typeof i && i.ref : t,
          Z = n(p.useIntersection({ rootMargin: "200px" }), 3),
          F = Z[0],
          B = Z[1],
          V = Z[2],
          X = a.default.useCallback(
            function (e) {
              (U.current !== D || q.current !== z) &&
                (V(), (U.current = D), (q.current = z)),
                F(e),
                G &&
                  ("function" == typeof G
                    ? G(e)
                    : "object" == typeof G && (G.current = e));
            },
            [D, G, z, V, F]
          );
        a.default.useEffect(
          function () {
            P && B && W && v(P, z, D, { locale: O }, L);
          },
          [D, z, B, O, W, null == R ? void 0 : R.locale, P, L]
        );
        var Q = {
          ref: X,
          onClick: function (e) {
            M || "function" != typeof S || S(e),
              M &&
                i.props &&
                "function" == typeof i.props.onClick &&
                i.props.onClick(e),
              P &&
                !e.defaultPrevented &&
                (function (e, t, r, n, i, o, c, l, u, d) {
                  if (
                    !(
                      "A" === e.currentTarget.nodeName.toUpperCase() &&
                      (((h = e.currentTarget.getAttribute("target")) &&
                        "_self" !== h) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which) ||
                        (!u && !s.isLocalURL(r)))
                    )
                  ) {
                    e.preventDefault();
                    var h,
                      f = function () {
                        "beforePopState" in t
                          ? t[i ? "replace" : "push"](r, n, {
                              shallow: o,
                              locale: l,
                              scroll: c,
                            })
                          : t[i ? "replace" : "push"](n || r, {
                              forceOptimisticNavigation: !d,
                            });
                      };
                    u ? a.default.startTransition(f) : f();
                  }
                })(e, P, z, D, j, k, A, O, L, W);
          },
          onMouseEnter: function (e) {
            M || "function" != typeof E || E(e),
              M &&
                i.props &&
                "function" == typeof i.props.onMouseEnter &&
                i.props.onMouseEnter(e),
              P &&
                (W || !L) &&
                v(
                  P,
                  z,
                  D,
                  { locale: O, priority: !0, bypassPrefetchedCheck: !0 },
                  L
                );
          },
          onTouchStart: function (e) {
            M || "function" != typeof C || C(e),
              M &&
                i.props &&
                "function" == typeof i.props.onTouchStart &&
                i.props.onTouchStart(e),
              P &&
                (W || !L) &&
                v(
                  P,
                  z,
                  D,
                  { locale: O, priority: !0, bypassPrefetchedCheck: !0 },
                  L
                );
          },
        };
        if (u.isAbsoluteUrl(D)) Q.href = D;
        else if (!M || x || ("a" === i.type && !("href" in i.props))) {
          var Y = void 0 !== O ? O : null == R ? void 0 : R.locale,
            J =
              (null == R ? void 0 : R.isLocaleDomain) &&
              g.getDomainLocale(
                D,
                Y,
                null == R ? void 0 : R.locales,
                null == R ? void 0 : R.domainLocales
              );
          Q.href =
            J ||
            m.addBasePath(
              d.addLocale(D, Y, null == R ? void 0 : R.defaultLocale)
            );
        }
        return M
          ? a.default.cloneElement(i, Q)
          : a.default.createElement("a", Object.assign({}, H, Q), r);
      });
      (t.default = _),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    6675: function (e, t, r) {
      "use strict";
      var n = r(5696);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            r = e.rootMargin,
            l = e.disabled || !a,
            u = n(i.useState(!1), 2),
            d = u[0],
            h = u[1],
            f = i.useRef(null),
            p = i.useCallback(function (e) {
              f.current = e;
            }, []);
          return (
            i.useEffect(
              function () {
                if (a) {
                  if (!l && !d) {
                    var e,
                      n,
                      i,
                      u,
                      p = f.current;
                    if (p && p.tagName)
                      return (
                        (n = (e = (function (e) {
                          var t,
                            r = {
                              root: e.root || null,
                              margin: e.rootMargin || "",
                            },
                            n = s.find(function (e) {
                              return e.root === r.root && e.margin === r.margin;
                            });
                          if (n && (t = c.get(n))) return t;
                          var i = new Map();
                          return (
                            (t = {
                              id: r,
                              observer: new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = i.get(e.target),
                                    r =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && r && t(r);
                                });
                              }, e),
                              elements: i,
                            }),
                            s.push(r),
                            c.set(r, t),
                            t
                          );
                        })({
                          root: null == t ? void 0 : t.current,
                          rootMargin: r,
                        })).id),
                        (i = e.observer),
                        (u = e.elements).set(p, function (e) {
                          return e && h(e);
                        }),
                        i.observe(p),
                        function () {
                          if ((u.delete(p), i.unobserve(p), 0 === u.size)) {
                            i.disconnect(), c.delete(n);
                            var e = s.findIndex(function (e) {
                              return e.root === n.root && e.margin === n.margin;
                            });
                            e > -1 && s.splice(e, 1);
                          }
                        }
                      );
                  }
                } else if (!d) {
                  var g = o.requestIdleCallback(function () {
                    return h(!0);
                  });
                  return function () {
                    return o.cancelIdleCallback(g);
                  };
                }
              },
              [l, r, t, d, f.current]
            ),
            [
              p,
              d,
              i.useCallback(function () {
                h(!1);
              }, []),
            ]
          );
        });
      var i = r(7294),
        o = r(6682),
        a = "function" == typeof IntersectionObserver,
        c = new Map(),
        s = [];
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5505: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AmpStateContext = void 0);
      var n = (0, r(2648).Z)(r(7294)).default.createContext({});
      t.AmpStateContext = n;
    },
    1342: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isInAmpMode = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.ampFirst,
            r = e.hybrid,
            n = e.hasQuery;
          return (
            (void 0 !== t && t) || (void 0 !== r && r && void 0 !== n && n)
          );
        });
    },
    1597: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultHead = u),
        (t.default = void 0);
      var n = r(6495).Z,
        i = r(2648).Z,
        o = (0, r(1598).Z)(r(7294)),
        a = i(r(7271)),
        c = r(5505),
        s = r(236),
        l = r(1342);
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              o.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function d(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" == typeof t || "number" == typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      r(3766);
      var h = ["name", "httpEquiv", "charSet", "itemProp"];
      function f(e, t) {
        var r,
          i,
          a,
          c,
          s = t.inAmpMode;
        return e
          .reduce(d, [])
          .reverse()
          .concat(u(s).reverse())
          .filter(
            ((r = new Set()),
            (i = new Set()),
            (a = new Set()),
            (c = {}),
            function (e) {
              var t = !0,
                n = !1;
              if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                n = !0;
                var o = e.key.slice(e.key.indexOf("$") + 1);
                r.has(o) ? (t = !1) : r.add(o);
              }
              switch (e.type) {
                case "title":
                case "base":
                  i.has(e.type) ? (t = !1) : i.add(e.type);
                  break;
                case "meta":
                  for (var s = 0, l = h.length; s < l; s++) {
                    var u = h[s];
                    if (e.props.hasOwnProperty(u)) {
                      if ("charSet" === u) a.has(u) ? (t = !1) : a.add(u);
                      else {
                        var d = e.props[u],
                          f = c[u] || new Set();
                        ("name" !== u || !n) && f.has(d)
                          ? (t = !1)
                          : (f.add(d), (c[u] = f));
                      }
                    }
                  }
              }
              return t;
            })
          )
          .reverse()
          .map(function (e, t) {
            var r = e.key || t;
            if (
              !s &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (t) {
                return e.props.href.startsWith(t);
              })
            ) {
              var i = n({}, e.props || {});
              return (
                (i["data-href"] = i.href),
                (i.href = void 0),
                (i["data-optimized-fonts"] = !0),
                o.default.cloneElement(e, i)
              );
            }
            return o.default.cloneElement(e, { key: r });
          });
      }
      (t.default = function (e) {
        var t = e.children,
          r = o.useContext(c.AmpStateContext),
          n = o.useContext(s.HeadManagerContext);
        return o.default.createElement(
          a.default,
          {
            reduceComponentsToState: f,
            headManager: n,
            inAmpMode: l.isInAmpMode(r),
          },
          t
        );
      }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    8164: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getImageBlurSvg = function (e) {
          var t = e.widthInt,
            r = e.heightInt,
            n = e.blurWidth,
            i = e.blurHeight,
            o = e.blurDataURL,
            a = e.objectFit,
            c = n || t,
            s = i || r,
            l = o.startsWith("data:image/jpeg")
              ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
              : "";
          return c && s
            ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "
                .concat(c, " ")
                .concat(
                  s,
                  "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"
                )
                .concat(n && i ? "1" : "20", "'/%3E")
                .concat(
                  l,
                  "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(o, "'/%3E%3C/svg%3E")
            : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"
                .concat(
                  "contain" === a
                    ? "xMidYMid"
                    : "cover" === a
                    ? "xMidYMid slice"
                    : "none",
                  "' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(o, "'/%3E%3C/svg%3E");
        });
    },
    1586: function (e, t) {
      "use strict";
      function r(e) {
        var t = e.config,
          r = e.src,
          n = e.width,
          i = e.quality;
        return ""
          .concat(t.path, "?url=")
          .concat(encodeURIComponent(r), "&w=")
          .concat(n, "&q=")
          .concat(i || 75);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (r.__next_img_default = !0),
        (t.default = r);
    },
    7271: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t,
            r = e.headManager,
            c = e.reduceComponentsToState;
          function s() {
            if (r && r.mountedInstances) {
              var t = n.Children.toArray(
                Array.from(r.mountedInstances).filter(Boolean)
              );
              r.updateHead(c(t, e));
            }
          }
          return (
            i &&
              (null == r ||
                null == (t = r.mountedInstances) ||
                t.add(e.children),
              s()),
            o(function () {
              var t;
              return (
                null == r ||
                  null == (t = r.mountedInstances) ||
                  t.add(e.children),
                function () {
                  var t;
                  null == r ||
                    null == (t = r.mountedInstances) ||
                    t.delete(e.children);
                }
              );
            }),
            o(function () {
              return (
                r && (r._pendingUpdate = s),
                function () {
                  r && (r._pendingUpdate = s);
                }
              );
            }),
            a(function () {
              return (
                r &&
                  r._pendingUpdate &&
                  (r._pendingUpdate(), (r._pendingUpdate = null)),
                function () {
                  r &&
                    r._pendingUpdate &&
                    (r._pendingUpdate(), (r._pendingUpdate = null));
                }
              );
            }),
            null
          );
        });
      var n = (0, r(1598).Z)(r(7294)),
        i = !1,
        o = n.useLayoutEffect,
        a = i ? function () {} : n.useEffect;
    },
    3766: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.warnOnce = void 0),
        (t.warnOnce = function (e) {});
    },
    473: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return z;
          },
        });
      var n = r(9499),
        i = r(7294);
      r(5794), r(3814);
      var o = r(2996),
        a = r(5893);
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var l = function () {
          var e = (0, i.useRef)(),
            t = (0, i.useState)(!0),
            r = (t[0], t[1]),
            n = (0, o.Z)().isMobile,
            c = (0, i.useState)({
              width: 72,
              height: 72,
              borderTopRightRadius: "100%",
              borderTopLeftRadius: "100%",
              borderBottomLeftRadius: "100%",
            }),
            l = c[0],
            u = c[1];
          return (
            (0, i.useEffect)(function () {
              window.addEventListener("message", function (e) {
                "object" == typeof e.data &&
                  e.data.type &&
                  ("isChatBox" == e.data.type &&
                    e.data.message &&
                    u(
                      s(
                        s({}, l),
                        {},
                        {
                          height: 480,
                          width: n ? 200 : 390,
                          borderTopRightRadius: "16px",
                          borderTopLeftRadius: "16px",
                          borderBottomLeftRadius: "16px",
                        }
                      )
                    ),
                  "isChatBox" != e.data.type ||
                    e.data.message ||
                    u(s(s({}, l), {}, { width: 72, height: 72 })));
              });
            }, []),
            (0, a.jsx)("iframe", {
              onLoad: function () {
                setTimeout(function () {
                  r(!1);
                }, 1e3);
              },
              ref: e,
              src: "".concat("https://widget-layer.web.app", "/chatbot"),
              style: s(
                s({}, l),
                {},
                {
                  width: l.width,
                  height: l.height,
                  position: "fixed",
                  bottom: "30px",
                  right: "30px",
                  zIndex: 100,
                  backgroundColor: "transparent",
                  transitionProperty: "all",
                  transitionDuration: "150ms",
                  transitionDelay: "150ms",
                }
              ),
              allowTransparency: !0,
            })
          );
        },
        u = r(7166),
        d = r.n(u),
        h = r(8028),
        f = r.n(h),
        p = r(8828),
        g = r(52),
        m = [
          {
            name: "Resources",
            list: [
              {
                title: "Docs",
                link: "https://x.com/xoraichain_eth",
                target: "_blank",
                comingSoon: !0,
              }
            ],
          },
          
        ];
      g.DW.src,
        g.up.src,
        g.$4.src,
        g.jV.src,
        g.Un.src,
        g.Un.src,
        g.EC.src,
        g.Un.src,
        g.Un.src,
        g.EC.src,
        g.Un.src,
        g.Un.src,
        g.Un.src,
        g.Un.src,
        g.EC.src,
        g.Un.src;
      var b = r(5675),
        v = r.n(b),
        y = d().bind(f()),
        _ = [
          {
            name: "Telegram",
            url: "https://t.me/xoraichain_eth",
            icon: (0, a.jsx)(v(), {
              src: g.DW.src,
              alt: "",
              width: 20,
              height: 20,
            }),
          },
          {
            name: "Twitter",
            url: "https://x.com/xoraichain_eth",
            icon: (0, a.jsx)(v(), {
              src: g.up.src,
              alt: "",
              width: 20,
              height: 20,
            }),
          },
          {
            name: "Dextools",
            url: "https://www.dextools.io/app/en/ether/pair-explorer/0x52c4081f12cbfa8ff12a3f0caeea3a5517042435?t=1749942185062",
            icon: (0, a.jsx)(v(), {
              src: "/update/dextools.svg",
              alt: "",
              width: 20,
              height: 20,
            }),
          },
        ],
        w = function () {
          var e = new Date();
          return (0, a.jsxs)("footer", {
            id: y("footer"),
            style: { backgroundImage: 'url("/images/home/footer-bg.png")' },
            children: [
              (0, a.jsx)(v(), {
                className: y("icon"),
                src: "/images/home/footer-circle.png",
                alt: "",
                loading: "lazy",
                width: 48,
                height: 48,
              }),
              (0, a.jsx)("div", {
                className: y("footer-top"),
                children: (0, a.jsx)(p.Z, {
                  children: (0, a.jsxs)("div", {
                    className: y("footer-top-box"),
                    children: [
                      (0, a.jsxs)("div", {
                        className: y("about"),
                        children: [
                          (0, a.jsx)(v(), {
                            src: g.cb.src,
                            alt: "",
                            loading: "lazy",
                            width: 195,
                            height: 40,
                          }),
                          (0, a.jsx)("div", {
                            className: y("text"),
                            children:
                              "Xoraichain is the world's first layer 1 of AI blockchain oracle established in 2024. The project is now driving advancements in human-centric artificial intelligence and cross-chain interoperability, paying the way for next-generation Web3 applications and their mass adoption.",
                          }),
                        ],
                      }),
                      m.map(function (e, t) {
                        return (0, a.jsxs)(
                          "div",
                          {
                            className: y("item"),
                            children: [
                              (0, a.jsx)("h4", {
                                className: y("title"),
                                children: e.name,
                              }),
                              (0, a.jsx)("ul", {
                                children: e.list.map(function (e, t) {
                                  return (0,
                                  a.jsx)("li", { children: (0, a.jsxs)("a", { href: e.link, target: e.target, className: y({ disabled: e.comingSoon }), children: [(0, a.jsx)("span", { className: y("txt"), children: e.title }), e.comingSoon && (0, a.jsx)("span", { className: y("badge"), children: "Coming soon" })] }) }, t);
                                }),
                              }),
                            ],
                          },
                          t
                        );
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: y("footer-bottom"),
                children: (0, a.jsx)(p.Z, {
                  children: (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: y("social"),
                        children: (0, a.jsx)("ul", {
                          children: _.map(function (e, t) {
                            return (0,
                            a.jsx)("li", { children: (0, a.jsx)("a", { href: e.url, target: "_blank", children: e.icon }) }, t);
                          }),
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: y("text"),
                        children: [
                          "\xa9",
                          e.getFullYear(),
                          " Xoraichain Foundation. All Rights Reserved.\xa0",
                          (0, a.jsx)("a", {
                            href: "https://x.com/xoraichain_ethothers/privacy-policy",
                            target: "_blank",
                            children: "Privacy Policy",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        x = r(1664), 
        j = r.n(x),
        k = r(1163),
        A = r(182),
        O = r(1492),
        S = r.n(O),
        E = d().bind(S()),
        C = function (e) {
          return "/control-center" === e
            ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsxs)("div", {
                  className: E("header-link"),
                  children: [
                    (0, a.jsx)(v(), {
                      src: "/images/home/control-center-bg.png",
                      alt: "button background",
                      width: 132,
                      height: 42,
                    }),
                    (0, a.jsx)(j(), {
                      className: E("link-url"),
                      href: "/ecosystem",
                      children: "Home",
                    }),
                  ],
                }),
              })
            : (0, a.jsxs)("div", {
                className: E("header-link"),
                children: [
                  (0, a.jsx)(v(), {
                    src: "/images/home/control-center-bg.png",
                    alt: "button background",
                    width: 132,
                    height: 42,
                  }),
                  (0, a.jsx)(j(), {
                    className: E("link-url"),
                    href: "https://app.xoraichain.com/",
                    children: "Launch App",
                  }),
                ],
              });
        },
        I = function () {
          var e = (0, k.useRouter)(),
            t = (0, i.useState)(!1),
            r = t[0],
            n = t[1];
          return (0, a.jsx)("header", {
            id: E("header"),
            children: (0, a.jsx)(p.Z, {
              children: (0, a.jsxs)("div", {
                className: E("header"),
                children: [
                  (0, a.jsx)("div", {
                    className: E("header-logo"),
                    children: (0, a.jsx)(j(), {
                      href: "/",
                      children: (0, a.jsx)(v(), {
                        src: g.eN.src || "",
                        alt: "logo",
                        width: 195,
                        height: 40,
                      }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: E("rightMenu"),
                    children: [
                      (0, a.jsx)("div", {
                        className: E("linkWrapper"),
                        children: M.map(function (t, r) {
                          return (0, a.jsxs)(
                            "div",
                            {
                              className: E("menuItem"),
                              children: [
                                (0, a.jsx)("div", {
                                  className: E("txt"),
                                  children: t.title,
                                }),
                                (0, a.jsx)("div", {
                                  className: E("dropdown"),
                                  children: t.subMenu.map(function (t, r) {
                                    var n = null == t ? void 0 : t.Icon;
                                    return (0,
                                    a.jsxs)(j(), { className: E({ disable: t.comingSoon, active: t.link && e.pathname.includes(t.link) }), href: t.link || "", target: null != t && t.inApp ? void 0 : "_blank", children: [(0, a.jsxs)("span", { className: E("txtLink"), children: [n && (0, a.jsx)(A.Q, { src: n.src }), t.title, t.comingSoon && (0, a.jsx)("span", { className: E("coming"), children: "Coming soon" })] }), !t.inApp && (0, a.jsx)(A.Q, { src: g.LZ.src, className: E("arrow") })] }, "sub-mb-menu-".concat(t.link, "-").concat(r));
                                  }),
                                }),
                              ],
                            },
                            "menu-mb-key-".concat(r)
                          );
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: E("actions"),
                        children: C(e.asPath),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: E("rightMenuMobile"),
                    children: [
                      (0, a.jsx)("button", {
                        className: E("menuBtn"),
                        onClick: function () {
                          return n(!0);
                        },
                        children: (0, a.jsx)(A.Q, { src: g.Oq.src }),
                      }),
                      (0, a.jsx)("div", {
                        className: E("overlay", { active: r }),
                        onClick: function () {
                          return n(!1);
                        },
                      }),
                      (0, a.jsxs)("div", {
                        className: E("menuMbWrapper", { active: r }),
                        children: [
                          (0, a.jsx)("div", {
                            className: E("linkWrapper"),
                            children: M.map(function (t, r) {
                              return (0, a.jsxs)(
                                "div",
                                {
                                  className: E("menuItem"),
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: E("txt"),
                                      children: t.title,
                                    }),
                                    (0, a.jsx)("div", {
                                      className: E("subMenu"),
                                      children: t.subMenu.map(function (t, r) {
                                        var n = null == t ? void 0 : t.Icon;
                                        return (0,
                                        a.jsxs)(j(), { className: E({ disable: t.comingSoon, active: t.link && e.pathname.includes(t.link) }), href: t.link || "", target: null != t && t.inApp ? void 0 : "_blank", children: [(0, a.jsxs)("span", { className: E("txtLink"), children: [n && (0, a.jsx)(A.Q, { src: n.src }), t.title, t.comingSoon && (0, a.jsx)("span", { className: E("coming"), children: "Coming soon" })] }), !t.inApp && (0, a.jsx)(A.Q, { src: g.LZ.src, className: E("arrow") })] }, "sub-mb-menu-".concat(t.link, "-").concat(r));
                                      }),
                                    }),
                                  ],
                                },
                                "menu-mb-key-".concat(r)
                              );
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: E("actions"),
                            children: C(e.asPath),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        M = [
          
        ],
        H = r(4241),
        W = r.n(H),
        R = d().bind(W()),
        N = function (e) {
          var t = e.children;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(I, {}),
              (0, a.jsxs)("main", {
                id: R("main"),
                className: R("main-container"),
                children: [(0, a.jsx)(l, {}), t],
              }),
              (0, a.jsx)(w, {}),
            ],
          });
        },
        P = r(9008),
        L = r.n(P);
      function T(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var z = function (e) {
        var t = e.Component,
          r = e.pageProps;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(L(), {
              children: (0, a.jsx)("title", {
                children: "Xoraichain - AI x Blockchain for Mass Adoption",
              }),
            }),
            (0, a.jsx)(N, {
              children: (0, a.jsx)(
                t,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? T(Object(r), !0).forEach(function (t) {
                          (0, n.Z)(e, t, r[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r)
                        )
                      : T(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(r, t)
                          );
                        });
                  }
                  return e;
                })({}, r)
              ),
            }),
          ],
        });
      };
    },
    52: function (e, t, r) {
      "use strict";
      r.d(t, {
        Uu: function () {
          return g;
        },
        B2: function () {
          return P;
        },
        ol: function () {
          return o;
        },
        LZ: function () {
          return L;
        },
        oD: function () {
          return c;
        },
        yd: function () {
          return a;
        },
        G5: function () {
          return T;
        },
        kK: function () {
          return z;
        },
        $4: function () {
          return l;
        },
        SO: function () {
          return X;
        },
        jV: function () {
          return u;
        },
        EC: function () {
          return h;
        },
        q$: function () {
          return p;
        },
        Ws: function () {
          return m;
        },
        NS: function () {
          return v;
        },
        ns: function () {
          return R;
        },
        x7: function () {
          return y;
        },
        Ky: function () {
          return _;
        },
        Gj: function () {
          return w;
        },
        lf: function () {
          return x;
        },
        si: function () {
          return W;
        },
        Uv: function () {
          return j;
        },
        zZ: function () {
          return k;
        },
        De: function () {
          return N;
        },
        gR: function () {
          return A;
        },
        IY: function () {
          return O;
        },
        Tf: function () {
          return S;
        },
        lN: function () {
          return E;
        },
        xL: function () {
          return C;
        },
        JD: function () {
          return I;
        },
        Gd: function () {
          return M;
        },
        br: function () {
          return H;
        },
        eU: function () {
          return q;
        },
        LD: function () {
          return D;
        },
        Un: function () {
          return f;
        },
        ow: function () {
          return U;
        },
        eN: function () {
          return n;
        },
        cb: function () {
          return i;
        },
        Oq: function () {
          return Y;
        },
        du: function () {
          return Q;
        },
        wX: function () {
          return G;
        },
        _d: function () {
          return Z;
        },
        E: function () {
          return F;
        },
        l0: function () {
          return B;
        },
        Ro: function () {
          return V;
        },
        WC: function () {
          return b;
        },
        r7: function () {
          return J;
        },
        DW: function () {
          return s;
        },
        up: function () {
          return d;
        },
      });
      var n = {
          src: "/_next/static/media/logoFull.be63b71d.png",
          height: 40,
          width: 195,
          blurWidth: 0,
          blurHeight: 0,
        },
        i = {
          src: "/_next/static/media/logoFullDark.3e1514b7.png",
          height: 40,
          width: 195,
          blurWidth: 0,
          blurHeight: 0,
        },
        o = {
          src: "/_next/static/media/ArrowRight.a089bc59.svg",
          height: 13,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        a = {
          src: "/_next/static/media/coinmarketcap.61337153.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        c = {
          src: "/_next/static/media/coingecko.5c9d07b4.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        s = {
          src: "/_next/static/media/telegram-logo.b7fcebe1.svg",
          height: 18,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        l = {
          src: "/_next/static/media/discord-logo.329ed44d.svg",
          height: 20,
          width: 18,
          blurWidth: 0,
          blurHeight: 0,
        },
        u = {
          src: "/_next/static/media/github-logo.cbd82011.svg",
          height: 19,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = {
          src: "/_next/static/media/twitter-logo.00f96071.svg",
          height: 17,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        h = {
          src: "/_next/static/media/github-round.4ba735f4.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        f = {
          src: "/_next/static/media/linkedin-round.30e1f7a0.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        p = {
          src: "/_next/static/media/hand.563a2c29.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        g = {
          src: "/_next/static/media/ai.0b404b0b.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        m = {
          src: "/_next/static/media/hand-shake.7d49a05c.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        b = {
          src: "/_next/static/media/rocket.84d3d986.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        v = {
          src: "/_next/static/media/academy.6e801dfd.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        },
        y = {
          src: "/_next/static/media/community.470a7062.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        _ = {
          src: "/_next/static/media/core.ae247d2e.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        w = {
          src: "/_next/static/media/decen.0fc429ac.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        },
        x = {
          src: "/_next/static/media/dive.34730ef6.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        j = {
          src: "/_next/static/media/github.034ee68c.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        },
        k = {
          src: "/_next/static/media/intero.5801342c.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        },
        A = {
          src: "/_next/static/media/mainnet.ae93b664.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        },
        O = {
          src: "/_next/static/media/oracle.99cf2d45.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        },
        S = {
          src: "/_next/static/media/paper.a8cd42eb.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        },
        E = {
          src: "/_next/static/media/tele.5d19c48e.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        },
        C = {
          src: "/_next/static/media/token.8fbf4f63.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        },
        I = {
          src: "/_next/static/media/twitter.fc3ea0f5.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        },
        M = {
          src: "/_next/static/media/weath.42cfa69c.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        },
        H = {
          src: "/_next/static/media/zk.fcb6b900.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        },
        W = {
          src: "/_next/static/media/extension.bc89d9db.svg",
          height: 64,
          width: 64,
          blurWidth: 0,
          blurHeight: 0,
        },
        R = {
          src: "/_next/static/media/android.d22e9440.svg",
          height: 64,
          width: 64,
          blurWidth: 0,
          blurHeight: 0,
        },
        N = {
          src: "/_next/static/media/ios.3272ddee.svg",
          height: 64,
          width: 64,
          blurWidth: 0,
          blurHeight: 0,
        },
        P = {
          src: "/_next/static/media/airight.f6618b71.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        L = {
          src: "/_next/static/media/arrow-right.69676347.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        T = {
          src: "/_next/static/media/cupiee.677e9bb9.svg",
          height: 24,
          width: 27,
          blurWidth: 0,
          blurHeight: 0,
        },
        z = {
          src: "/_next/static/media/defi-len.ec66ec48.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        D = {
          src: "/_next/static/media/kawaiiq.b1c6efc4.svg",
          height: 14,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        q = {
          src: "/_next/static/media/kawaiiq_img.16c7109d.png",
          height: 14,
          width: 24,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/ABcAAB4AACEAAD86TyQ2SVZJR5F7UjAwPQBknaxTi5xPg4hwvcBikZ/jxW//55rEpGsAqODrqOTukt/okebkltjgwuPN/+qm6r1oAGy2wHHDzGmzv2yyvmvBzIG+vt61ZryacwAkABknACMdAAASAAAlAAAMCDAAI0oAHjvRZjdB1SxgMQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        },
        U = {
          src: "/_next/static/media/llm.442c4341.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        G = {
          src: "/_next/static/media/neststoke.621fa678.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        Z = {
          src: "/_next/static/media/obridge.af2c2b18.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        F = {
          src: "/_next/static/media/oraidex.8ad3da6b.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        B = {
          src: "/_next/static/media/orchai.5f70ede4.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        V = {
          src: "/_next/static/media/owallet.84a16d62.svg",
          height: 24,
          width: 25,
          blurWidth: 0,
          blurHeight: 0,
        },
        X = {
          src: "/_next/static/media/distilled-ai.032e4e23.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        Q = {
          src: "/_next/static/media/modestus.831e2e9d.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        Y = {
          src: "/_next/static/media/menu_ic.6636e0ba.svg",
          height: 28,
          width: 28,
          blurWidth: 0,
          blurHeight: 0,
        },
        J = {
          src: "/_next/static/media/star_icon.bc7253f7.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        };
    },
    8828: function (e, t, r) {
      "use strict";
      r(7294);
      var n = r(7166),
        i = r.n(n),
        o = r(3896),
        a = r.n(o),
        c = r(5893),
        s = i().bind(a());
      t.Z = function (e) {
        var t = e.children,
          r = e.style,
          n = e.classNames;
        return (0, c.jsx)("div", {
          className: s("container", n),
          style: r,
          children: t,
        });
      };
    },
    2996: function (e, t, r) {
      "use strict";
      var n = r(7294);
      t.Z = function () {
        var e = (0, n.useState)([0, 0]),
          t = e[0],
          r = e[1],
          i = (0, n.useState)(),
          o = i[0],
          a = i[1];
        return (
          (0, n.useEffect)(function () {
            r([window.innerWidth, window.innerHeight]),
              window.innerWidth < 575 ? a(!0) : a(!1);
            var e = function () {
              r([window.innerWidth, window.innerHeight]),
                window.innerWidth < 575 ? a(!0) : a(!1);
            };
            return (
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          { windowSize: t, isMobile: o }
        );
      };
    },
    6840: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(473);
        },
      ]);
    },
    3814: function () {},
    5794: function () {},
    3896: function (e) {
      e.exports = { container: "ContainerCommon_container__zbzPX" };
    },
    8028: function (e) {
      e.exports = {
        "footer-top-box": "Footer_footer-top-box__ncyCf",
        about: "Footer_about__DOnXX",
        text: "Footer_text__TYYKn",
        item: "Footer_item__UvhDF",
        title: "Footer_title__QHJdj",
        disabled: "Footer_disabled__d3KOy",
        txt: "Footer_txt__aK3vY",
        badge: "Footer_badge__0DwEQ",
        "footer-bottom": "Footer_footer-bottom__V8GEt",
        social: "Footer_social__XqLxW",
        footer: "Footer_footer__MpYUT",
        icon: "Footer_icon__4p9Qm",
      };
    },
    1492: function (e) {
      e.exports = {
        header: "Header_header__vtMaK",
        "header-logo": "Header_header-logo__dSYXX",
        "header-link": "Header_header-link__X3nsi",
        "link-url": "Header_link-url__M0TYm",
        actions: "Header_actions__UY3i3",
        "header-bar": "Header_header-bar__3uCZU",
        active: "Header_active__69pAq",
        top: "Header_top__i_okS",
        "not-active": "Header_not-active__Yu7Jp",
        "top-2": "Header_top-2__jSaxa",
        scaled: "Header_scaled__mntIp",
        "scaled-2": "Header_scaled-2__AOJcf",
        bottom: "Header_bottom__i568e",
        "bottom-2": "Header_bottom-2__vQzFv",
        "header-action": "Header_header-action__tAy6Z",
        rightMenu: "Header_rightMenu__KNJx0",
        linkWrapper: "Header_linkWrapper__v7N4t",
        menuItem: "Header_menuItem__bYOsM",
        dropdown: "Header_dropdown__9DZie",
        txt: "Header_txt__45qhk",
        disable: "Header_disable__kJcXG",
        arrow: "Header_arrow__r3vYn",
        txtLink: "Header_txtLink__weXVz",
        coming: "Header_coming__L8xZr",
        rightMenuMobile: "Header_rightMenuMobile__dCX59",
        menuBtn: "Header_menuBtn__9NTpU",
        overlay: "Header_overlay__OAW82",
        menuMbWrapper: "Header_menuMbWrapper__1LROz",
        subMenu: "Header_subMenu__YiWZ_",
      };
    },
    4241: function (e) {
      e.exports = {
        main: "Layout_main__4EibK",
        "main-container": "Layout_main-container__MmnjP",
      };
    },
    9008: function (e, t, r) {
      e.exports = r(1597);
    },
    5675: function (e, t, r) {
      e.exports = r(5074);
    },
    1664: function (e, t, r) {
      e.exports = r(6512);
    },
    1163: function (e, t, r) {
      e.exports = r(1996);
    },
    2703: function (e, t, r) {
      "use strict";
      var n = r(414);
      function i() {}
      function o() {}
      (o.resetWarningCache = i),
        (e.exports = function () {
          function e(e, t, r, i, o, a) {
            if (a !== n) {
              var c = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((c.name = "Invariant Violation"), c);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: i,
          };
          return (r.PropTypes = r), r;
        });
    },
    5697: function (e, t, r) {
      e.exports = r(2703)();
    },
    414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    182: function (e, t, r) {
      "use strict";
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function i(e, t) {
        return (i = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      r.d(t, {
        Q: function () {
          return E;
        },
      });
      var o = r(7582),
        a = r(7811),
        c = new Map(),
        s = function (e) {
          return e.cloneNode(!0);
        },
        l = function () {
          return "file:" === window.location.protocol;
        },
        u = function (e, t, r) {
          var n = new XMLHttpRequest();
          (n.onreadystatechange = function () {
            try {
              if (!/\.svg/i.test(e) && 2 === n.readyState) {
                var t = n.getResponseHeader("Content-Type");
                if (!t) throw Error("Content type not found");
                var i = (0, a.Q)(t).type;
                if (!("image/svg+xml" === i || "text/plain" === i))
                  throw Error("Invalid content type: ".concat(i));
              }
              if (4 === n.readyState) {
                if (404 === n.status || null === n.responseXML)
                  throw Error(
                    l()
                      ? "Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver."
                      : "Unable to load SVG file: " + e
                  );
                if (200 === n.status || (l() && 0 === n.status)) r(null, n);
                else
                  throw Error(
                    "There was a problem injecting the SVG: " +
                      n.status +
                      " " +
                      n.statusText
                  );
              }
            } catch (e) {
              if ((n.abort(), e instanceof Error)) r(e, n);
              else throw e;
            }
          }),
            n.open("GET", e),
            (n.withCredentials = t),
            n.overrideMimeType && n.overrideMimeType("text/xml"),
            n.send();
        },
        d = {},
        h = function (e, t) {
          (d[e] = d[e] || []), d[e].push(t);
        },
        f = function (e) {
          for (
            var t = function (t, r) {
                setTimeout(function () {
                  if (Array.isArray(d[e])) {
                    var r = c.get(e),
                      n = d[e][t];
                    r instanceof SVGSVGElement && n(null, s(r)),
                      r instanceof Error && n(r),
                      t === d[e].length - 1 && delete d[e];
                  }
                }, 0);
              },
              r = 0,
              n = d[e].length;
            r < n;
            r++
          )
            t(r);
        },
        p = function (e, t, r) {
          if (c.has(e)) {
            var n = c.get(e);
            if (void 0 === n) {
              h(e, r);
              return;
            }
            if (n instanceof SVGSVGElement) {
              r(null, s(n));
              return;
            }
          }
          c.set(e, void 0),
            h(e, r),
            u(e, t, function (t, r) {
              var n;
              t
                ? c.set(e, t)
                : (null === (n = r.responseXML) || void 0 === n
                    ? void 0
                    : n.documentElement) instanceof SVGSVGElement &&
                  c.set(e, r.responseXML.documentElement),
                f(e);
            });
        },
        g = function (e, t, r) {
          u(e, t, function (e, t) {
            var n;
            e
              ? r(e)
              : (null === (n = t.responseXML) || void 0 === n
                  ? void 0
                  : n.documentElement) instanceof SVGSVGElement &&
                r(null, t.responseXML.documentElement);
          });
        },
        m = 0,
        b = [],
        v = {},
        y = "http://www.w3.org/1999/xlink",
        _ = function (e, t, r, n, i, a, c) {
          var s = e.getAttribute("data-src") || e.getAttribute("src");
          if (!s) {
            c(Error("Invalid data-src or src attribute"));
            return;
          }
          if (-1 !== b.indexOf(e)) {
            b.splice(b.indexOf(e), 1), (e = null);
            return;
          }
          b.push(e),
            e.setAttribute("src", ""),
            (n ? p : g)(s, i, function (n, i) {
              if (!i) {
                b.splice(b.indexOf(e), 1), (e = null), c(n);
                return;
              }
              var l,
                u,
                d = e.getAttribute("id");
              d && i.setAttribute("id", d);
              var h = e.getAttribute("title");
              h && i.setAttribute("title", h);
              var f = e.getAttribute("width");
              f && i.setAttribute("width", f);
              var p = e.getAttribute("height");
              p && i.setAttribute("height", p);
              var g = Array.from(
                new Set(
                  (0, o.ev)(
                    (0, o.ev)(
                      (0, o.ev)(
                        [],
                        (i.getAttribute("class") || "").split(" "),
                        !0
                      ),
                      ["injected-svg"],
                      !1
                    ),
                    (e.getAttribute("class") || "").split(" "),
                    !0
                  )
                )
              )
                .join(" ")
                .trim();
              i.setAttribute("class", g);
              var _ = e.getAttribute("style");
              _ && i.setAttribute("style", _), i.setAttribute("data-src", s);
              var w = [].filter.call(e.attributes, function (e) {
                return /^data-\w[\w-]*$/.test(e.name);
              });
              if (
                (Array.prototype.forEach.call(w, function (e) {
                  e.name && e.value && i.setAttribute(e.name, e.value);
                }),
                r)
              ) {
                var x,
                  j,
                  k,
                  A,
                  O = {
                    clipPath: ["clip-path"],
                    "color-profile": ["color-profile"],
                    cursor: ["cursor"],
                    filter: ["filter"],
                    linearGradient: ["fill", "stroke"],
                    marker: [
                      "marker",
                      "marker-start",
                      "marker-mid",
                      "marker-end",
                    ],
                    mask: ["mask"],
                    path: [],
                    pattern: ["fill", "stroke"],
                    radialGradient: ["fill", "stroke"],
                  };
                Object.keys(O).forEach(function (e) {
                  (j = O[e]), (x = i.querySelectorAll(e + "[id]"));
                  for (var t = 0, r = x.length; t < r; t++)
                    !(function (e, t) {
                      (A = (k = x[e].id) + "-" + ++m),
                        Array.prototype.forEach.call(j, function (e) {
                          r = i.querySelectorAll("[" + e + '*="' + k + '"]');
                          for (var t = 0, n = r.length; t < n; t++) {
                            var o = r[t].getAttribute(e);
                            (!o ||
                              o.match(RegExp('url\\("?#' + k + '"?\\)'))) &&
                              r[t].setAttribute(e, "url(#" + A + ")");
                          }
                        });
                      for (
                        var r,
                          n = i.querySelectorAll("[*|href]"),
                          o = [],
                          a = 0,
                          c = n.length;
                        a < c;
                        a++
                      ) {
                        var s = n[a].getAttributeNS(y, "href");
                        s && s.toString() === "#" + x[e].id && o.push(n[a]);
                      }
                      for (var l = 0, u = o.length; l < u; l++)
                        o[l].setAttributeNS(y, "href", "#" + A);
                      x[e].id = A;
                    })(t);
                });
              }
              i.removeAttribute("xmlns:a");
              for (
                var S = i.querySelectorAll("script"),
                  E = [],
                  C = 0,
                  I = S.length;
                C < I;
                C++
              )
                ((u = S[C].getAttribute("type")) &&
                  "application/ecmascript" !== u &&
                  "application/javascript" !== u &&
                  "text/javascript" !== u) ||
                  ((l = S[C].innerText || S[C].textContent) && E.push(l),
                  i.removeChild(S[C]));
              if (E.length > 0 && ("always" === t || ("once" === t && !v[s]))) {
                for (var M = 0, H = E.length; M < H; M++)
                  Function(E[M])(window);
                v[s] = !0;
              }
              var W = i.querySelectorAll("style");
              if (
                (Array.prototype.forEach.call(W, function (e) {
                  e.textContent += "";
                }),
                i.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                i.setAttribute("xmlns:xlink", y),
                a(i),
                !e.parentNode)
              ) {
                b.splice(b.indexOf(e), 1),
                  (e = null),
                  c(Error("Parent node is null"));
                return;
              }
              e.parentNode.replaceChild(i, e),
                b.splice(b.indexOf(e), 1),
                (e = null),
                c(null, i);
            });
        },
        w = function (e, t) {
          var r = void 0 === t ? {} : t,
            n = r.afterAll,
            i = void 0 === n ? function () {} : n,
            o = r.afterEach,
            a = void 0 === o ? function () {} : o,
            c = r.beforeEach,
            s = void 0 === c ? function () {} : c,
            l = r.cacheRequests,
            u = void 0 === l || l,
            d = r.evalScripts,
            h = void 0 === d ? "never" : d,
            f = r.httpRequestWithCredentials,
            p = void 0 !== f && f,
            g = r.renumerateIRIElements,
            m = void 0 === g || g;
          if (e && "length" in e)
            for (var b = 0, v = 0, y = e.length; v < y; v++)
              _(e[v], h, m, u, p, s, function (t, r) {
                a(t, r), e && "length" in e && e.length === ++b && i(b);
              });
          else
            e
              ? _(e, h, m, u, p, s, function (t, r) {
                  a(t, r), i(1), (e = null);
                })
              : i(0);
        },
        x = r(5697),
        j = r(7294),
        k = function (e, t) {
          for (var r in e) if (!(r in t)) return !0;
          for (var n in t) if (e[n] !== t[n]) return !0;
          return !1;
        },
        A = [
          "afterInjection",
          "beforeInjection",
          "desc",
          "evalScripts",
          "fallback",
          "httpRequestWithCredentials",
          "loading",
          "renumerateIRIElements",
          "src",
          "title",
          "useRequestCache",
          "wrapper",
        ],
        O = "http://www.w3.org/2000/svg",
        S = "http://www.w3.org/1999/xlink",
        E = (function (e) {
          function t() {
            for (var t, r = arguments.length, n = Array(r), i = 0; i < r; i++)
              n[i] = arguments[i];
            return (
              ((t = e.call.apply(e, [this].concat(n)) || this).initialState = {
                hasError: !1,
                isLoading: !0,
              }),
              (t.state = t.initialState),
              (t._isMounted = !1),
              (t.reactWrapper = void 0),
              (t.nonReactWrapper = void 0),
              (t.refCallback = function (e) {
                t.reactWrapper = e;
              }),
              t
            );
          }
          ((r = t).prototype = Object.create(e.prototype)),
            (r.prototype.constructor = r),
            i(r, e);
          var r,
            o = t.prototype;
          return (
            (o.renderSVG = function () {
              var e = this;
              if (
                this.reactWrapper instanceof
                (
                  (
                    (null == (t = this.reactWrapper)
                      ? void 0
                      : t.ownerDocument) || document
                  ).defaultView || window
                ).Node
              ) {
                var t,
                  r,
                  n,
                  i = this.props,
                  o = i.desc,
                  a = i.evalScripts,
                  c = i.httpRequestWithCredentials,
                  s = i.renumerateIRIElements,
                  l = i.src,
                  u = i.title,
                  d = i.useRequestCache,
                  h = this.props.onError,
                  f = this.props.beforeInjection,
                  p = this.props.afterInjection,
                  g = this.props.wrapper;
                "svg" === g
                  ? ((r = document.createElementNS(O, g)).setAttribute(
                      "xmlns",
                      O
                    ),
                    r.setAttribute("xmlns:xlink", S),
                    (n = document.createElementNS(O, g)))
                  : ((r = document.createElement(g)),
                    (n = document.createElement(g))),
                  r.appendChild(n),
                  (n.dataset.src = l),
                  (this.nonReactWrapper = this.reactWrapper.appendChild(r));
                var m = function (t) {
                  if ((e.removeSVG(), !e._isMounted)) {
                    h(t);
                    return;
                  }
                  e.setState(
                    function () {
                      return { hasError: !0, isLoading: !1 };
                    },
                    function () {
                      h(t);
                    }
                  );
                };
                w(n, {
                  afterEach: function (t, r) {
                    if (t) {
                      m(t);
                      return;
                    }
                    e._isMounted &&
                      e.setState(
                        function () {
                          return { isLoading: !1 };
                        },
                        function () {
                          try {
                            p(r);
                          } catch (e) {
                            m(e);
                          }
                        }
                      );
                  },
                  beforeEach: function (e) {
                    if ((e.setAttribute("role", "img"), o)) {
                      var t = e.querySelector(":scope > desc");
                      t && e.removeChild(t);
                      var r = document.createElement("desc");
                      (r.innerHTML = o), e.prepend(r);
                    }
                    if (u) {
                      var n = e.querySelector(":scope > title");
                      n && e.removeChild(n);
                      var i = document.createElement("title");
                      (i.innerHTML = u), e.prepend(i);
                    }
                    try {
                      f(e);
                    } catch (e) {
                      m(e);
                    }
                  },
                  cacheRequests: d,
                  evalScripts: a,
                  httpRequestWithCredentials: c,
                  renumerateIRIElements: s,
                });
              }
            }),
            (o.removeSVG = function () {
              var e;
              null != (e = this.nonReactWrapper) &&
                e.parentNode &&
                (this.nonReactWrapper.parentNode.removeChild(
                  this.nonReactWrapper
                ),
                (this.nonReactWrapper = null));
            }),
            (o.componentDidMount = function () {
              (this._isMounted = !0), this.renderSVG();
            }),
            (o.componentDidUpdate = function (e) {
              var t = this;
              k(n({}, e), this.props) &&
                this.setState(
                  function () {
                    return t.initialState;
                  },
                  function () {
                    t.removeSVG(), t.renderSVG();
                  }
                );
            }),
            (o.componentWillUnmount = function () {
              (this._isMounted = !1), this.removeSVG();
            }),
            (o.render = function () {
              var e = this.props;
              e.afterInjection, e.beforeInjection, e.desc, e.evalScripts;
              var t = e.fallback;
              e.httpRequestWithCredentials;
              var r = e.loading;
              e.renumerateIRIElements, e.src, e.title, e.useRequestCache;
              var i = e.wrapper,
                o = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                      if (t.indexOf(n) >= 0) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, A);
              return j.createElement(
                i,
                n(
                  {},
                  o,
                  { ref: this.refCallback },
                  "svg" === i ? { xmlns: O, xmlnsXlink: S } : {}
                ),
                this.state.isLoading && r && j.createElement(r, null),
                this.state.hasError && t && j.createElement(t, null)
              );
            }),
            t
          );
        })(j.Component);
      (E.defaultProps = {
        afterInjection: function () {},
        beforeInjection: function () {},
        desc: "",
        evalScripts: "never",
        fallback: null,
        httpRequestWithCredentials: !1,
        loading: null,
        onError: function () {},
        renumerateIRIElements: !0,
        title: "",
        useRequestCache: !0,
        wrapper: "div",
      }),
        (E.propTypes = {
          afterInjection: x.func,
          beforeInjection: x.func,
          desc: x.string,
          evalScripts: x.oneOf(["always", "once", "never"]),
          fallback: x.oneOfType([x.func, x.object, x.string]),
          httpRequestWithCredentials: x.bool,
          loading: x.oneOfType([x.func, x.object, x.string]),
          onError: x.func,
          renumerateIRIElements: x.bool,
          src: x.string.isRequired,
          title: x.string,
          useRequestCache: x.bool,
          wrapper: x.oneOf(["div", "span", "svg"]),
        });
    },
    9499: function (e, t, r) {
      "use strict";
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    7582: function (e, t, r) {
      "use strict";
      r.d(t, {
        CR: function () {
          return c;
        },
        ZT: function () {
          return i;
        },
        _T: function () {
          return a;
        },
        ev: function () {
          return s;
        },
        pi: function () {
          return o;
        },
      });
      var n = function (e, t) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(e, t);
      };
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function a(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, n = Object.getOwnPropertySymbols(e);
            i < n.length;
            i++
          )
            0 > t.indexOf(n[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        return r;
      }
      function c(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          o = r.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
            a.push(n.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function s(e, t, r) {
        if (r || 2 == arguments.length)
          for (var n, i = 0, o = t.length; i < o; i++)
            (!n && i in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      "function" == typeof SuppressedError && SuppressedError;
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6840), t(1996);
    }),
      (_N_E = e.O());
  },
]);
