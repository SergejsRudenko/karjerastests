var cookieconsent = (function (e) {
    var o = {};
    function t(n) {
        if (o[n]) return o[n].exports;
        var i = (o[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    return (
        (t.m = e),
        (t.c = o),
        (t.d = function (e, o, n) {
            t.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: n });
        }),
        (t.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (t.t = function (e, o) {
            if ((1 & o && (e = t(e)), 8 & o)) return e;
            if (4 & o && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if ((t.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & o && "string" != typeof e))
                for (var i in e)
                    t.d(
                        n,
                        i,
                        function (o) {
                            return e[o];
                        }.bind(null, i)
                    );
            return n;
        }),
        (t.n = function (e) {
            var o =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return t.d(o, "a", o), o;
        }),
        (t.o = function (e, o) {
            return Object.prototype.hasOwnProperty.call(e, o);
        }),
        (t.p = ""),
        t((t.s = 31))
    );
})([
    function (e, o, t) {
        "use strict";
        e.exports = function (e) {
            var o = [];
            return (
                (o.toString = function () {
                    return this.map(function (o) {
                        var t = (function (e, o) {
                            var t = e[1] || "",
                                n = e[3];
                            if (!n) return t;
                            if (o && "function" == typeof btoa) {
                                var i = ((r = n), "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"),
                                    a = n.sources.map(function (e) {
                                        return "/*# sourceURL=" + n.sourceRoot + e + " */";
                                    });
                                return [t].concat(a).concat([i]).join("\n");
                            }
                            var r;
                            return [t].join("\n");
                        })(o, e);
                        return o[2] ? "@media " + o[2] + "{" + t + "}" : t;
                    }).join("");
                }),
                (o.i = function (e, t) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    for (var n = {}, i = 0; i < this.length; i++) {
                        var a = this[i][0];
                        null != a && (n[a] = !0);
                    }
                    for (i = 0; i < e.length; i++) {
                        var r = e[i];
                        (null != r[0] && n[r[0]]) || (t && !r[2] ? (r[2] = t) : t && (r[2] = "(" + r[2] + ") and (" + t + ")"), o.push(r));
                    }
                }),
                o
            );
        };
    },
    function (e, o, t) {
        var n,
            i,
            a = {},
            r =
                ((n = function () {
                    return window && document && document.all && !window.atob;
                }),
                function () {
                    return void 0 === i && (i = n.apply(this, arguments)), i;
                }),
            s = function (e, o) {
                return o ? o.querySelector(e) : document.querySelector(e);
            },
            c = (function (e) {
                var o = {};
                return function (e, t) {
                    if ("function" == typeof e) return e();
                    if (void 0 === o[e]) {
                        var n = s.call(this, e, t);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head;
                            } catch (e) {
                                n = null;
                            }
                        o[e] = n;
                    }
                    return o[e];
                };
            })(),
            l = null,
            p = 0,
            d = [],
            u = t(24);
        function k(e, o) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t],
                    i = a[n.id];
                if (i) {
                    i.refs++;
                    for (var r = 0; r < i.parts.length; r++) i.parts[r](n.parts[r]);
                    for (; r < n.parts.length; r++) i.parts.push(g(n.parts[r], o));
                } else {
                    var s = [];
                    for (r = 0; r < n.parts.length; r++) s.push(g(n.parts[r], o));
                    a[n.id] = { id: n.id, refs: 1, parts: s };
                }
            }
        }
        function v(e, o) {
            for (var t = [], n = {}, i = 0; i < e.length; i++) {
                var a = e[i],
                    r = o.base ? a[0] + o.base : a[0],
                    s = { css: a[1], media: a[2], sourceMap: a[3] };
                n[r] ? n[r].parts.push(s) : t.push((n[r] = { id: r, parts: [s] }));
            }
            return t;
        }
        function m(e, o) {
            var t = c(e.insertInto);
            if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var n = d[d.length - 1];
            if ("top" === e.insertAt) n ? (n.nextSibling ? t.insertBefore(o, n.nextSibling) : t.appendChild(o)) : t.insertBefore(o, t.firstChild), d.push(o);
            else if ("bottom" === e.insertAt) t.appendChild(o);
            else {
                if ("object" != typeof e.insertAt || !e.insertAt.before)
                    throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var i = c(e.insertAt.before, t);
                t.insertBefore(o, i);
            }
        }
        function f(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var o = d.indexOf(e);
            o >= 0 && d.splice(o, 1);
        }
        function _(e) {
            var o = document.createElement("style");
            if ((void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce)) {
                var n = (function () {
                    0;
                    return t.nc;
                })();
                n && (e.attrs.nonce = n);
            }
            return h(o, e.attrs), m(e, o), o;
        }
        function h(e, o) {
            Object.keys(o).forEach(function (t) {
                e.setAttribute(t, o[t]);
            });
        }
        function g(e, o) {
            var t, n, i, a;
            if (o.transform && e.css) {
                if (!(a = "function" == typeof o.transform ? o.transform(e.css) : o.transform.default(e.css))) return function () {};
                e.css = a;
            }
            if (o.singleton) {
                var r = p++;
                (t = l || (l = _(o))), (n = w.bind(null, t, r, !1)), (i = w.bind(null, t, r, !0));
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa
                    ? ((t = (function (e) {
                          var o = document.createElement("link");
                          return void 0 === e.attrs.type && (e.attrs.type = "text/css"), (e.attrs.rel = "stylesheet"), h(o, e.attrs), m(e, o), o;
                      })(o)),
                      (n = j.bind(null, t, o)),
                      (i = function () {
                          f(t), t.href && URL.revokeObjectURL(t.href);
                      }))
                    : ((t = _(o)),
                      (n = z.bind(null, t)),
                      (i = function () {
                          f(t);
                      }));
            return (
                n(e),
                function (o) {
                    if (o) {
                        if (o.css === e.css && o.media === e.media && o.sourceMap === e.sourceMap) return;
                        n((e = o));
                    } else i();
                }
            );
        }
        e.exports = function (e, o) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            ((o = o || {}).attrs = "object" == typeof o.attrs ? o.attrs : {}), o.singleton || "boolean" == typeof o.singleton || (o.singleton = r()), o.insertInto || (o.insertInto = "head"), o.insertAt || (o.insertAt = "bottom");
            var t = v(e, o);
            return (
                k(t, o),
                function (e) {
                    for (var n = [], i = 0; i < t.length; i++) {
                        var r = t[i];
                        (s = a[r.id]).refs--, n.push(s);
                    }
                    e && k(v(e, o), o);
                    for (i = 0; i < n.length; i++) {
                        var s;
                        if (0 === (s = n[i]).refs) {
                            for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                            delete a[s.id];
                        }
                    }
                }
            );
        };
        var b,
            y =
                ((b = []),
                function (e, o) {
                    return (b[e] = o), b.filter(Boolean).join("\n");
                });
        function w(e, o, t, n) {
            var i = t ? "" : n.css;
            if (e.styleSheet) e.styleSheet.cssText = y(o, i);
            else {
                var a = document.createTextNode(i),
                    r = e.childNodes;
                r[o] && e.removeChild(r[o]), r.length ? e.insertBefore(a, r[o]) : e.appendChild(a);
            }
        }
        function z(e, o) {
            var t = o.css,
                n = o.media;
            if ((n && e.setAttribute("media", n), e.styleSheet)) e.styleSheet.cssText = t;
            else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(t));
            }
        }
        function j(e, o, t) {
            var n = t.css,
                i = t.sourceMap,
                a = void 0 === o.convertToAbsoluteUrls && i;
            (o.convertToAbsoluteUrls || a) && (n = u(n)), i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var r = new Blob([n], { type: "text/css" }),
                s = e.href;
            (e.href = URL.createObjectURL(r)), s && URL.revokeObjectURL(s);
        }
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e) {
        e.exports = JSON.parse(
            cookieTranslationEN
        );
    },
    function (e, o, t) {
        var n = t(23);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var i = { hmr: !0, transform: void 0, insertInto: void 0 };
        t(1)(n, i);
        n.locals && (e.exports = n.locals);
    },
    function (e, o, t) {
        (e.exports = t(0)(!1)).push([
            e.i,
            '.cc_css_reboot{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent;margin:0;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}.cc_css_reboot *,.cc_css_reboot *::before,.cc_css_reboot *::after{box-sizing:border-box}.cc_css_reboot a,.cc_css_reboot li,.cc_css_reboot p,.cc_css_reboot h1,.cc_css_reboot h2,.cc_css_reboot h3,.cc_css_reboot h4,.cc_css_reboot h5,.cc_css_reboot h6,.cc_css_reboot input,.cc_css_reboot button,.cc_css_reboot select{border-style:none;box-shadow:none;margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;outline:none}@-ms-viewport{.cc_css_reboot{width:device-width}}.cc_css_reboot article,.cc_css_reboot aside,.cc_css_reboot figcaption,.cc_css_reboot figure,.cc_css_reboot footer,.cc_css_reboot header,.cc_css_reboot hgroup,.cc_css_reboot main,.cc_css_reboot nav,.cc_css_reboot section{display:block}.cc_css_reboot [tabindex="-1"]:focus{outline:0 !important}.cc_css_reboot hr{box-sizing:content-box;height:0;overflow:visible}.cc_css_reboot h1,.cc_css_reboot h2,.cc_css_reboot h3,.cc_css_reboot h4,.cc_css_reboot h5,.cc_css_reboot h6{margin-top:0;margin-bottom:0.5rem;color:#000}.cc_css_reboot p{margin-top:0;margin-bottom:1rem}.cc_css_reboot abbr[title],.cc_css_reboot abbr[data-original-title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0}.cc_css_reboot address{margin-bottom:1rem;font-style:normal;line-height:inherit}.cc_css_reboot div{display:block}.cc_css_reboot ol,.cc_css_reboot ul,.cc_css_reboot dl{margin-top:0;margin-bottom:1rem}.cc_css_reboot ol ol,.cc_css_reboot ul ul,.cc_css_reboot ol ul,.cc_css_reboot ul ol{margin-bottom:0}.cc_css_reboot b,.cc_css_reboot strong{font-weight:bolder}.cc_css_reboot small{font-size:80%}.cc_css_reboot sub,.cc_css_reboot sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}.cc_css_reboot sub{bottom:-.25em}.cc_css_reboot sup{top:-.5em}.cc_css_reboot a{color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}.cc_css_reboot a:hover{color:#0056b3;text-decoration:underline}.cc_css_reboot a:not([href]):not([tabindex]){color:inherit;text-decoration:none}.cc_css_reboot a:not([href]):not([tabindex]):hover,.cc_css_reboot a:not([href]):not([tabindex]):focus{color:inherit;text-decoration:none}.cc_css_reboot a:not([href]):not([tabindex]):focus{outline:0}.cc_css_reboot img{vertical-align:middle;border-style:none}.cc_css_reboot svg:not(:root){overflow:hidden}.cc_css_reboot table{border-collapse:collapse}.cc_css_reboot caption{padding-top:0.75rem;padding-bottom:0.75rem;color:#6c757d;text-align:left;caption-side:bottom}.cc_css_reboot th{text-align:inherit}.cc_css_reboot label{display:inline-block;margin-bottom:0.5rem}.cc_css_reboot button{border-radius:2px;padding:.5rem 1rem;outline:none;background:#dcdae5;color:#111;cursor:pointer;border:none;transition:all ease .3s}.cc_css_reboot button:focus{outline:none}.cc_css_reboot select{border-style:none}.cc_css_reboot input,.cc_css_reboot button,.cc_css_reboot select,.cc_css_reboot optgroup,.cc_css_reboot textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}.cc_css_reboot button,.cc_css_reboot input{overflow:visible}.cc_css_reboot button,.cc_css_reboot select{text-transform:none}.cc_css_reboot button,.cc_css_reboot html [type="button"],.cc_css_reboot [type="reset"],.cc_css_reboot [type="submit"]{-webkit-appearance:button}.cc_css_reboot button::-moz-focus-inner,.cc_css_reboot [type="button"]::-moz-focus-inner,.cc_css_reboot [type="reset"]::-moz-focus-inner,.cc_css_reboot [type="submit"]::-moz-focus-inner{padding:0;border-style:none}.cc_css_reboot input[type="radio"],.cc_css_reboot input[type="checkbox"]{box-sizing:border-box;padding:0}.cc_css_reboot input[type="date"],.cc_css_reboot input[type="time"],.cc_css_reboot input[type="datetime-local"],.cc_css_reboot input[type="month"]{-webkit-appearance:listbox}.cc_css_reboot textarea{overflow:auto;resize:vertical}.cc_css_reboot fieldset{min-width:0;padding:0;margin:0;border:0}.cc_css_reboot legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}.cc_css_reboot progress{vertical-align:baseline}.cc_css_reboot [type="number"]::-webkit-inner-spin-button,.cc_css_reboot [type="number"]::-webkit-outer-spin-button{height:auto}.cc_css_reboot [type="search"]{outline-offset:-2px;-webkit-appearance:none}.cc_css_reboot [type="search"]::-webkit-search-cancel-button,.cc_css_reboot [type="search"]::-webkit-search-decoration{-webkit-appearance:none}.cc_css_reboot ::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}.cc_css_reboot [hidden]{display:none !important}\n',
            "",
        ]);
    },
    function (e, o) {
        e.exports = function (e) {
            var o = "undefined" != typeof window && window.location;
            if (!o) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var t = o.protocol + "//" + o.host,
                n = t + o.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, o) {
                var i,
                    a = o
                        .trim()
                        .replace(/^"(.*)"$/, function (e, o) {
                            return o;
                        })
                        .replace(/^'(.*)'$/, function (e, o) {
                            return o;
                        });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? e : ((i = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? t + a : n + a.replace(/^\.\//, "")), "url(" + JSON.stringify(i) + ")");
            });
        };
    },
    function (e, o, t) {
        var n = t(26);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var i = { hmr: !0, transform: void 0, insertInto: void 0 };
        t(1)(n, i);
        n.locals && (e.exports = n.locals);
    },
    function (e, o, t) {
        (e.exports = t(0)(!1)).push([
            e.i,
            '.cc_overlay_lock{position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,0.8);z-index:9999999999}.cc_overlay_lock.hidden{display:none}.cc_dialog{background-color:#f2f2f2;color:#111;z-index:99999999999;font-size:16px;padding:3rem}.cc_dialog.hidden{display:none}.cc_dialog.headline{right:0;top:0;bottom:auto;left:0;max-width:100%;position:relative}.cc_dialog.simple{right:0;top:auto;bottom:0;left:auto;max-width:50%;position:fixed}.cc_dialog.interstitial{right:3vw;top:3vh;left:3vw;max-width:100%;position:fixed}.cc_dialog.standalone{position:fixed;top:0;left:0;height:100%;width:100%}.cc_dialog .cc_dialog_headline{font-size:24px;font-weight:600}.cc_dialog .cc_dialog_text{font-size:16px}.cc_dialog button{font-weight:bold;font-size:14px}.cc_dialog .cookie-consent-preferences-overlay{width:100%;height:100%;position:fixed;background:rgba(0,0,0,0.5);z-index:999999999999;top:0;left:0;display:none}.cookie-consent-preferences-overlay.visible{display:block}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog{position:absolute;margin:30px auto;width:750px;max-width:90%;height:auto;left:0;right:0}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container{width:100%;display:flex;background:#fff;flex-direction:column}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container>div{width:100%}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head{background:#fff;color:#111;display:flex;flex-direction:row;justify-content:space-between}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title{display:flex;padding-left:15px;flex-direction:column;justify-content:center;align-items:baseline}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title h2,.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title p{margin:0}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title p{font-size:16px;line-height:1.5}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title h2{font-size:20px;font-weight:600}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector{display:flex;align-items:center;padding-right:15px;min-height:80px;justify-content:center}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content{display:flex;flex-direction:row;align-items:stretch;background:#292929;color:#f5f5f5;border-bottom:none}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu{font-family:Arial, sans-serif !important;width:150px;margin:0;padding:0;background:#e6e6e6;min-width:150px}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li{margin:0;padding:0;float:left;display:block;width:100%;color:#666;background:#e6e6e6;border-bottom:1px solid #ccc;border-right:1px solid #ccc;transition:all ease .1s;box-sizing:content-box}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true]{background:#292929;color:#f5f5f5}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a{text-decoration:none;color:#666;display:block;padding:10px 5px 10px 10px;font-weight:700;font-size:12px;line-height:19px}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content{background:#292929 !important;color:#f5f5f5}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry{width:100%;display:none;padding:25px;box-sizing:border-box}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry[active=true]{display:block}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry h1{font-size:24px;font-weight:600}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry p{font-size:16px;line-height:1.5}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer{background:#f2f2f2;display:flex;flex-direction:row;align-items:center;border-top:1px solid #ccc;justify-content:space-between}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by{padding:20px 10px;font-size:14px;color:#333;display:block !important}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by a{color:#999}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button{margin-right:10px;opacity:.9;transition:all ease .3s;font-size:14px;font-weight:bold;height:auto}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button:hover{opacity:1}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent{position:absolute;margin:2px 0 0 16px;cursor:pointer}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent+label{position:relative;padding:4px 0 0 50px;line-height:2.0em;cursor:pointer;display:inline;font-size:14px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent+label:before{content:"";position:absolute;display:block;left:0;top:0;width:40px;height:24px;border-radius:16px;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all 0.3s;transition:all 0.3s}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent+label:after{content:"";position:absolute;display:block;left:0px;top:0px;width:24px;height:24px;border-radius:16px;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all 0.3s;transition:all 0.3s}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent+label:hover:after{box-shadow:0 0 5px rgba(0,0,0,0.3)}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent:checked+label:after{margin-left:16px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent:checked+label:before{background:#55D069}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm{position:absolute;margin:5px 0 0 10px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm+label{position:relative;padding:0 0 0 32px;line-height:1.3em}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm+label:before{content:"";position:absolute;display:block;left:0;top:0;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all 0.3s;transition:all 0.3s;width:25px;height:15px;border-radius:10px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm+label:after{content:"";position:absolute;display:block;left:0px;top:0px;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all 0.3s;transition:all 0.3s;width:15px;height:15px;border-radius:10px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm+label:hover:after{box-shadow:0 0 3px rgba(0,0,0,0.3)}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm:checked+label:after{margin-left:10px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm:checked+label:before{background:#55D069}@media screen and (max-width: 600px){.cookie-consent-preferences-overlay{overflow-y:scroll}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head{flex-direction:column}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title{align-items:center;padding:15px 0 0 0}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector{padding:15px 0;min-height:20px}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content{flex-direction:column}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu{width:100%}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li{border-right:0}}\n',
            "",
        ]);
    },
    function (e, o, t) {
        var n = t(28);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var i = { hmr: !0, transform: void 0, insertInto: void 0 };
        t(1)(n, i);
        n.locals && (e.exports = n.locals);
    },
    function (e, o, t) {
        (e.exports = t(0)(!1)).push([
            e.i,
            ".dark.cc_dialog{background-color:#111;color:#fff}.dark.cc_dialog .cc_dialog_headline{color:#fff}.dark.cc_dialog .cc_dialog_text{color:#fff}.dark.cc_dialog .dark.cc_dialog button.cc_b_cp{background-color:#eaeaea;color:#111}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container{background:#212121}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head{background:#212121;color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head h2{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head p{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector select{color:#212121}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content{background:#292929 !important;color:#f5f5f5}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu{color:#666;background:#e6e6e6}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li{border-right-color:#ccc;border-bottom-color:#ccc}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true]{background:#292929 !important}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true] a{color:#f5f5f5 !important}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a{color:#666}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content{background:#292929 !important;color:#f5f5f5}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content h1{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content p{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content a{color:#cce5ff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer{background:#212121;border-top-color:#111}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button{background:#ff0;color:#000}\n",
            "",
        ]);
    },
    function (e, o, t) {
        var n = t(30);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var i = { hmr: !0, transform: void 0, insertInto: void 0 };
        t(1)(n, i);
        n.locals && (e.exports = n.locals);
    },
    function (e, o, t) {
        (e.exports = t(0)(!1)).push([
            e.i,
            ".light.cc_dialog{background-color:#FFFFFF;color:#000}.light.cc_dialog .cc_dialog_headline{color:#111}.light.cc_dialog .cc_dialog_text{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container{background:#fff}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head{background:#fff;color:#111;border-bottom:1px solid #ccc}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head h2{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head p{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector select{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content{background:#fbfbfb !important;color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu{color:#666;background:#e6e6e6}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li{border-right-color:#ccc;border-bottom-color:#ccc}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true]{background:#fbfbfb !important}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true] a{color:#111 !important}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a{color:#666}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content{background:#fbfbfb !important;color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content h1{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content p{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content a{color:#007bff}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer{background:#f2f2f2;border-top-color:#ccc}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button{background:green;color:#fff}\n",
            "",
        ]);
    },
    function (e, o, t) {
        "use strict";
        t.r(o),
            t.d(o, "run", function () {
                return $;
            }),
            t.d(o, "consentDebugger", function () {
                return i;
            });
        t(22), t(25), t(27), t(29);
        var n,
            i,
            a = (function () {
                function e() {}
                return (
                    (e.insertCss = function (e) {
                        var o = document.querySelector("head"),
                            t = document.createElement("link");
                        t.setAttribute("href", e), t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), o.appendChild(t);
                    }),
                    (e.appendChild = function (e, o, t) {
                        var n, i;
                        return (
                            void 0 === t && (t = null),
                            (n = "string" == typeof e ? document.querySelector(e) : e),
                            (i = "string" == typeof o ? document.querySelector(o) : o),
                            "afterbegin" === t ? n.insertAdjacentElement("afterbegin", i) : n.insertAdjacentElement("beforeend", i),
                            !0
                        );
                    }),
                    (e.setCookie = function (e, o, t) {
                        void 0 === t && (t = 62);
                        var n = new Date();
                        n.setTime(n.getTime() + 24 * t * 60 * 60 * 1e3);
                        var i = "; expires=" + n.toUTCString();
                        return (document.cookie = e + "=" + (o || "") + i + "; path=/"), !0;
                    }),
                    (e.getCookie = function (e) {
                        for (var o = e + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                            for (var i = t[n]; " " === i.charAt(0); ) i = i.substring(1, i.length);
                            if (0 === i.indexOf(o)) return i.substring(o.length, i.length);
                        }
                        return null;
                    }),
                    (e.removeCookie = function (e) {
                        document.cookie = e + "=; Max-Age=-99999999;";
                    }),
                    (e.registerEvent = function (e) {
                        var o = document.createEvent("Event");
                        return o.initEvent(e, !0, !0), o;
                    }),
                    (e.searchObjectsArray = function (e, o, t) {
                        for (var n in e) {
                            if (e[n][o] === t) return !0;
                        }
                        return !1;
                    }),
                    (e.magicTransform = function (e) {
                        return decodeURIComponent(
                            atob(e)
                                .split("")
                                .map(function (e) {
                                    return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
                                })
                                .join("")
                        );
                    }),
                    (e.isValidUrl = function (e) {
                        return new RegExp("^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e);
                    }),
                    e
                );
            })(),
            r = t(2),
            s = t(3),
            c = t(4),
            l = t(5),
            p = t(6),
            d = t(7),
            u = t(8),
            k = t(9),
            v = t(10),
            m = t(11),
            f = t(12),
            _ = t(13),
            h = t(14),
            g = t(15),
            b = t(16),
            y = t(17),
            w = t(18),
            z = t(19),
            j = t(20),
            C = t(21),
            x = (function () {
                function e(e) {
                    (this.cookieConsent = e), (this.userLang = "en"), this.initAvailableLanguages(), this.initDefaultTranslations(), this.detectUserLanguage();
                }
                return (
                    (e.prototype.detectUserLanguage = function () {
                        var e = "en";
                        if (void 0 !== (e = void 0 !== navigator.languages ? navigator.languages[0] : navigator.language)) {
                            if (e.indexOf("-") > 0) {
                                var o = e.split("-");
                                e = o[0];
                            }
                            this.cookieConsent.log("[i18n] Detected user default language: " + e, "info");
                        } else e = this.cookieConsent.ownerSiteLanguage;
                        var t = e.toLowerCase.toString();
                        this.availableTranslations[t] ? (this.userLang = t) : this.availableTranslations[this.cookieConsent.ownerSiteLanguage] ? (this.userLang = this.cookieConsent.ownerSiteLanguage) : (this.userLang = "en");
                    }),
                    (e.prototype.initDefaultTranslations = function () {
                        (this.availableTranslations = { en: r, de: s, fr: c, es: l, ca_es: p, it: d, nl: u, pt: k, fi: v, hu: m, hr: f, cs: _, da: h, ro: g, sl: b, pl: y, sr: w, bg: z, el: j, cy: C }),
                            this.cookieConsent.log("[i18n] Default translations initialized", "info");
                    }),
                    (e.prototype.initAvailableLanguages = function () {
                        (this.availableLanguages = [
                            { value: "en", title: "English" },
                            { value: "de", title: "German" },
                            { value: "fr", title: "French" },
                            { value: "es", title: "Spanish" },
                            { value: "ca_es", title: "Catalan" },
                            { value: "it", title: "Italian" },
                            { value: "nl", title: "Dutch" },
                            { value: "pt", title: "Portugese" },
                            { value: "fi", title: "Finnish" },
                            { value: "hu", title: "Hungarian" },
                            { value: "hr", title: "Croatian" },
                            { value: "cs", title: "Czech" },
                            { value: "da", title: "Danish" },
                            { value: "ro", title: "Romanian" },
                            { value: "sl", title: "Slovenian" },
                            { value: "pl", title: "Polish" },
                            { value: "sr", title: "Serbian" },
                            { value: "bg", title: "Bulgarian" },
                            { value: "el", title: "Greek" },
                            { value: "cy", title: "Welsh" },
                        ]),
                            this.cookieConsent.log("[i18n] Default languages initialized", "info");
                    }),
                    (e.prototype.$t = function (e, o, t) {
                        void 0 === t && (t = null);
                        var n = this.availableTranslations[this.userLang][e][o];
                        return (
                            "string" == typeof t
                                ? (n = n.replace("%s", t))
                                : Array.isArray(t) &&
                                  t.map(function (e, o) {
                                      var i = t[o];
                                      n = n.replace("%s", i);
                                  }),
                            n || ""
                        );
                    }),
                    e
                );
            })(),
            L =
                ((n = function (e, o) {
                    return (n =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (e, o) {
                                e.__proto__ = o;
                            }) ||
                        function (e, o) {
                            for (var t in o) o.hasOwnProperty(t) && (e[t] = o[t]);
                        })(e, o);
                }),
                function (e, o) {
                    function t() {
                        this.constructor = e;
                    }
                    n(e, o), (e.prototype = null === o ? Object.create(o) : ((t.prototype = o.prototype), new t()));
                }),
            S = (function () {
                function e(e) {
                    (this.scripts = {}), (this.cookieConsent = e), this.cookieConsent.log("Javascript items initialized.", "info"), this.readScripts();
                }
                return (
                    (e.prototype.readScripts = function () {
                        var e = document.querySelectorAll('script[type="text/plain"]');
                        for (var o in e) {
                            var t = e[o];
                            "object" == typeof t && this._noticeScriptIfValid(t);
                        }
                    }),
                    (e.prototype._noticeScriptIfValid = function (e) {
                        var o = e.getAttribute("cookie-consent");
                        !0 === a.searchObjectsArray(this.cookieConsent.cookieLevels.cookieLevels, "id", o)
                            ? (this.cookieConsent.log("Javascript with valid cookie consent found", "info"), this.cookieConsent.log(e, "info"), void 0 === this.scripts[o] && (this.scripts[o] = []), this.scripts[o].push(e))
                            : this.cookieConsent.log("Invalid cookie consent level for javascript sript: " + o, "warning");
                    }),
                    (e.prototype.enableScriptsByLevel = function (e) {
                        for (var o in this.scripts[e])
                            try {
                                var t = this.scripts[e][o],
                                    n = document.createElement("script");
                                n.setAttribute("type", "text/javascript"),
                                    n.setAttribute("initial-cookie-consent", t.getAttribute("cookie-consent")),
                                    null !== t.getAttribute("src") && n.setAttribute("src", t.getAttribute("src")),
                                    (n.text = t.innerHTML),
                                    a.appendChild("head", n),
                                    t.parentNode.removeChild(t),
                                    delete this.scripts[e][o];
                            } catch (e) {
                                this.cookieConsent.log("Got an error while trying to activate a script template, message: " + e.message.toString(), "log");
                            }
                    }),
                    e
                );
            })(),
            A = (function () {
                function e(e) {
                    (this.acceptedLevels = {}),
                        (this.userAccepted = !1),
                        (this.consentLevelCookieName = "cookie_consent_level"),
                        (this.consentAcceptedCookieName = "cookie_consent_user_accepted"),
                        (this.loadCookiesUntilAndInclude = "strictly-necessary"),
                        (this.cookieConsent = e),
                        this.cookieConsent.log("UserConsent initialized.", "info"),
                        this.checkIfUserAccepted(),
                        this.getUserLevels();
                }
                return (
                    (e.prototype.checkIfUserAccepted = function () {
                        "true" === a.getCookie(this.consentAcceptedCookieName) && (this.userAccepted = !0);
                    }),
                    (e.prototype.markUserAccepted = function () {
                        (this.userAccepted = !0), !1 === this.cookieConsent.isDemo && a.setCookie(this.consentAcceptedCookieName, "true");
                    }),
                    (e.prototype.getUserLevels = function () {
                        var e = a.getCookie(this.consentLevelCookieName),
                            o = {};
                        try {
                            o = JSON.parse(decodeURIComponent(e));
                        } catch (e) {
                            o = null;
                        }
                        if (null === o)
                            document.dispatchEvent(this.cookieConsent.events.cc_freshUser),
                                (this.acceptedLevels["strictly-necessary"] = !0),
                                (this.acceptedLevels.functionality = !1),
                                (this.acceptedLevels.tracking = !1),
                                (this.acceptedLevels.targeting = !1);
                        else {
                            for (var t in this.cookieConsent.cookieLevels.cookieLevels) {
                                var n = this.cookieConsent.cookieLevels.cookieLevels[t].id;
                                !0 === o[n] ? (this.acceptedLevels[n] = !0) : (this.acceptedLevels[n] = !1), this.saveCookie();
                            }
                            this.cookieConsent.log(this.acceptedLevels, "info", "table");
                        }
                    }),
                    (e.prototype.enableAllCookies = function () {
                        for (var e in this.cookieConsent.cookieLevels.cookieLevels) {
                            var o = this.cookieConsent.cookieLevels.cookieLevels[e].id;
                            this.acceptLevel(o);
                        }
                    }),
                    (e.prototype.loadCookiesUntilMaxLevel = function () {
                        var e = !1;
                        for (var o in this.cookieConsent.cookieLevels.cookieLevels) {
                            if (e) break;
                            var t = this.cookieConsent.cookieLevels.cookieLevels[o].id;
                            t === this.loadCookiesUntilAndInclude && (e = !0), !1 !== this.acceptedLevels[t] && this.cookieConsent.javascriptItems.enableScriptsByLevel(t);
                        }
                    }),
                    (e.prototype.loadAcceptedCookies = function () {
                        for (var e in this.cookieConsent.cookieLevels.cookieLevels) {
                            var o = this.cookieConsent.cookieLevels.cookieLevels[e].id;
                            !1 !== this.acceptedLevels[o] && this.cookieConsent.javascriptItems.enableScriptsByLevel(o);
                        }
                    }),
                    (e.prototype.checkIsAccepted = function (e) {
                        var o = !1;
                        return e in this.acceptedLevels && !0 === this.acceptedLevels[e] && (o = !0), o;
                    }),
                    (e.prototype.acceptLevel = function (e) {
                        return this.cookieConsent.log("Accepted cookie level: " + e, "info"), (this.acceptedLevels[e] = !0), this.saveCookie();
                    }),
                    (e.prototype.rejectLevel = function (e) {
                        return this.cookieConsent.log("Rejected cookie level: " + e, "info"), (this.acceptedLevels[e] = !1), this.saveCookie();
                    }),
                    (e.prototype.saveCookie = function () {
                        var e = encodeURIComponent(JSON.stringify(this.acceptedLevels));
                        return a.setCookie(this.consentLevelCookieName, e), this.cookieConsent.log("Saved cookies containing the user consent level", "info"), !0;
                    }),
                    e
                );
            })(),
            P = function () {
                (this.cc_dialogShown = a.registerEvent("cc_dialogShown")),
                    (this.cc_dialogOkPressed = a.registerEvent("cc_dialogOkPressed")),
                    (this.cc_dialogPreferencesPressed = a.registerEvent("cc_dialogPreferencesPressed")),
                    (this.cc_dialogDeclinePressed = a.registerEvent("cc_dialogDeclinePressed")),
                    (this.cc_userLanguageChanged = a.registerEvent("cc_userLanguageChanged")),
                    (this.cc_preferencesSavePressed = a.registerEvent("cc_preferencesSavePressed")),
                    (this.cc_freshUser = a.registerEvent("cc_freshUser")),
                    (this.cc_userChangedConsent = a.registerEvent("cc_userChangedConsent"));
            },
            E = (function () {
                function e(e) {
                    (this.cookieConsent = e),
                        this.cc_dialogShown(),
                        this.cc_dialogOkPressed(),
                        this.cc_dialogPreferencesPressed(),
                        this.cc_dialogDeclinePressed(),
                        this.cc_userLanguageChanged(),
                        this.cc_preferencesSavePressed(),
                        this.cc_freshUser(),
                        this.cc_userChangedConsent();
                }
                return (
                    (e.prototype.cc_dialogShown = function () {
                        var e = this;
                        window.addEventListener("cc_dialogShown", function () {
                            e.cookieConsent.log("cc_dialogShown triggered", "event");
                        });
                    }),
                    (e.prototype.cc_dialogOkPressed = function () {
                        var e = this;
                        document.addEventListener("cc_dialogOkPressed", function () {
                            e.cookieConsent.log("cc_dialogOkPressed triggered", "event"),
                                e.cookieConsent.consentType instanceof W
                                    ? (e.cookieConsent.userConsent.enableAllCookies(), e.cookieConsent.userConsent.markUserAccepted(), e.cookieConsent.userConsent.loadAcceptedCookies())
                                    : e.cookieConsent.userConsent.markUserAccepted(),
                                e.cookieConsent.consentBanner.hideDialog();
                        });
                    }),
                    (e.prototype.cc_dialogPreferencesPressed = function () {
                        var e = this;
                        window.addEventListener("cc_dialogPreferencesPressed", function () {
                            e.cookieConsent.log("cc_dialogPreferencesPressed triggered", "event"), e.cookieConsent.consentPreferences.showPreferences();
                        });
                    }),
                    (e.prototype.cc_dialogDeclinePressed = function () {
                        var e = this;
                        document.addEventListener("cc_dialogDeclinePressed", function () {
                            e.cookieConsent.log("cc_dialogDeclinePressed triggered", "event"),
                                e.cookieConsent.userConsent.markUserAccepted(),
                                e.cookieConsent.userConsent.loadAcceptedCookies(),
                                e.cookieConsent.consentBanner.hideDialog();
                            window.dispatchEvent( new Event('cc_ok_pressed') );
                        });
                    }),
                    (e.prototype.cc_userLanguageChanged = function () {
                        var e = this;
                        window.addEventListener("cc_userLanguageChanged", function () {
                            e.cookieConsent.log("cc_userLanguageChanged triggered", "event");
                        });
                    }),
                    (e.prototype.cc_preferencesSavePressed = function () {
                        var e = this;
                        window.addEventListener("cc_preferencesSavePressed", function () {
                            e.cookieConsent.log("cc_preferencesSavePressed triggered", "event"),
                                e.cookieConsent.userConsent.markUserAccepted(),
                                e.cookieConsent.userConsent.loadAcceptedCookies(),
                                e.cookieConsent.consentPreferences.hidePreferences(),
                                e.cookieConsent.consentBanner.hideDialog();
                        });
                    }),
                    (e.prototype.cc_freshUser = function () {
                        var e = this;
                        window.addEventListener("cc_freshUser", function () {
                            e.cookieConsent.log("cc_freshUser triggered", "event");
                        });
                    }),
                    (e.prototype.cc_userChangedConsent = function () {
                        var e = this;
                        window.addEventListener("cc_userChangedConsent", function () {
                            e.cookieConsent.log("cc_userChangedConsent triggered", "event");
                        });
                    }),
                    e
                );
            })(),
            T = (function () {
                function e(e) {
                    (this.cookieConsent = e), this.initDefaultLevels(), this.initPreferenceItems();
                }
                return (
                    (e.prototype.languageChanged = function () {
                        this.initDefaultLevels(), this.initPreferenceItems();
                    }),
                    (e.prototype.initDefaultLevels = function () {
                        this.cookieLevels = [
                            { id: "strictly-necessary", title: this.cookieConsent.i18n.$t("level_strictly_necessary", "title"), content: this.cookieConsent.i18n.$t("level_strictly_necessary", "content") },
                            { id: "functionality", title: this.cookieConsent.i18n.$t("level_functionality", "title"), content: this.cookieConsent.i18n.$t("level_functionality", "content") },
                            { id: "tracking", title: this.cookieConsent.i18n.$t("level_tracking", "title"), content: this.cookieConsent.i18n.$t("level_tracking", "content") },
                            { id: "targeting", title: this.cookieConsent.i18n.$t("level_targeting", "title"), content: this.cookieConsent.i18n.$t("level_targeting", "content") },
                        ];
                    }),
                    (e.prototype.initPreferenceItems = function () {
                        this.preferenceItems = [
                            {
                                title: this.cookieConsent.i18n.$t("preference_center_menu_and_content", "your_privacy_title"),
                                content_container: "content_your_privacy",
                                content: this.cookieConsent.i18n.$t("preference_center_menu_and_content", "your_privacy_content"),
                            },
                        ];
                        for (var e = 0, o = this.cookieLevels; e < o.length; e++) {
                            var t = o[e];
                            this.preferenceItems.push({ id: t.id, title: t.title, content_container: "content_" + t.id, content: "\n<h1>" + t.title + "</h1>\n<p>" + t.content + "</p>\n" });
                        }
                        this.preferenceItems.push({
                            title: this.cookieConsent.i18n.$t("preference_center_menu_and_content", "more_information_title"),
                            content_container: "content_more_information",
                            content: this.cookieConsent.i18n.$t("preference_center_menu_and_content", "more_information_content"),
                        }),
                            null !== this.cookieConsent.cookiesPolicyUrl &&
                                a.isValidUrl(this.cookieConsent.cookiesPolicyUrl) &&
                                (this.preferenceItems[this.preferenceItems.length - 1].content =
                                    this.preferenceItems[this.preferenceItems.length - 1].content + this.cookieConsent.i18n.$t("dialog", "find_out_more", this.cookieConsent.cookiesPolicyUrl));
                    }),
                    e
                );
            })(),
            I = (function () {
                function e(e) {
                    (this.cpOverlay = null), (this.cookieConsent = e);
                }
                return (
                    (e.prototype.listenToUserButtonToOpenPreferences = function (e) {
                        var o = this,
                            t = document.querySelector(e);
                        t &&
                            t.addEventListener("click", function () {
                                document.dispatchEvent(o.cookieConsent.events.cc_dialogPreferencesPressed), o.showPreferences();
                            });
                    }),
                    (e.prototype.showPreferences = function () {
                        null === this.cpOverlay && ((this.cpOverlay = this.createPreferencesOverlayAndDialog()), a.appendChild("body", this.cpOverlay)),
                            this.cpOverlay.classList.add("visible"),
                            this.cookieConsent.log("Cookie preferences dialog was shown", "info");
                    }),
                    (e.prototype.hidePreferences = function () {
                        this.cpOverlay.classList.remove("visible"), this.cookieConsent.log("Cookie preferences dialog was hidden", "info");
                    }),
                    (e.prototype.refreshPreferences = function () {
                        if (null !== this.cpOverlay) return this.cpOverlay.parentNode.removeChild(this.cpOverlay), (this.cpOverlay = null), this.showPreferences();
                    }),
                    (e.prototype.createPreferencesOverlayAndDialog = function () {
                        var e = document.createElement("div");
                        e.classList.add("cookie-consent-preferences-overlay"), e.classList.add(this.cookieConsent.colorPalette.getClass()), e.classList.add("cc_css_reboot");
                        var o = document.createElement("div");
                        o.classList.add("cookie-consent-preferences-dialog");
                        var t = document.createElement("div");
                        t.classList.add("cc_cp_container");
                        var n = document.createElement("div");
                        n.classList.add("cc_cp_head");
                        var i = document.createElement("div");
                        if ((i.classList.add("cc_cp_head_title"), this.cookieConsent.ownerWebsiteName.length > 2)) {
                            var r = document.createElement("p");
                            (r.innerText = this.cookieConsent.ownerWebsiteName), a.appendChild(i, r);
                        }
                        var s = document.createElement("h2");
                        (s.innerHTML = this.cookieConsent.i18n.$t("preference_center", "title")), a.appendChild(i, s);
                        var c = document.createElement("div");
                        c.classList.add("cc_cp_head_lang_selector");
                        var l = this.obtainLanguageSelector();
                        a.appendChild(c, l), a.appendChild(n, i), a.appendChild(n, c);
                        var p = document.createElement("div");
                        p.classList.add("cc_cp_content");
                        var d = this.getMenuContainer(),
                            u = this.getContentContainer();
                        a.appendChild(p, d), a.appendChild(p, u);
                        var k = this.getFooterContainer();
                        return a.appendChild(t, n), a.appendChild(t, p), a.appendChild(t, k), a.appendChild(o, t), a.appendChild(e, o), e;
                    }),
                    (e.prototype.obtainLanguageSelector = function () {
                        var e = this,
                            o = document.createElement("select");
                        return (
                            [].forEach.call(e.cookieConsent.i18n.availableLanguages, function (t) {
                                var n = document.createElement("option");
                                (n.text = t.title), (n.value = t.value), e.cookieConsent.i18n.userLang === n.value && n.setAttribute("selected", "selected"), o.add(n);
                            }),
                            o.addEventListener("change", function () {
                                (e.cookieConsent.i18n.userLang = o.value), e.cookieConsent.cookieLevels.languageChanged(), e.refreshPreferences(), document.dispatchEvent(e.cookieConsent.events.cc_userLanguageChanged);
                            }),
                            o
                        );
                    }),
                    (e.prototype.getContentContainer = function () {
                        var e = this,
                            o = document.createElement("div");
                        o.classList.add("cc_cp_m_content");
                        var t = 0;
                        return (
                            e.cookieConsent.cookieLevels.preferenceItems.forEach(function (n) {
                                var i = document.createElement("div");
                                if (
                                    (i.classList.add("cc_cp_m_content_entry"),
                                    i.setAttribute("content_layout", n.content_container),
                                    i.setAttribute("active", "false"),
                                    (i.innerHTML = n.content),
                                    0 === t && i.setAttribute("active", "true"),
                                    t++,
                                    n.id)
                                ) {
                                    var r = e._getLevelCheckbox(n);
                                    a.appendChild(i, r);
                                }
                                a.appendChild(o, i);
                            }),
                            o
                        );
                    }),
                    (e.prototype.getMenuContainer = function () {
                        var e = this,
                            o = document.createElement("ul");
                        o.classList.add("cc_cp_m_menu");
                        var t = 0;
                        return (
                            e.cookieConsent.cookieLevels.preferenceItems.forEach(function (n) {
                                var i = document.createElement("li"),
                                    r = document.createElement("a");
                                r.setAttribute("href", "#"),
                                    r.setAttribute("t", n.content_container),
                                    (r.innerHTML = n.title),
                                    0 === t && i.setAttribute("active", "true"),
                                    t++,
                                    r.setAttribute("tabindex", "1"),
                                    r.addEventListener("click", function (o) {
                                        o.preventDefault(), e.cookieConsent.log("Preferences menu item clicked: " + n.title, "info");
                                        var t = document.querySelectorAll('li[active="true"]');
                                        [].forEach.call(t, function (e) {
                                            e.setAttribute("active", "false");
                                        }),
                                            i.setAttribute("active", "true");
                                        try {
                                            var a = document.querySelectorAll("div[content_layout]");
                                            [].forEach.call(a, function (e) {
                                                e.setAttribute("active", "false");
                                            }),
                                                document.querySelector('div[content_layout="' + n.content_container + '"]').setAttribute("active", "true");
                                        } catch (o) {}
                                    }),
                                    a.appendChild(i, r),
                                    a.appendChild(o, i);
                            }),
                            o
                        );
                    }),
                    (e.prototype.getFooterContainer = function () {
                        var e = this,
                            o = document.createElement("div");
                        o.classList.add("cc_cp_footer");
                        var t = document.createElement("div");
                        t.classList.add("cc_cp_f_powered_by"), (t.innerHTML = a.magicTransform("Q29va2llIENvbnNlbnQgYnkgPGEgaHJlZj0iaHR0cHM6Ly93d3cuY29va2llY29uc2VudC5jb20iIHRhcmdldD0iX2JsYW5rIj5Db29raWUgQ29uc2VudDwvYT4="));
                        var n = document.createElement("div");
                        n.classList.add("cc_cp_f_save");
                        var i = document.createElement("button");
                        return (
                            (i.innerHTML = e.cookieConsent.i18n.$t("preference_center", "save")),
                            i.addEventListener("click", function () {
                                document.dispatchEvent(e.cookieConsent.events.cc_preferencesSavePressed);
                            }),
                            a.appendChild(n, i),
                            a.appendChild(o, t),
                            a.appendChild(o, n),
                            o
                        );
                    }),
                    (e.prototype._getLevelCheckbox = function (e) {
                        var o = this,
                            t = document.createElement("div");
                        if ("strictly-necessary" !== e.id) {
                            var n = o.cookieConsent.userConsent.acceptedLevels,
                                i = document.createElement("input");
                            i.setAttribute("cookie_consent_toggler", "true"),
                                i.setAttribute("type", "checkbox"),
                                i.setAttribute("class", "checkbox_cookie_consent"),
                                i.setAttribute("id", e.id),
                                i.setAttribute("name", e.id),
                                (r = document.createElement("label")).setAttribute("for", e.id),
                                n[e.id]
                                    ? (i.setAttribute("checked", "checked"), r.setAttribute("class", "is-active"), (r.innerHTML = o.cookieConsent.i18n.$t("dialog", "active")))
                                    : (r.setAttribute("class", "is-inactive"), (r.innerHTML = o.cookieConsent.i18n.$t("dialog", "inactive"))),
                                i.addEventListener("change", function () {
                                    var t = i.checked,
                                        n = e.id,
                                        a = document.querySelector('label[for="' + n + '"]');
                                    o.cookieConsent.log("User changed toggle for cookie level [" + n + "], new status: " + t, "info"),
                                        document.dispatchEvent(o.cookieConsent.events.cc_userChangedConsent),
                                        !0 === t
                                            ? (o.cookieConsent.userConsent.acceptLevel(n), (a.innerHTML = o.cookieConsent.i18n.$t("dialog", "active")))
                                            : (o.cookieConsent.userConsent.rejectLevel(n), (a.innerHTML = o.cookieConsent.i18n.$t("dialog", "inactive")));
                                }),
                                a.appendChild(t, i),
                                a.appendChild(t, r);
                        } else {
                            var r,
                                s = document.createElement("input");
                            s.setAttribute("cookie_consent_toggler", "true"),
                                s.setAttribute("type", "checkbox"),
                                s.setAttribute("checked", "checked"),
                                s.setAttribute("disabled", "disabled"),
                                s.setAttribute("class", "checkbox_cookie_consent"),
                                s.setAttribute("id", e.id),
                                s.setAttribute("name", e.id),
                                (r = document.createElement("label")).setAttribute("for", e.id),
                                (r.innerHTML = o.cookieConsent.i18n.$t("dialog", "always_active")),
                                a.appendChild(t, s),
                                a.appendChild(t, r);
                        }
                        return t;
                    }),
                    e
                );
            })(),
            O = (function () {
                function e(e) {
                    (this.dialog = null), (this.dialogOverlay = null), (this.dialogExtraCss = []), (this.cookieConsent = e), this.dialogExtraCss.push(e.colorPalette.getClass());
                }
                return (
                    (e.prototype.initDialog = function () {
                        return (
                            null === this.dialog && (this.dialog = this.createDialog()),
                            a.appendChild("body", this.dialog, "afterbegin"),
                            this.cookieConsent.log("Consent dialog shown", "info"),
                            document.dispatchEvent(this.cookieConsent.events.cc_dialogShown),
                            !0
                        );
                    }),
                    (e.prototype.hideDialog = function () {
                        try {
                            this.dialog.classList.add("hidden"), this.cookieConsent.log("Consent dialog hidden", "info");
                        } catch (e) {}
                    }),
                    (e.prototype.createDialog = function () {
                        var e = document.createElement("div");
                        if ((e.classList.add("cc_css_reboot"), e.classList.add("cc_dialog"), this.dialogExtraCss.length))
                            for (var o = 0, t = this.dialogExtraCss; o < t.length; o++) {
                                var n = t[o];
                                e.classList.add(n);
                            }
                        if ((a.appendChild(e, this.createDialogContent()), "interstitial" === this.cookieConsent.userNoticeType)) {
                            var i = document.createElement("div");
                            return i.classList.add("cc_overlay_lock"), a.appendChild(i, e), i;
                        }
                        return e;
                    }),
                    (e.prototype.createDialogContent = function () {
                        var e = this,
                            o = document.createElement("div");
                            o.classList.add("wrap-nav");
                            t = document.createElement("h1");
                        t.classList.add("cc_dialog_headline"), (t.innerText = e.cookieConsent.i18n.$t("dialog", "title"));
                        var n = document.createElement("div");
                            n.classList.add("msg-wrap");
                            i = document.createElement("p");
                        i.classList.add("cc_dialog_text"), (i.innerHTML = e.cookieConsent.i18n.$t("dialog", "text")), a.appendChild(n, i);
                        var r = document.createElement("button");
                        r.classList.add("cc_b_ok"),
                            "express" == e.cookieConsent.userConsentType ? (r.innerHTML = e.cookieConsent.i18n.$t("dialog", "i_agree_text")) : (r.innerHTML = e.cookieConsent.i18n.$t("dialog", "ok_text")),
                            r.addEventListener("click", function () {
                                document.dispatchEvent(e.cookieConsent.events.cc_dialogOkPressed);
                            });
                        var s = document.createElement("button");
                        s.classList.add("cc_b_cp"),
                            (s.innerHTML = e.cookieConsent.i18n.$t("dialog", "change_settings")),
                            s.addEventListener("click", function () {
                                document.dispatchEvent(e.cookieConsent.events.cc_dialogPreferencesPressed);
                            });
                        var decline = document.createElement("button");
                        decline.classList.add("cc_b_dec"),
                            (decline.innerHTML = e.cookieConsent.i18n.$t("dialog", "decline")),
                            decline.addEventListener("click", function () {
                                document.dispatchEvent(e.cookieConsent.events.cc_dialogDeclinePressed);
                            });
                        var c = document.createElement("div");
                        c.classList.add("btn-wrap");
                        return a.appendChild(c, decline),a.appendChild(c, s),a.appendChild(c, r), a.appendChild(o, t), a.appendChild(o, n), a.appendChild(o, c), o;
                    }),
                    e
                );
            })(),
            q = (function (e) {
                function o(o) {
                    var t = e.call(this, o) || this;
                    return t.dialogExtraCss.push("simple"), t;
                }
                return L(o, e), o;
            })(O),
            U = (function (e) {
                function o(o) {
                    var t = e.call(this, o) || this;
                    return t.dialogExtraCss.push("headline"), t;
                }
                return L(o, e), o;
            })(O),
            N = (function (e) {
                function o(o) {
                    var t = e.call(this, o) || this;
                    return t.dialogExtraCss.push("interstitial"), t;
                }
                return L(o, e), o;
            })(O),
            D = (function (e) {
                function o(o) {
                    var t = e.call(this, o) || this;
                    return t.dialogExtraCss.push("standalone"), t;
                }
                return L(o, e), o;
            })(O),
            M = (function () {
                function e(e) {
                    e.log("ConsentType main class initialized", "info");
                }
                return (e.prototype.loadInitialCookies = function () {}), e;
            })(),
            W = (function (e) {
                function o(o) {
                    var t = e.call(this, o) || this;
                    return (t.cookieConsent = o), t;
                }
                return (
                    L(o, e),
                    (o.prototype.loadInitialCookies = function () {
                        var e = this.cookieConsent.cookieLevels.cookieLevels[0].id;
                        (this.cookieConsent.userConsent.loadCookiesUntilAndInclude = e.toString()), this.cookieConsent.userConsent.loadCookiesUntilMaxLevel();
                    }),
                    o
                );
            })(M),
            B = (function (e) {
                function o(o) {
                    var t = e.call(this, o) || this;
                    return (t.cookieConsent = o), t;
                }
                return (
                    L(o, e),
                    (o.prototype.loadInitialCookies = function () {
                        var e = this.cookieConsent.cookieLevels.cookieLevels.length,
                            o = this.cookieConsent.cookieLevels.cookieLevels[e - 1].id;
                        (this.cookieConsent.userConsent.loadCookiesUntilAndInclude = o.toString()), this.cookieConsent.userConsent.loadCookiesUntilMaxLevel();
                    }),
                    o
                );
            })(M),
            V = (function () {
                function e(e) {
                    this.cookieConsent = e;
                }
                return (
                    (e.prototype.getClass = function () {
                        return "light";
                    }),
                    e
                );
            })(),
            R = (function (e) {
                function o(o) {
                    var t = e.call(this, o) || this;
                    return (t.cookieConsent = o), t;
                }
                return (
                    L(o, e),
                    (o.prototype.getClass = function () {
                        return "dark";
                    }),
                    o
                );
            })(V),
            F = (function (e) {
                function o(o) {
                    var t = e.call(this, o) || this;
                    return (t.cookieConsent = o), t;
                }
                return (
                    L(o, e),
                    (o.prototype.getClass = function () {
                        return "light";
                    }),
                    o
                );
            })(V),
            J = (function () {
                function e(e) {
                    switch (
                        ((this.debug = !1),
                        (this.ownerWebsiteName = e.website_name || ""),
                        (this.cookiesPolicyUrl = e.cookies_policy_url || null),
                        (this.userConsentType = e.consent_type || "express"),
                        (this.userNoticeType = e.notice_banner_type || "headline"),
                        (this.userColorPalette = e.palette || "light"),
                        (this.ownerSiteLanguage = e.language || "en"),
                        (this.userLanguageStrings = e.language_overwrite || {}),
                        (this.changePreferencesSelector = e.change_preferences_selector || null),
                        (this.isDemo = "true" == e.demo),
                        (this.debug = "true" == e.debug),
                        this.userConsentType)
                    ) {
                        default:
                        case "express":
                            this.consentType = new W(this);
                            break;
                        case "implied":
                            this.consentType = new B(this);
                    }
                    switch (this.userColorPalette) {
                        default:
                        case "dark":
                            this.colorPalette = new R(this);
                            break;
                        case "light":
                            this.colorPalette = new F(this);
                    }
                    switch (this.userNoticeType) {
                        default:
                        case "simple":
                            this.consentBanner = new q(this);
                            break;
                        case "headline":
                            this.consentBanner = new U(this);
                            break;
                        case "interstitial":
                            this.consentBanner = new N(this);
                            break;
                        case "standalone":
                            this.consentBanner = new D(this);
                    }
                    (this.events = new P()),
                        (this.eventsListeners = new E(this)),
                        (this.i18n = new x(this)),
                        (this.cookieLevels = new T(this)),
                        (this.userConsent = new A(this)),
                        (this.javascriptItems = new S(this)),
                        (this.consentPreferences = new I(this)),
                        null !== this.changePreferencesSelector && this.consentPreferences.listenToUserButtonToOpenPreferences(this.changePreferencesSelector),
                        !0 === this.userConsent.userAccepted ? (this.userConsent.loadAcceptedCookies(), !0 === this.isDemo && this.consentBanner.initDialog()) : (this.consentBanner.initDialog(), this.consentType.loadInitialCookies());
                }
                return (
                    (e.prototype.log = function (e, o, t) {
                        void 0 === t && (t = "log"), !0 === this.debug && ("log" === t || "table" === t) && console.log("[" + o + "]", e);
                    }),
                    e
                );
            })(),
            $ = function (e) {
                return (i = new J(e));
            };
    },
]);


 
document.addEventListener('DOMContentLoaded', function () {

	cookieconsent.run({"notice_banner_type":"simple","consent_type":"express","palette":"light","language":"en"});

    function deleteCookies() {
        var theCookies = document.cookie.split(';');
        document.cookie = 'cookie_consent_user_accepted=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        for (var i = 1 ; i <= theCookies.length; i++) {
            if ( theCookies[i] != null ){
                var name = theCookies[i].split('=')[0];
                document.cookie = name + '=; Path=/; Domain=.petergailiscepumi.lv; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                document.cookie = '_ga=; Path=/; Domain=.petergailiscepumi.lv; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                document.cookie = name + '=; Path=/; Domain='+document.domain+'; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            }
        }
        var cookies = document.cookie.split(";");
        for(var i=0; i < cookies.length; i++) {
            var equals = cookies[i].indexOf("=");
            var name1 = equals > -1 ? cookies[i].substr(0, equals) : cookies[i];
            document.cookie = name1 + '=; Path=/;Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            document.cookie = name1 + '=; Path=/; Domain=.petergailiscepumi.lv; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            document.cookie = '_ga=; Path=/; Domain=.petergailiscepumi.lv; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            document.cookie = name1 + '=; Path=/; Domain='+document.domain+'; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
    }
$(".open-notice").on("click", function(e){
    e.preventDefault();
        deleteCookies();
        var cookie_window = $('.cc_dialog');
        if( cookie_window.length > 0 ) { // If dialog has been closed before.
            cookie_window.remove();
            cookieconsent.run({"notice_banner_type":"simple","consent_type":"express","palette":"light","language":"en"});
            $( ".cc_b_cp" ).trigger( "click" );
            $('.cookie-consent-preferences-overlay')[0].remove();
        } else { // If dialog has not been active - active notice.
            cookieconsent.run({"notice_banner_type":"simple","consent_type":"express","palette":"light","language":"en"});
            cookie_window.remove();
            $( ".cc_b_cp" ).trigger( "click" );
            $('.cookie-consent-preferences-overlay')[0].remove();
        }
    });
});