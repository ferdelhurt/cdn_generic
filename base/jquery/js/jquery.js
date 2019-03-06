!function(F, M) {
    function c(e) {
        return E.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
    }
    function g(e) {
        if (!ut[e]) {
            var t = _.body, n = E("<" + e + ">").appendTo(t), r = n.css("display");
            n.remove(), "none" !== r && "" !== r || (ot || ((ot = _.createElement("iframe")).frameBorder = ot.width = ot.height = 0), 
            t.appendChild(ot), at && ot.createElement || ((at = (ot.contentWindow || ot.contentDocument).document).write((E.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), 
            at.close()), n = at.createElement(e), at.body.appendChild(n), r = E.css(n, "display"), 
            t.removeChild(ot)), ut[e] = r;
        }
        return ut[e];
    }
    function s(e, t) {
        var n = {};
        return E.each(dt.concat.apply([], dt.slice(0, t)), function() {
            n[this] = e;
        }), n;
    }
    function e() {
        lt = M;
    }
    function l() {
        return setTimeout(e, 0), lt = E.now();
    }
    function t() {
        try {
            return new F.XMLHttpRequest();
        } catch (e) {}
    }
    function o(n, e, r, i) {
        if (E.isArray(e)) E.each(e, function(e, t) {
            r || Oe.test(n) ? i(n, t) : o(n + "[" + ("object" == typeof t ? e : "") + "]", t, r, i);
        }); else if (r || "object" !== E.type(e)) i(n, e); else for (var t in e) o(n + "[" + t + "]", e[t], r, i);
    }
    function n(e, t) {
        var n, r, i = E.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== M && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        r && E.extend(!0, e, r);
    }
    function C(e, t, n, r, i, o) {
        (o = o || {})[i = i || t.dataTypes[0]] = !0;
        for (var a, s = e[i], l = 0, u = s ? s.length : 0, c = e === Je; l < u && (c || !a); l++) "string" == typeof (a = s[l](t, n, r)) && (!c || o[a] ? a = M : (t.dataTypes.unshift(a), 
        a = C(e, t, n, r, a, o)));
        return (c || !a) && !o["*"] && (a = C(e, t, n, r, "*", o)), a;
    }
    function r(s) {
        return function(e, t) {
            if ("string" != typeof e && (t = e, e = "*"), E.isFunction(t)) for (var n, r, i = e.toLowerCase().split(Ve), o = 0, a = i.length; o < a; o++) n = i[o], 
            (r = /^\+/.test(n)) && (n = n.substr(1) || "*"), (s[n] = s[n] || [])[r ? "unshift" : "push"](t);
        };
    }
    function i(e, t, n) {
        var r = "width" === t ? e.offsetWidth : e.offsetHeight, i = "width" === t ? 1 : 0;
        if (0 < r) {
            if ("border" !== n) for (;i < 4; i += 2) n || (r -= parseFloat(E.css(e, "padding" + Fe[i])) || 0), 
            "margin" === n ? r += parseFloat(E.css(e, n + Fe[i])) || 0 : r -= parseFloat(E.css(e, "border" + Fe[i] + "Width")) || 0;
            return r + "px";
        }
        if (((r = Te(e, t)) < 0 || null == r) && (r = e.style[t]), Ae.test(r)) return r;
        if (r = parseFloat(r) || 0, n) for (;i < 4; i += 2) r += parseFloat(E.css(e, "padding" + Fe[i])) || 0, 
        "padding" !== n && (r += parseFloat(E.css(e, "border" + Fe[i] + "Width")) || 0), 
        "margin" === n && (r += parseFloat(E.css(e, n + Fe[i])) || 0);
        return r + "px";
    }
    function x(e) {
        var t = (e.nodeName || "").toLowerCase();
        "input" === t ? a(e) : "script" !== t && void 0 !== e.getElementsByTagName && E.grep(e.getElementsByTagName("input"), a);
    }
    function a(e) {
        "checkbox" !== e.type && "radio" !== e.type || (e.defaultChecked = e.checked);
    }
    function u(e) {
        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName("*") : void 0 !== e.querySelectorAll ? e.querySelectorAll("*") : [];
    }
    function f(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), 
        "object" === (n = t.nodeName.toLowerCase()) ? t.outerHTML = e.outerHTML : "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked), 
        t.value !== e.value && (t.value = e.value)), t.removeAttribute(E.expando), t.removeAttribute("_submit_attached"), 
        t.removeAttribute("_change_attached"));
    }
    function d(e, t) {
        if (1 === t.nodeType && E.hasData(e)) {
            var n, r, i, o = E._data(e), a = E._data(t, o), s = o.events;
            if (s) for (n in delete a.handle, a.events = {}, s) for (r = 0, i = s[n].length; r < i; r++) E.event.add(t, n, s[n][r]);
            a.data && (a.data = E.extend({}, a.data));
        }
    }
    function T(e) {
        var t = ae.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (;t.length; ) n.createElement(t.pop());
        return n;
    }
    function p(e, n, r) {
        if (n = n || 0, E.isFunction(n)) return E.grep(e, function(e, t) {
            return !!n.call(e, t, e) === r;
        });
        if (n.nodeType) return E.grep(e, function(e, t) {
            return e === n === r;
        });
        if ("string" == typeof n) {
            var t = E.grep(e, function(e) {
                return 1 === e.nodeType;
            });
            if (ne.test(n)) return E.filter(n, t, !r);
            n = E.filter(n, t);
        }
        return E.grep(e, function(e, t) {
            return 0 <= E.inArray(e, n) === r;
        });
    }
    function h(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType;
    }
    function m() {
        return !0;
    }
    function y() {
        return !1;
    }
    function v(e, t, n) {
        var r = t + "defer", i = t + "queue", o = t + "mark", a = E._data(e, r);
        a && ("queue" === n || !E._data(e, i)) && ("mark" === n || !E._data(e, o)) && setTimeout(function() {
            !E._data(e, i) && !E._data(e, o) && (E.removeData(e, r, !0), a.fire());
        }, 0);
    }
    function b(e) {
        for (var t in e) if (("data" !== t || !E.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    function w(e, t, n) {
        if (n === M && 1 === e.nodeType) {
            var r = "data-" + t.replace(L, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : E.isNumeric(n) ? +n : A.test(n) ? E.parseJSON(n) : n);
                } catch (e) {}
                E.data(e, t, n);
            } else n = M;
        }
        return n;
    }
    var _ = F.document, H = F.navigator, N = F.location, E = function() {
        function t() {
            if (!f.isReady) {
                try {
                    _.documentElement.doScroll("left");
                } catch (e) {
                    return void setTimeout(t, 1);
                }
                f.ready();
            }
        }
        var n, e, r, i, f = function(e, t) {
            return new f.fn.init(e, t, n);
        }, o = F.jQuery, a = F.$, s = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, l = /\S/, u = /^\s+/, c = /\s+$/, d = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, p = /^[\],:{}\s]*$/, h = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, m = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, g = /(?:^|:|,)(?:\s*\[)+/g, y = /(webkit)[ \/]([\w.]+)/, v = /(opera)(?:.*version)?[ \/]([\w.]+)/, b = /(msie) ([\w.]+)/, x = /(mozilla)(?:.*? rv:([\w.]+))?/, T = /-([a-z]|[0-9])/gi, w = /^-ms-/, N = function(e, t) {
            return (t + "").toUpperCase();
        }, C = H.userAgent, E = Object.prototype.toString, k = Object.prototype.hasOwnProperty, S = Array.prototype.push, A = Array.prototype.slice, L = String.prototype.trim, D = Array.prototype.indexOf, j = {};
        return f.fn = f.prototype = {
            constructor: f,
            init: function(e, t, n) {
                var r, i, o, a;
                if (!e) return this;
                if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                if ("body" === e && !t && _.body) return this.context = _, this[0] = _.body, this.selector = e, 
                this.length = 1, this;
                if ("string" == typeof e) {
                    if ((r = "<" !== e.charAt(0) || ">" !== e.charAt(e.length - 1) || e.length < 3 ? s.exec(e) : [ null, e, null ]) && (r[1] || !t)) {
                        if (r[1]) return a = (t = t instanceof f ? t[0] : t) ? t.ownerDocument || t : _, 
                        (o = d.exec(e)) ? f.isPlainObject(t) ? (e = [ _.createElement(o[1]) ], f.fn.attr.call(e, t, !0)) : e = [ a.createElement(o[1]) ] : e = ((o = f.buildFragment([ r[1] ], [ a ])).cacheable ? f.clone(o.fragment) : o.fragment).childNodes, 
                        f.merge(this, e);
                        if ((i = _.getElementById(r[2])) && i.parentNode) {
                            if (i.id !== r[2]) return n.find(e);
                            this.length = 1, this[0] = i;
                        }
                        return this.context = _, this.selector = e, this;
                    }
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                }
                return f.isFunction(e) ? n.ready(e) : (e.selector !== M && (this.selector = e.selector, 
                this.context = e.context), f.makeArray(e, this));
            },
            selector: "",
            jquery: "1.7.2",
            length: 0,
            size: function() {
                return this.length;
            },
            toArray: function() {
                return A.call(this, 0);
            },
            get: function(e) {
                return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
            },
            pushStack: function(e, t, n) {
                var r = this.constructor();
                return f.isArray(e) ? S.apply(r, e) : f.merge(r, e), r.prevObject = this, r.context = this.context, 
                "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), 
                r;
            },
            each: function(e, t) {
                return f.each(this, e, t);
            },
            ready: function(e) {
                return f.bindReady(), r.add(e), this;
            },
            eq: function(e) {
                return -1 === (e = +e) ? this.slice(e) : this.slice(e, e + 1);
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            slice: function() {
                return this.pushStack(A.apply(this, arguments), "slice", A.call(arguments).join(","));
            },
            map: function(n) {
                return this.pushStack(f.map(this, function(e, t) {
                    return n.call(e, t, e);
                }));
            },
            end: function() {
                return this.prevObject || this.constructor(null);
            },
            push: S,
            sort: [].sort,
            splice: [].splice
        }, f.fn.init.prototype = f.fn, f.extend = f.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, s = 2), "object" != typeof a && !f.isFunction(a) && (a = {}), 
            l === s && (a = this, --s); s < l; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], 
            a !== (r = e[t]) && (u && r && (f.isPlainObject(r) || (i = f.isArray(r))) ? (i ? (i = !1, 
            o = n && f.isArray(n) ? n : []) : o = n && f.isPlainObject(n) ? n : {}, a[t] = f.extend(u, o, r)) : r !== M && (a[t] = r));
            return a;
        }, f.extend({
            noConflict: function(e) {
                return F.$ === f && (F.$ = a), e && F.jQuery === f && (F.jQuery = o), f;
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? f.readyWait++ : f.ready(!0);
            },
            ready: function(e) {
                if (!0 === e && !--f.readyWait || !0 !== e && !f.isReady) {
                    if (!_.body) return setTimeout(f.ready, 1);
                    if ((f.isReady = !0) !== e && 0 < --f.readyWait) return;
                    r.fireWith(_, [ f ]), f.fn.trigger && f(_).trigger("ready").off("ready");
                }
            },
            bindReady: function() {
                if (!r) {
                    if (r = f.Callbacks("once memory"), "complete" === _.readyState) return setTimeout(f.ready, 1);
                    if (_.addEventListener) _.addEventListener("DOMContentLoaded", i, !1), F.addEventListener("load", f.ready, !1); else if (_.attachEvent) {
                        _.attachEvent("onreadystatechange", i), F.attachEvent("onload", f.ready);
                        var e = !1;
                        try {
                            e = null == F.frameElement;
                        } catch (e) {}
                        _.documentElement.doScroll && e && t();
                    }
                }
            },
            isFunction: function(e) {
                return "function" === f.type(e);
            },
            isArray: Array.isArray || function(e) {
                return "array" === f.type(e);
            },
            isWindow: function(e) {
                return null != e && e == e.window;
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
            },
            type: function(e) {
                return null == e ? String(e) : j[E.call(e)] || "object";
            },
            isPlainObject: function(e) {
                if (!e || "object" !== f.type(e) || e.nodeType || f.isWindow(e)) return !1;
                try {
                    if (e.constructor && !k.call(e, "constructor") && !k.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                } catch (e) {
                    return !1;
                }
                var t;
                for (t in e) ;
                return t === M || k.call(e, t);
            },
            isEmptyObject: function(e) {
                for (var t in e) return !1;
                return !0;
            },
            error: function(e) {
                throw new Error(e);
            },
            parseJSON: function(e) {
                return "string" == typeof e && e ? (e = f.trim(e), F.JSON && F.JSON.parse ? F.JSON.parse(e) : p.test(e.replace(h, "@").replace(m, "]").replace(g, "")) ? new Function("return " + e)() : void f.error("Invalid JSON: " + e)) : null;
            },
            parseXML: function(e) {
                if ("string" != typeof e || !e) return null;
                var t;
                try {
                    F.DOMParser ? t = new DOMParser().parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", 
                    t.loadXML(e));
                } catch (e) {
                    t = M;
                }
                return (!t || !t.documentElement || t.getElementsByTagName("parsererror").length) && f.error("Invalid XML: " + e), 
                t;
            },
            noop: function() {},
            globalEval: function(e) {
                e && l.test(e) && (F.execScript || function(e) {
                    F.eval.call(F, e);
                })(e);
            },
            camelCase: function(e) {
                return e.replace(w, "ms-").replace(T, N);
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase();
            },
            each: function(e, t, n) {
                var r, i = 0, o = e.length, a = o === M || f.isFunction(e);
                if (n) if (a) {
                    for (r in e) if (!1 === t.apply(e[r], n)) break;
                } else for (;i < o && !1 !== t.apply(e[i++], n); ) ; else if (a) {
                    for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                } else for (;i < o && !1 !== t.call(e[i], i, e[i++]); ) ;
                return e;
            },
            trim: L ? function(e) {
                return null == e ? "" : L.call(e);
            } : function(e) {
                return null == e ? "" : (e + "").replace(u, "").replace(c, "");
            },
            makeArray: function(e, t) {
                var n = t || [];
                if (null != e) {
                    var r = f.type(e);
                    null == e.length || "string" === r || "function" === r || "regexp" === r || f.isWindow(e) ? S.call(n, e) : f.merge(n, e);
                }
                return n;
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (D) return D.call(t, e, n);
                    for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++) if (n in t && t[n] === e) return n;
                }
                return -1;
            },
            merge: function(e, t) {
                var n = e.length, r = 0;
                if ("number" == typeof t.length) for (var i = t.length; r < i; r++) e[n++] = t[r]; else for (;t[r] !== M; ) e[n++] = t[r++];
                return e.length = n, e;
            },
            grep: function(e, t, n) {
                var r = [];
                n = !!n;
                for (var i = 0, o = e.length; i < o; i++) n !== !!t(e[i], i) && r.push(e[i]);
                return r;
            },
            map: function(e, t, n) {
                var r, i, o = [], a = 0, s = e.length;
                if (e instanceof f || s !== M && "number" == typeof s && (0 < s && e[0] && e[s - 1] || 0 === s || f.isArray(e))) for (;a < s; a++) null != (r = t(e[a], a, n)) && (o[o.length] = r); else for (i in e) null != (r = t(e[i], i, n)) && (o[o.length] = r);
                return o.concat.apply([], o);
            },
            guid: 1,
            proxy: function(e, t) {
                if ("string" == typeof t) {
                    var n = e[t];
                    t = e, e = n;
                }
                if (!f.isFunction(e)) return M;
                var r = A.call(arguments, 2), i = function() {
                    return e.apply(t, r.concat(A.call(arguments)));
                };
                return i.guid = e.guid = e.guid || i.guid || f.guid++, i;
            },
            access: function(e, t, n, r, i, o, a) {
                var s, l = null == n, u = 0, c = e.length;
                if (n && "object" == typeof n) {
                    for (u in n) f.access(e, t, u, n[u], 1, o, r);
                    i = 1;
                } else if (r !== M) {
                    if (s = a === M && f.isFunction(r), l && (s ? (s = t, t = function(e, t, n) {
                        return s.call(f(e), n);
                    }) : (t.call(e, r), t = null)), t) for (;u < c; u++) t(e[u], n, s ? r.call(e[u], u, t(e[u], n)) : r, a);
                    i = 1;
                }
                return i ? e : l ? t.call(e) : c ? t(e[0], n) : o;
            },
            now: function() {
                return new Date().getTime();
            },
            uaMatch: function(e) {
                e = e.toLowerCase();
                var t = y.exec(e) || v.exec(e) || b.exec(e) || e.indexOf("compatible") < 0 && x.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                };
            },
            sub: function() {
                function n(e, t) {
                    return new n.fn.init(e, t);
                }
                f.extend(!0, n, this), n.superclass = this, ((n.fn = n.prototype = this()).constructor = n).sub = this.sub, 
                n.fn.init = function(e, t) {
                    return t && t instanceof f && !(t instanceof n) && (t = n(t)), f.fn.init.call(this, e, t, r);
                }, n.fn.init.prototype = n.fn;
                var r = n(_);
                return n;
            },
            browser: {}
        }), f.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
            j["[object " + t + "]"] = t.toLowerCase();
        }), (e = f.uaMatch(C)).browser && (f.browser[e.browser] = !0, f.browser.version = e.version), 
        f.browser.webkit && (f.browser.safari = !0), l.test(" ") && (u = /^[\s\xA0]+/, c = /[\s\xA0]+$/), 
        n = f(_), _.addEventListener ? i = function() {
            _.removeEventListener("DOMContentLoaded", i, !1), f.ready();
        } : _.attachEvent && (i = function() {
            "complete" === _.readyState && (_.detachEvent("onreadystatechange", i), f.ready());
        }), f;
    }(), k = {};
    E.Callbacks = function(o) {
        o = o ? k[o] || function(e) {
            var t, n, r = k[e] = {};
            for (t = 0, n = (e = e.split(/\s+/)).length; t < n; t++) r[e[t]] = !0;
            return r;
        }(o) : {};
        var n, r, i, a, s, l, u = [], c = [], f = function(e) {
            var t, n, r, i;
            for (t = 0, n = e.length; t < n; t++) r = e[t], "array" === (i = E.type(r)) ? f(r) : "function" === i && (!o.unique || !p.has(r)) && u.push(r);
        }, d = function(e, t) {
            for (t = t || [], n = !o.memory || [ e, t ], i = r = !0, l = a || 0, a = 0, s = u.length; u && l < s; l++) if (!1 === u[l].apply(e, t) && o.stopOnFalse) {
                n = !0;
                break;
            }
            i = !1, u && (o.once ? !0 === n ? p.disable() : u = [] : c && c.length && (n = c.shift(), 
            p.fireWith(n[0], n[1])));
        }, p = {
            add: function() {
                if (u) {
                    var e = u.length;
                    f(arguments), i ? s = u.length : n && !0 !== n && (a = e, d(n[0], n[1]));
                }
                return this;
            },
            remove: function() {
                if (u) for (var e = arguments, t = 0, n = e.length; t < n; t++) for (var r = 0; r < u.length && (e[t] !== u[r] || (i && r <= s && (s--, 
                r <= l && l--), u.splice(r--, 1), !o.unique)); r++) ;
                return this;
            },
            has: function(e) {
                if (u) for (var t = 0, n = u.length; t < n; t++) if (e === u[t]) return !0;
                return !1;
            },
            empty: function() {
                return u = [], this;
            },
            disable: function() {
                return u = c = n = M, this;
            },
            disabled: function() {
                return !u;
            },
            lock: function() {
                return c = M, (!n || !0 === n) && p.disable(), this;
            },
            locked: function() {
                return !c;
            },
            fireWith: function(e, t) {
                return c && (i ? o.once || c.push([ e, t ]) : (!o.once || !n) && d(e, t)), this;
            },
            fire: function() {
                return p.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!r;
            }
        };
        return p;
    };
    var S = [].slice;
    E.extend({
        Deferred: function(e) {
            var t, n = E.Callbacks("once memory"), r = E.Callbacks("once memory"), i = E.Callbacks("memory"), o = "pending", a = {
                resolve: n,
                reject: r,
                notify: i
            }, s = {
                done: n.add,
                fail: r.add,
                progress: i.add,
                state: function() {
                    return o;
                },
                isResolved: n.fired,
                isRejected: r.fired,
                then: function(e, t, n) {
                    return l.done(e).fail(t).progress(n), this;
                },
                always: function() {
                    return l.done.apply(l, arguments).fail.apply(l, arguments), this;
                },
                pipe: function(e, t, n) {
                    return E.Deferred(function(o) {
                        E.each({
                            done: [ e, "resolve" ],
                            fail: [ t, "reject" ],
                            progress: [ n, "notify" ]
                        }, function(e, t) {
                            var n, r = t[0], i = t[1];
                            E.isFunction(r) ? l[e](function() {
                                (n = r.apply(this, arguments)) && E.isFunction(n.promise) ? n.promise().then(o.resolve, o.reject, o.notify) : o[i + "With"](this === l ? o : this, [ n ]);
                            }) : l[e](o[i]);
                        });
                    }).promise();
                },
                promise: function(e) {
                    if (null == e) e = s; else for (var t in s) e[t] = s[t];
                    return e;
                }
            }, l = s.promise({});
            for (t in a) l[t] = a[t].fire, l[t + "With"] = a[t].fireWith;
            return l.done(function() {
                o = "resolved";
            }, r.disable, i.lock).fail(function() {
                o = "rejected";
            }, n.disable, i.lock), e && e.call(l, l), l;
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    a[t] = 1 < arguments.length ? S.call(arguments, 0) : e, l.notifyWith(u, a);
                };
            }
            function n(t) {
                return function(e) {
                    r[t] = 1 < arguments.length ? S.call(arguments, 0) : e, --s || l.resolveWith(l, r);
                };
            }
            var r = S.call(arguments, 0), i = 0, o = r.length, a = Array(o), s = o, l = o <= 1 && e && E.isFunction(e.promise) ? e : E.Deferred(), u = l.promise();
            if (1 < o) {
                for (;i < o; i++) r[i] && r[i].promise && E.isFunction(r[i].promise) ? r[i].promise().then(n(i), l.reject, t(i)) : --s;
                s || l.resolveWith(l, r);
            } else l !== e && l.resolveWith(l, o ? [ e ] : []);
            return u;
        }
    }), E.support = function() {
        var f, e, t, n, r, i, o, d, a, s, p, h = _.createElement("div");
        _.documentElement;
        if (h.setAttribute("className", "t"), h.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", 
        e = h.getElementsByTagName("*"), t = h.getElementsByTagName("a")[0], !e || !e.length || !t) return {};
        r = (n = _.createElement("select")).appendChild(_.createElement("option")), i = h.getElementsByTagName("input")[0], 
        f = {
            leadingWhitespace: 3 === h.firstChild.nodeType,
            tbody: !h.getElementsByTagName("tbody").length,
            htmlSerialize: !!h.getElementsByTagName("link").length,
            style: /top/.test(t.getAttribute("style")),
            hrefNormalized: "/a" === t.getAttribute("href"),
            opacity: /^0.55/.test(t.style.opacity),
            cssFloat: !!t.style.cssFloat,
            checkOn: "on" === i.value,
            optSelected: r.selected,
            getSetAttribute: "t" !== h.className,
            enctype: !!_.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== _.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, E.boxModel = f.boxModel = "CSS1Compat" === _.compatMode, i.checked = !0, f.noCloneChecked = i.cloneNode(!0).checked, 
        n.disabled = !0, f.optDisabled = !r.disabled;
        try {
            delete h.test;
        } catch (e) {
            f.deleteExpando = !1;
        }
        if (!h.addEventListener && h.attachEvent && h.fireEvent && (h.attachEvent("onclick", function() {
            f.noCloneEvent = !1;
        }), h.cloneNode(!0).fireEvent("onclick")), (i = _.createElement("input")).value = "t", 
        i.setAttribute("type", "radio"), f.radioValue = "t" === i.value, i.setAttribute("checked", "checked"), 
        i.setAttribute("name", "t"), h.appendChild(i), (o = _.createDocumentFragment()).appendChild(h.lastChild), 
        f.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, f.appendChecked = i.checked, 
        o.removeChild(i), o.appendChild(h), h.attachEvent) for (s in {
            submit: 1,
            change: 1,
            focusin: 1
        }) (p = (a = "on" + s) in h) || (h.setAttribute(a, "return;"), p = "function" == typeof h[a]), 
        f[s + "Bubbles"] = p;
        return o.removeChild(h), o = n = r = h = i = null, E(function() {
            var e, t, n, r, i, o, a, s, l, u, c = _.getElementsByTagName("body")[0];
            !c || (1, l = (u = "padding:0;margin:0;border:") + "0;visibility:hidden;", "<div " + (a = "style='" + (s = "position:absolute;top:0;left:0;width:1px;height:1px;") + u + "5px solid #000;") + "display:block;'><div style='" + u + "0;display:block;overflow:hidden;'></div></div><table " + a + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", 
            (e = _.createElement("div")).style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:1px", 
            c.insertBefore(e, c.firstChild), h = _.createElement("div"), e.appendChild(h), h.innerHTML = "<table><tr><td style='" + u + "0;display:none'></td><td>t</td></tr></table>", 
            d = h.getElementsByTagName("td"), p = 0 === d[0].offsetHeight, d[0].style.display = "", 
            d[1].style.display = "none", f.reliableHiddenOffsets = p && 0 === d[0].offsetHeight, 
            F.getComputedStyle && (h.innerHTML = "", (o = _.createElement("div")).style.width = "0", 
            o.style.marginRight = "0", h.style.width = "2px", h.appendChild(o), f.reliableMarginRight = 0 === (parseInt((F.getComputedStyle(o, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)), void 0 !== h.style.zoom && (h.innerHTML = "", h.style.width = h.style.padding = "1px", 
            h.style.border = 0, h.style.overflow = "hidden", h.style.display = "inline", h.style.zoom = 1, 
            f.inlineBlockNeedsLayout = 3 === h.offsetWidth, h.style.display = "block", h.style.overflow = "visible", 
            h.innerHTML = "<div style='width:5px;'></div>", f.shrinkWrapBlocks = 3 !== h.offsetWidth), 
            h.style.cssText = s + l, h.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", 
            n = (t = h.firstChild).firstChild, r = t.nextSibling.firstChild.firstChild, i = {
                doesNotAddBorder: 5 !== n.offsetTop,
                doesAddBorderForTableAndCells: 5 === r.offsetTop
            }, n.style.position = "fixed", n.style.top = "20px", i.fixedPosition = 20 === n.offsetTop || 15 === n.offsetTop, 
            n.style.position = n.style.top = "", t.style.overflow = "hidden", t.style.position = "relative", 
            i.subtractsBorderForOverflowNotVisible = -5 === n.offsetTop, i.doesNotIncludeMarginInBodyOffset = 1 !== c.offsetTop, 
            F.getComputedStyle && (h.style.marginTop = "1%", f.pixelMargin = "1%" !== (F.getComputedStyle(h, null) || {
                marginTop: 0
            }).marginTop), void 0 !== e.style.zoom && (e.style.zoom = 1), c.removeChild(e), 
            o = h = e = null, E.extend(f, i));
        }), f;
    }();
    var A = /^(?:\{.*\}|\[.*\])$/, L = /([A-Z])/g;
    E.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (E.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? E.cache[e[E.expando]] : e[E.expando]) && !b(e);
        },
        data: function(e, t, n, r) {
            if (E.acceptData(e)) {
                var i, o, a, s = E.expando, l = "string" == typeof t, u = e.nodeType, c = u ? E.cache : e, f = u ? e[s] : e[s] && s, d = "events" === t;
                if ((!f || !c[f] || !d && !r && !c[f].data) && l && n === M) return;
                return f || (u ? e[s] = f = ++E.uuid : f = s), c[f] || (c[f] = {}, u || (c[f].toJSON = E.noop)), 
                "object" != typeof t && "function" != typeof t || (r ? c[f] = E.extend(c[f], t) : c[f].data = E.extend(c[f].data, t)), 
                i = o = c[f], r || (o.data || (o.data = {}), o = o.data), n !== M && (o[E.camelCase(t)] = n), 
                d && !o[t] ? i.events : (l ? null == (a = o[t]) && (a = o[E.camelCase(t)]) : a = o, 
                a);
            }
        },
        removeData: function(e, t, n) {
            if (E.acceptData(e)) {
                var r, i, o, a = E.expando, s = e.nodeType, l = s ? E.cache : e, u = s ? e[a] : a;
                if (!l[u]) return;
                if (t && (r = n ? l[u] : l[u].data)) {
                    E.isArray(t) || (t in r ? t = [ t ] : t = (t = E.camelCase(t)) in r ? [ t ] : t.split(" "));
                    for (i = 0, o = t.length; i < o; i++) delete r[t[i]];
                    if (!(n ? b : E.isEmptyObject)(r)) return;
                }
                if (!n && (delete l[u].data, !b(l[u]))) return;
                E.support.deleteExpando || !l.setInterval ? delete l[u] : l[u] = null, s && (E.support.deleteExpando ? delete e[a] : e.removeAttribute ? e.removeAttribute(a) : e[a] = null);
            }
        },
        _data: function(e, t, n) {
            return E.data(e, t, n, !0);
        },
        acceptData: function(e) {
            if (e.nodeName) {
                var t = E.noData[e.nodeName.toLowerCase()];
                if (t) return !0 !== t && e.getAttribute("classid") === t;
            }
            return !0;
        }
    }), E.fn.extend({
        data: function(n, e) {
            var r, i, t, o, a, s = this[0], l = 0, u = null;
            if (n === M) {
                if (this.length && (u = E.data(s), 1 === s.nodeType && !E._data(s, "parsedAttrs"))) {
                    for (a = (t = s.attributes).length; l < a; l++) 0 === (o = t[l].name).indexOf("data-") && (o = E.camelCase(o.substring(5)), 
                    w(s, o, u[o]));
                    E._data(s, "parsedAttrs", !0);
                }
                return u;
            }
            return "object" == typeof n ? this.each(function() {
                E.data(this, n);
            }) : ((r = n.split(".", 2))[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", E.access(this, function(t) {
                if (t === M) return (u = this.triggerHandler("getData" + i, [ r[0] ])) === M && s && (u = E.data(s, n), 
                u = w(s, n, u)), u === M && r[1] ? this.data(r[0]) : u;
                r[1] = t, this.each(function() {
                    var e = E(this);
                    e.triggerHandler("setData" + i, r), E.data(this, n, t), e.triggerHandler("changeData" + i, r);
                });
            }, null, e, 1 < arguments.length, null, !1));
        },
        removeData: function(e) {
            return this.each(function() {
                E.removeData(this, e);
            });
        }
    }), E.extend({
        _mark: function(e, t) {
            e && (t = (t || "fx") + "mark", E._data(e, t, (E._data(e, t) || 0) + 1));
        },
        _unmark: function(e, t, n) {
            if (!0 !== e && (n = t, t = e, e = !1), t) {
                var r = (n = n || "fx") + "mark", i = e ? 0 : (E._data(t, r) || 1) - 1;
                i ? E._data(t, r, i) : (E.removeData(t, r, !0), v(t, n, "mark"));
            }
        },
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = E._data(e, t), n && (!r || E.isArray(n) ? r = E._data(e, t, E.makeArray(n)) : r.push(n)), 
            r || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t), r = n.shift(), i = {};
            "inprogress" === r && (r = n.shift()), r && ("fx" === t && n.unshift("inprogress"), 
            E._data(e, t + ".run", i), r.call(e, function() {
                E.dequeue(e, t);
            }, i)), n.length || (E.removeData(e, t + "queue " + t + ".run", !0), v(e, t, "queue"));
        }
    }), E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : n === M ? this : this.each(function() {
                var e = E.queue(this, t, n);
                "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e);
            });
        },
        delay: function(r, e) {
            return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
                var n = setTimeout(e, r);
                t.stop = function() {
                    clearTimeout(n);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            function n() {
                --s || i.resolveWith(o, [ o ]);
            }
            "string" != typeof e && (t = e, e = M), e = e || "fx";
            for (var r, i = E.Deferred(), o = this, a = o.length, s = 1, l = e + "defer", u = e + "queue", c = e + "mark"; a--; ) (r = E.data(o[a], l, M, !0) || (E.data(o[a], u, M, !0) || E.data(o[a], c, M, !0)) && E.data(o[a], l, E.Callbacks("once memory"), !0)) && (s++, 
            r.add(n));
            return n(), i.promise(t);
        }
    });
    var D, j, O, B = /[\n\t\r]/g, P = /\s+/, q = /\r/g, W = /^(?:button|input)$/i, I = /^(?:button|input|object|select|textarea)$/i, $ = /^a(?:rea)?$/i, R = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, X = E.support.getSetAttribute;
    E.fn.extend({
        attr: function(e, t) {
            return E.access(this, E.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return E.access(this, E.prop, e, t, 1 < arguments.length);
        },
        removeProp: function(e) {
            return e = E.propFix[e] || e, this.each(function() {
                try {
                    this[e] = M, delete this[e];
                } catch (e) {}
            });
        },
        addClass: function(t) {
            var e, n, r, i, o, a, s;
            if (E.isFunction(t)) return this.each(function(e) {
                E(this).addClass(t.call(this, e, this.className));
            });
            if (t && "string" == typeof t) for (e = t.split(P), n = 0, r = this.length; n < r; n++) if (1 === (i = this[n]).nodeType) if (i.className || 1 !== e.length) {
                for (o = " " + i.className + " ", a = 0, s = e.length; a < s; a++) ~o.indexOf(" " + e[a] + " ") || (o += e[a] + " ");
                i.className = E.trim(o);
            } else i.className = t;
            return this;
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s;
            if (E.isFunction(t)) return this.each(function(e) {
                E(this).removeClass(t.call(this, e, this.className));
            });
            if (t && "string" == typeof t || t === M) for (e = (t || "").split(P), n = 0, r = this.length; n < r; n++) if (1 === (i = this[n]).nodeType && i.className) if (t) {
                for (o = (" " + i.className + " ").replace(B, " "), a = 0, s = e.length; a < s; a++) o = o.replace(" " + e[a] + " ", " ");
                i.className = E.trim(o);
            } else i.className = "";
            return this;
        },
        toggleClass: function(o, a) {
            var s = typeof o, l = "boolean" == typeof a;
            return E.isFunction(o) ? this.each(function(e) {
                E(this).toggleClass(o.call(this, e, this.className, a), a);
            }) : this.each(function() {
                if ("string" === s) for (var e, t = 0, n = E(this), r = a, i = o.split(P); e = i[t++]; ) r = l ? r : !n.hasClass(e), 
                n[r ? "addClass" : "removeClass"](e); else "undefined" !== s && "boolean" !== s || (this.className && E._data(this, "__className__", this.className), 
                this.className = this.className || !1 === o ? "" : E._data(this, "__className__") || "");
            });
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++) if (1 === this[n].nodeType && -1 < (" " + this[n].className + " ").replace(B, " ").indexOf(t)) return !0;
            return !1;
        },
        val: function(r) {
            var i, e, o, t = this[0];
            return arguments.length ? (o = E.isFunction(r), this.each(function(e) {
                var t, n = E(this);
                1 === this.nodeType && (null == (t = o ? r.call(this, e, n.val()) : r) ? t = "" : "number" == typeof t ? t += "" : E.isArray(t) && (t = E.map(t, function(e) {
                    return null == e ? "" : e + "";
                })), (i = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, t, "value") !== M || (this.value = t));
            })) : t ? (i = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in i && (e = i.get(t, "value")) !== M ? e : "string" == typeof (e = t.value) ? e.replace(q, "") : null == e ? "" : e : void 0;
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text;
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i, o = e.selectedIndex, a = [], s = e.options, l = "select-one" === e.type;
                    if (o < 0) return null;
                    for (n = l ? o : 0, r = l ? o + 1 : s.length; n < r; n++) if ((i = s[n]).selected && (E.support.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !E.nodeName(i.parentNode, "optgroup"))) {
                        if (t = E(i).val(), l) return t;
                        a.push(t);
                    }
                    return l && !a.length && s.length ? E(s[o]).val() : a;
                },
                set: function(e, t) {
                    var n = E.makeArray(t);
                    return E(e).find("option").each(function() {
                        this.selected = 0 <= E.inArray(E(this).val(), n);
                    }), n.length || (e.selectedIndex = -1), n;
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(e, t, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return r && t in E.attrFn ? E(e)[t](n) : void 0 === e.getAttribute ? E.prop(e, t, n) : ((a = 1 !== s || !E.isXMLDoc(e)) && (t = t.toLowerCase(), 
            o = E.attrHooks[t] || (R.test(t) ? j : D)), n !== M ? null === n ? void E.removeAttr(e, t) : o && "set" in o && a && (i = o.set(e, n, t)) !== M ? i : (e.setAttribute(t, "" + n), 
            n) : o && "get" in o && a && null !== (i = o.get(e, t)) ? i : null === (i = e.getAttribute(t)) ? M : i);
        },
        removeAttr: function(e, t) {
            var n, r, i, o, a, s = 0;
            if (t && 1 === e.nodeType) for (o = (r = t.toLowerCase().split(P)).length; s < o; s++) (i = r[s]) && (n = E.propFix[i] || i, 
            (a = R.test(i)) || E.attr(e, i, ""), e.removeAttribute(X ? i : n), a && n in e && (e[n] = !1));
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (W.test(e.nodeName) && e.parentNode) E.error("type property can't be changed"); else if (!E.support.radioValue && "radio" === t && E.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return D && E.nodeName(e, "button") ? D.get(e, t) : t in e ? e.value : null;
                },
                set: function(e, t, n) {
                    if (D && E.nodeName(e, "button")) return D.set(e, t, n);
                    e.value = t;
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !E.isXMLDoc(e)) && (t = E.propFix[t] || t, 
            i = E.propHooks[t]), n !== M ? i && "set" in i && (r = i.set(e, n, t)) !== M ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = e.getAttributeNode("tabindex");
                    return t && t.specified ? parseInt(t.value, 10) : I.test(e.nodeName) || $.test(e.nodeName) && e.href ? 0 : M;
                }
            }
        }
    }), E.attrHooks.tabindex = E.propHooks.tabIndex, j = {
        get: function(e, t) {
            var n, r = E.prop(e, t);
            return !0 === r || "boolean" != typeof r && (n = e.getAttributeNode(t)) && !1 !== n.nodeValue ? t.toLowerCase() : M;
        },
        set: function(e, t, n) {
            var r;
            return !1 === t ? E.removeAttr(e, n) : ((r = E.propFix[n] || n) in e && (e[r] = !0), 
            e.setAttribute(n, n.toLowerCase())), n;
        }
    }, X || (O = {
        name: !0,
        id: !0,
        coords: !0
    }, D = E.valHooks.button = {
        get: function(e, t) {
            var n;
            return (n = e.getAttributeNode(t)) && (O[t] ? "" !== n.nodeValue : n.specified) ? n.nodeValue : M;
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = _.createAttribute(n), e.setAttributeNode(r)), r.nodeValue = t + "";
        }
    }, E.attrHooks.tabindex.set = D.set, E.each([ "width", "height" ], function(e, n) {
        E.attrHooks[n] = E.extend(E.attrHooks[n], {
            set: function(e, t) {
                if ("" === t) return e.setAttribute(n, "auto"), t;
            }
        });
    }), E.attrHooks.contenteditable = {
        get: D.get,
        set: function(e, t, n) {
            "" === t && (t = "false"), D.set(e, t, n);
        }
    }), E.support.hrefNormalized || E.each([ "href", "src", "width", "height" ], function(e, n) {
        E.attrHooks[n] = E.extend(E.attrHooks[n], {
            get: function(e) {
                var t = e.getAttribute(n, 2);
                return null === t ? M : t;
            }
        });
    }), E.support.style || (E.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || M;
        },
        set: function(e, t) {
            return e.style.cssText = "" + t;
        }
    }), E.support.optSelected || (E.propHooks.selected = E.extend(E.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    })), E.support.enctype || (E.propFix.enctype = "encoding"), E.support.checkOn || E.each([ "radio", "checkbox" ], function() {
        E.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value;
            }
        };
    }), E.each([ "radio", "checkbox" ], function() {
        E.valHooks[this] = E.extend(E.valHooks[this], {
            set: function(e, t) {
                if (E.isArray(t)) return e.checked = 0 <= E.inArray(E(e).val(), t);
            }
        });
    });
    var z = /^(?:textarea|input|select)$/i, V = /^([^\.]*)?(?:\.(.+))?$/, U = /(?:^|\s)hover(\.\S+)?\b/, G = /^key/, Y = /^(?:mouse|contextmenu)|click/, J = /^(?:focusinfocus|focusoutblur)$/, Q = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, K = function(e) {
        return E.event.special.hover ? e : e.replace(U, "mouseenter$1 mouseleave$1");
    };
    E.event = {
        add: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h, m, g, y;
            if (3 !== e.nodeType && 8 !== e.nodeType && t && n && (o = E._data(e))) {
                for (n.handler && (n = (p = n).handler, i = p.selector), n.guid || (n.guid = E.guid++), 
                (s = o.events) || (o.events = s = {}), (a = o.handle) || (o.handle = a = function(e) {
                    return void 0 === E || e && E.event.triggered === e.type ? M : E.event.dispatch.apply(a.elem, arguments);
                }, a.elem = e), t = E.trim(K(t)).split(" "), l = 0; l < t.length; l++) c = (u = V.exec(t[l]) || [])[1], 
                f = (u[2] || "").split(".").sort(), m = E.event.special[c] || {}, c = (i ? m.delegateType : m.bindType) || c, 
                m = E.event.special[c] || {}, d = E.extend({
                    type: c,
                    origType: u[1],
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    quick: i && (g = i, y = void 0, y = Q.exec(g), y && (y[1] = (y[1] || "").toLowerCase(), 
                    y[3] = y[3] && new RegExp("(?:^|\\s)" + y[3] + "(?:\\s|$)")), y),
                    namespace: f.join(".")
                }, p), (h = s[c]) || ((h = s[c] = []).delegateCount = 0, m.setup && !1 !== m.setup.call(e, r, f, a) || (e.addEventListener ? e.addEventListener(c, a, !1) : e.attachEvent && e.attachEvent("on" + c, a))), 
                m.add && (m.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, d) : h.push(d), 
                E.event.global[c] = !0;
                e = null;
            }
        },
        global: {},
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h, m, g, y = E.hasData(e) && E._data(e);
            if (y && (d = y.events)) {
                for (t = E.trim(K(t || "")).split(" "), o = 0; o < t.length; o++) if (s = l = (a = V.exec(t[o]) || [])[1], 
                u = a[2], s) {
                    for (p = E.event.special[s] || {}, c = (m = d[s = (r ? p.delegateType : p.bindType) || s] || []).length, 
                    u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, 
                    f = 0; f < m.length; f++) g = m[f], (i || l === g.origType) && (!n || n.guid === g.guid) && (!u || u.test(g.namespace)) && (!r || r === g.selector || "**" === r && g.selector) && (m.splice(f--, 1), 
                    g.selector && m.delegateCount--, p.remove && p.remove.call(e, g));
                    0 === m.length && c !== m.length && ((!p.teardown || !1 === p.teardown.call(e, u)) && E.removeEvent(e, s, y.handle), 
                    delete d[s]);
                } else for (s in d) E.event.remove(e, s + t[o], n, r, !0);
                E.isEmptyObject(d) && ((h = y.handle) && (h.elem = null), E.removeData(e, [ "events", "handle" ], !0));
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(e, t, n, r) {
            if (!n || 3 !== n.nodeType && 8 !== n.nodeType) {
                var i, o, a, s, l, u, c, f, d, p, h = e.type || e, m = [];
                if (J.test(h + E.event.triggered)) return;
                if (0 <= h.indexOf("!") && (h = h.slice(0, -1), o = !0), 0 <= h.indexOf(".") && (h = (m = h.split(".")).shift(), 
                m.sort()), (!n || E.event.customEvent[h]) && !E.event.global[h]) return;
                if ((e = "object" == typeof e ? e[E.expando] ? e : new E.Event(h, e) : new E.Event(h)).type = h, 
                e.isTrigger = !0, e.exclusive = o, e.namespace = m.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, 
                u = h.indexOf(":") < 0 ? "on" + h : "", !n) {
                    for (a in i = E.cache) i[a].events && i[a].events[h] && E.event.trigger(e, t, i[a].handle.elem, !0);
                    return;
                }
                if (e.result = M, e.target || (e.target = n), (t = null != t ? E.makeArray(t) : []).unshift(e), 
                (c = E.event.special[h] || {}).trigger && !1 === c.trigger.apply(n, t)) return;
                if (d = [ [ n, c.bindType || h ] ], !r && !c.noBubble && !E.isWindow(n)) {
                    for (p = c.delegateType || h, s = J.test(p + h) ? n : n.parentNode, l = null; s; s = s.parentNode) d.push([ s, p ]), 
                    l = s;
                    l && l === n.ownerDocument && d.push([ l.defaultView || l.parentWindow || F, p ]);
                }
                for (a = 0; a < d.length && !e.isPropagationStopped(); a++) s = d[a][0], e.type = d[a][1], 
                (f = (E._data(s, "events") || {})[e.type] && E._data(s, "handle")) && f.apply(s, t), 
                (f = u && s[u]) && E.acceptData(s) && !1 === f.apply(s, t) && e.preventDefault();
                return e.type = h, !r && !e.isDefaultPrevented() && (!c._default || !1 === c._default.apply(n.ownerDocument, t)) && ("click" !== h || !E.nodeName(n, "a")) && E.acceptData(n) && u && n[h] && ("focus" !== h && "blur" !== h || 0 !== e.target.offsetWidth) && !E.isWindow(n) && ((l = n[u]) && (n[u] = null), 
                n[E.event.triggered = h](), E.event.triggered = M, l && (n[u] = l)), e.result;
            }
        },
        dispatch: function(e) {
            e = E.event.fix(e || F.event);
            var t, n, r, i, o, a, s, l, u, c, f, d, p, h = (E._data(this, "events") || {})[e.type] || [], m = h.delegateCount, g = [].slice.call(arguments, 0), y = !e.exclusive && !e.namespace, v = E.event.special[e.type] || {}, b = [];
            if ((g[0] = e).delegateTarget = this, !v.preDispatch || !1 !== v.preDispatch.call(this, e)) {
                if (m && (!e.button || "click" !== e.type)) for ((i = E(this)).context = this.ownerDocument || this, 
                r = e.target; r != this; r = r.parentNode || this) if (!0 !== r.disabled) {
                    for (a = {}, l = [], i[0] = r, t = 0; t < m; t++) a[c = (u = h[t]).selector] === M && (a[c] = u.quick ? (f = r, 
                    d = u.quick, void 0, p = f.attributes || {}, (!d[1] || f.nodeName.toLowerCase() === d[1]) && (!d[2] || (p.id || {}).value === d[2]) && (!d[3] || d[3].test((p.class || {}).value))) : i.is(c)), 
                    a[c] && l.push(u);
                    l.length && b.push({
                        elem: r,
                        matches: l
                    });
                }
                for (h.length > m && b.push({
                    elem: this,
                    matches: h.slice(m)
                }), t = 0; t < b.length && !e.isPropagationStopped(); t++) for (s = b[t], e.currentTarget = s.elem, 
                n = 0; n < s.matches.length && !e.isImmediatePropagationStopped(); n++) u = s.matches[n], 
                (y || !e.namespace && !u.namespace || e.namespace_re && e.namespace_re.test(u.namespace)) && (e.data = u.data, 
                e.handleObj = u, (o = ((E.event.special[u.origType] || {}).handle || u.handler).apply(s.elem, g)) !== M && (!1 === (e.result = o) && (e.preventDefault(), 
                e.stopPropagation())));
                return v.postDispatch && v.postDispatch.call(this, e), e.result;
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), 
                e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || _).documentElement, 
                i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), 
                e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), 
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), !e.which && o !== M && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), 
                e;
            }
        },
        fix: function(e) {
            if (e[E.expando]) return e;
            var t, n, r = e, i = E.event.fixHooks[e.type] || {}, o = i.props ? this.props.concat(i.props) : this.props;
            for (e = E.Event(r), t = o.length; t; ) e[n = o[--t]] = r[n];
            return e.target || (e.target = r.srcElement || _), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
            e.metaKey === M && (e.metaKey = e.ctrlKey), i.filter ? i.filter(e, r) : e;
        },
        special: {
            ready: {
                setup: E.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(e, t, n) {
                    E.isWindow(this) && (this.onbeforeunload = n);
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null);
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = E.extend(new E.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? E.event.trigger(i, null, t) : E.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, E.event.handle = E.event.dispatch, E.removeEvent = _.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } : function(e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n);
    }, E.Event = function(e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? m : y) : this.type = e, 
        t && E.extend(this, t), this.timeStamp = e && e.timeStamp || E.now(), this[E.expando] = !0;
    }, E.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = m;
            var e = this.originalEvent;
            !e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        },
        stopPropagation: function() {
            this.isPropagationStopped = m;
            var e = this.originalEvent;
            !e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = m, this.stopPropagation();
        },
        isDefaultPrevented: y,
        isPropagationStopped: y,
        isImmediatePropagationStopped: y
    }, E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                r.selector;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), 
                e.type = i), t;
            }
        };
    }), E.support.submitBubbles || (E.event.special.submit = {
        setup: function() {
            if (E.nodeName(this, "form")) return !1;
            E.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target, n = E.nodeName(t, "input") || E.nodeName(t, "button") ? t.form : M;
                n && !n._submit_attached && (E.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), n._submit_attached = !0);
            });
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && E.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function() {
            if (E.nodeName(this, "form")) return !1;
            E.event.remove(this, "._submit");
        }
    }), E.support.changeBubbles || (E.event.special.change = {
        setup: function() {
            if (z.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (E.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
            }), E.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1, E.event.simulate("change", this, e, !0));
            })), !1;
            E.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                z.test(t.nodeName) && !t._change_attached && (E.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && E.event.simulate("change", this.parentNode, e, !0);
                }), t._change_attached = !0);
            });
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments);
        },
        teardown: function() {
            return E.event.remove(this, "._change"), z.test(this.nodeName);
        }
    }), E.support.focusinBubbles || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0, r = function(e) {
            E.event.simulate(t, e.target, E.event.fix(e), !0);
        };
        E.event.special[t] = {
            setup: function() {
                0 == n++ && _.addEventListener(e, r, !0);
            },
            teardown: function() {
                0 == --n && _.removeEventListener(e, r, !0);
            }
        };
    }), E.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof t && (n = n || t, t = M), e) this.on(a, t, n, e[a], i);
                return this;
            }
            if (null == n && null == r ? (r = t, n = t = M) : null == r && ("string" == typeof t ? (r = n, 
            n = M) : (r = n, n = t, t = M)), !1 === r) r = y; else if (!r) return this;
            return 1 === i && (o = r, (r = function(e) {
                return E().off(e), o.apply(this, arguments);
            }).guid = o.guid || (o.guid = E.guid++)), this.each(function() {
                E.event.add(this, e, r, n, t);
            });
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off: function(e, t, n) {
            if (e && e.preventDefault && e.handleObj) {
                var r = e.handleObj;
                return E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
                this;
            }
            if ("object" == typeof e) {
                for (var i in e) this.off(i, t, e[i]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = M), !1 === n && (n = y), 
            this.each(function() {
                E.event.remove(this, e, n, t);
            });
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        live: function(e, t, n) {
            return E(this.context).on(e, this.selector, t, n), this;
        },
        die: function(e, t) {
            return E(this.context).off(e, this.selector || "**", t), this;
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, n);
        },
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            if (this[0]) return E.event.trigger(e, t, this[0], !0);
        },
        toggle: function(n) {
            var r = arguments, e = n.guid || E.guid++, i = 0, t = function(e) {
                var t = (E._data(this, "lastToggle" + n.guid) || 0) % i;
                return E._data(this, "lastToggle" + n.guid, t + 1), e.preventDefault(), r[t].apply(this, arguments) || !1;
            };
            for (t.guid = e; i < r.length; ) r[i++].guid = e;
            return this.click(t);
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), E.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return null == t && (t = e, e = null), 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        }, E.attrFn && (E.attrFn[n] = !0), G.test(n) && (E.event.fixHooks[n] = E.event.keyHooks), 
        Y.test(n) && (E.event.fixHooks[n] = E.event.mouseHooks);
    }), function() {
        function a(e, t, n, r, i, o) {
            for (var a = 0, s = r.length; a < s; a++) {
                var l = r[a];
                if (l) {
                    var u = !1;
                    for (l = l[e]; l; ) {
                        if (l[c] === n) {
                            u = r[l.sizset];
                            break;
                        }
                        if (1 === l.nodeType) if (o || (l[c] = n, l.sizset = a), "string" != typeof t) {
                            if (l === t) {
                                u = !0;
                                break;
                            }
                        } else if (0 < b.filter(t, [ l ]).length) {
                            u = l;
                            break;
                        }
                        l = l[e];
                    }
                    r[a] = u;
                }
            }
        }
        function s(e, t, n, r, i, o) {
            for (var a = 0, s = r.length; a < s; a++) {
                var l = r[a];
                if (l) {
                    var u = !1;
                    for (l = l[e]; l; ) {
                        if (l[c] === n) {
                            u = r[l.sizset];
                            break;
                        }
                        if (1 === l.nodeType && !o && (l[c] = n, l.sizset = a), l.nodeName.toLowerCase() === t) {
                            u = l;
                            break;
                        }
                        l = l[e];
                    }
                    r[a] = u;
                }
            }
        }
        var y = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, c = "sizcache" + (Math.random() + "").replace(".", ""), l = 0, v = Object.prototype.toString, f = !1, n = !0, u = /\\/g, o = /\r\n/g, d = /\W/;
        [ 0, 0 ].sort(function() {
            return n = !1, 0;
        });
        var b = function(e, t, n, r) {
            n = n || [];
            var i = t = t || _;
            if (1 !== t.nodeType && 9 !== t.nodeType) return [];
            if (!e || "string" != typeof e) return n;
            var o, a, s, l, u, c, f, d, p = !0, h = b.isXML(t), m = [], g = e;
            do {
                if (y.exec(""), (o = y.exec(g)) && (g = o[3], m.push(o[1]), o[2])) {
                    l = o[3];
                    break;
                }
            } while (o);
            if (1 < m.length && T.exec(e)) if (2 === m.length && x.relative[m[0]]) a = C(m[0] + m[1], t, r); else for (a = x.relative[m[0]] ? [ t ] : b(m.shift(), t); m.length; ) e = m.shift(), 
            x.relative[e] && (e += m.shift()), a = C(e, a, r); else if (!r && 1 < m.length && 9 === t.nodeType && !h && x.match.ID.test(m[0]) && !x.match.ID.test(m[m.length - 1]) && (t = (u = b.find(m.shift(), t, h)).expr ? b.filter(u.expr, u.set)[0] : u.set[0]), 
            t) for (a = (u = r ? {
                expr: m.pop(),
                set: N(r)
            } : b.find(m.pop(), 1 !== m.length || "~" !== m[0] && "+" !== m[0] || !t.parentNode ? t : t.parentNode, h)).expr ? b.filter(u.expr, u.set) : u.set, 
            0 < m.length ? s = N(a) : p = !1; m.length; ) f = c = m.pop(), x.relative[c] ? f = m.pop() : c = "", 
            null == f && (f = t), x.relative[c](s, f, h); else s = m = [];
            if (s || (s = a), s || b.error(c || e), "[object Array]" === v.call(s)) if (p) if (t && 1 === t.nodeType) for (d = 0; null != s[d]; d++) s[d] && (!0 === s[d] || 1 === s[d].nodeType && b.contains(t, s[d])) && n.push(a[d]); else for (d = 0; null != s[d]; d++) s[d] && 1 === s[d].nodeType && n.push(a[d]); else n.push.apply(n, s); else N(s, n);
            return l && (b(l, i, n, r), b.uniqueSort(n)), n;
        };
        b.uniqueSort = function(e) {
            if (r && (f = n, e.sort(r), f)) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
            return e;
        }, b.matches = function(e, t) {
            return b(e, null, null, t);
        }, b.matchesSelector = function(e, t) {
            return 0 < b(t, null, null, [ e ]).length;
        }, b.find = function(e, t, n) {
            var r, i, o, a, s, l;
            if (!e) return [];
            for (i = 0, o = x.order.length; i < o; i++) if (s = x.order[i], (a = x.leftMatch[s].exec(e)) && (l = a[1], 
            a.splice(1, 1), "\\" !== l.substr(l.length - 1) && (a[1] = (a[1] || "").replace(u, ""), 
            null != (r = x.find[s](a, t, n))))) {
                e = e.replace(x.match[s], "");
                break;
            }
            return r || (r = void 0 !== t.getElementsByTagName ? t.getElementsByTagName("*") : []), 
            {
                set: r,
                expr: e
            };
        }, b.filter = function(e, t, n, r) {
            for (var i, o, a, s, l, u, c, f, d, p = e, h = [], m = t, g = t && t[0] && b.isXML(t[0]); e && t.length; ) {
                for (a in x.filter) if (null != (i = x.leftMatch[a].exec(e)) && i[2]) {
                    if (u = x.filter[a], c = i[1], o = !1, i.splice(1, 1), "\\" === c.substr(c.length - 1)) continue;
                    if (m === h && (h = []), x.preFilter[a]) if (i = x.preFilter[a](i, m, n, h, r, g)) {
                        if (!0 === i) continue;
                    } else o = s = !0;
                    if (i) for (f = 0; null != (l = m[f]); f++) l && (d = r ^ (s = u(l, i, f, m)), n && null != s ? d ? o = !0 : m[f] = !1 : d && (h.push(l), 
                    o = !0));
                    if (s !== M) {
                        if (n || (m = h), e = e.replace(x.match[a], ""), !o) return [];
                        break;
                    }
                }
                if (e === p) {
                    if (null != o) break;
                    b.error(e);
                }
                p = e;
            }
            return m;
        }, b.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        };
        var p = b.getText = function(e) {
            var t, n, r = e.nodeType, i = "";
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    if ("string" == typeof e.innerText) return e.innerText.replace(o, "");
                    for (e = e.firstChild; e; e = e.nextSibling) i += p(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (t = 0; n = e[t]; t++) 8 !== n.nodeType && (i += p(n));
            return i;
        }, x = b.selectors = {
            order: [ "ID", "NAME", "TAG" ],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                class: "className",
                for: "htmlFor"
            },
            attrHandle: {
                href: function(e) {
                    return e.getAttribute("href");
                },
                type: function(e) {
                    return e.getAttribute("type");
                }
            },
            relative: {
                "+": function(e, t) {
                    var n = "string" == typeof t, r = n && !d.test(t), i = n && !r;
                    r && (t = t.toLowerCase());
                    for (var o, a = 0, s = e.length; a < s; a++) if (o = e[a]) {
                        for (;(o = o.previousSibling) && 1 !== o.nodeType; ) ;
                        e[a] = i || o && o.nodeName.toLowerCase() === t ? o || !1 : o === t;
                    }
                    i && b.filter(t, e, !0);
                },
                ">": function(e, t) {
                    var n, r = "string" == typeof t, i = 0, o = e.length;
                    if (r && !d.test(t)) {
                        for (t = t.toLowerCase(); i < o; i++) if (n = e[i]) {
                            var a = n.parentNode;
                            e[i] = a.nodeName.toLowerCase() === t && a;
                        }
                    } else {
                        for (;i < o; i++) (n = e[i]) && (e[i] = r ? n.parentNode : n.parentNode === t);
                        r && b.filter(t, e, !0);
                    }
                },
                "": function(e, t, n) {
                    var r, i = l++, o = a;
                    "string" == typeof t && !d.test(t) && (r = t = t.toLowerCase(), o = s), o("parentNode", t, i, e, r, n);
                },
                "~": function(e, t, n) {
                    var r, i = l++, o = a;
                    "string" == typeof t && !d.test(t) && (r = t = t.toLowerCase(), o = s), o("previousSibling", t, i, e, r, n);
                }
            },
            find: {
                ID: function(e, t, n) {
                    if (void 0 !== t.getElementById && !n) {
                        var r = t.getElementById(e[1]);
                        return r && r.parentNode ? [ r ] : [];
                    }
                },
                NAME: function(e, t) {
                    if (void 0 !== t.getElementsByName) {
                        for (var n = [], r = t.getElementsByName(e[1]), i = 0, o = r.length; i < o; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                        return 0 === n.length ? null : n;
                    }
                },
                TAG: function(e, t) {
                    if (void 0 !== t.getElementsByTagName) return t.getElementsByTagName(e[1]);
                }
            },
            preFilter: {
                CLASS: function(e, t, n, r, i, o) {
                    if (e = " " + e[1].replace(u, "") + " ", o) return e;
                    for (var a, s = 0; null != (a = t[s]); s++) a && (i ^ (a.className && 0 <= (" " + a.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e)) ? n || r.push(a) : n && (t[s] = !1));
                    return !1;
                },
                ID: function(e) {
                    return e[1].replace(u, "");
                },
                TAG: function(e, t) {
                    return e[1].replace(u, "").toLowerCase();
                },
                CHILD: function(e) {
                    if ("nth" === e[1]) {
                        e[2] || b.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                        var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(("even" === e[2] ? "2n" : "odd" === e[2] && "2n+1") || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0;
                    } else e[2] && b.error(e[0]);
                    return e[0] = l++, e;
                },
                ATTR: function(e, t, n, r, i, o) {
                    var a = e[1] = e[1].replace(u, "");
                    return !o && x.attrMap[a] && (e[1] = x.attrMap[a]), e[4] = (e[4] || e[5] || "").replace(u, ""), 
                    "~=" === e[2] && (e[4] = " " + e[4] + " "), e;
                },
                PSEUDO: function(e, t, n, r, i) {
                    if ("not" === e[1]) {
                        if (!(1 < (y.exec(e[3]) || "").length || /^\w/.test(e[3]))) {
                            var o = b.filter(e[3], t, n, !0 ^ i);
                            return n || r.push.apply(r, o), !1;
                        }
                        e[3] = b(e[3], null, null, t);
                    } else if (x.match.POS.test(e[0]) || x.match.CHILD.test(e[0])) return !0;
                    return e;
                },
                POS: function(e) {
                    return e.unshift(!0), e;
                }
            },
            filters: {
                enabled: function(e) {
                    return !1 === e.disabled && "hidden" !== e.type;
                },
                disabled: function(e) {
                    return !0 === e.disabled;
                },
                checked: function(e) {
                    return !0 === e.checked;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                parent: function(e) {
                    return !!e.firstChild;
                },
                empty: function(e) {
                    return !e.firstChild;
                },
                has: function(e, t, n) {
                    return !!b(n[3], e).length;
                },
                header: function(e) {
                    return /h\d/i.test(e.nodeName);
                },
                text: function(e) {
                    var t = e.getAttribute("type"), n = e.type;
                    return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t);
                },
                radio: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "radio" === e.type;
                },
                checkbox: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type;
                },
                file: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "file" === e.type;
                },
                password: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "password" === e.type;
                },
                submit: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && "submit" === e.type;
                },
                image: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "image" === e.type;
                },
                reset: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && "reset" === e.type;
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                input: function(e) {
                    return /input|select|textarea|button/i.test(e.nodeName);
                },
                focus: function(e) {
                    return e === e.ownerDocument.activeElement;
                }
            },
            setFilters: {
                first: function(e, t) {
                    return 0 === t;
                },
                last: function(e, t, n, r) {
                    return t === r.length - 1;
                },
                even: function(e, t) {
                    return t % 2 == 0;
                },
                odd: function(e, t) {
                    return t % 2 == 1;
                },
                lt: function(e, t, n) {
                    return t < n[3] - 0;
                },
                gt: function(e, t, n) {
                    return t > n[3] - 0;
                },
                nth: function(e, t, n) {
                    return n[3] - 0 === t;
                },
                eq: function(e, t, n) {
                    return n[3] - 0 === t;
                }
            },
            filter: {
                PSEUDO: function(e, t, n, r) {
                    var i = t[1], o = x.filters[i];
                    if (o) return o(e, n, t, r);
                    if ("contains" === i) return 0 <= (e.textContent || e.innerText || p([ e ]) || "").indexOf(t[3]);
                    if ("not" === i) {
                        for (var a = t[3], s = 0, l = a.length; s < l; s++) if (a[s] === e) return !1;
                        return !0;
                    }
                    b.error(i);
                },
                CHILD: function(e, t) {
                    var n, r, i, o, a, s, l = t[1], u = e;
                    switch (l) {
                      case "only":
                      case "first":
                        for (;u = u.previousSibling; ) if (1 === u.nodeType) return !1;
                        if ("first" === l) return !0;
                        u = e;

                      case "last":
                        for (;u = u.nextSibling; ) if (1 === u.nodeType) return !1;
                        return !0;

                      case "nth":
                        if (n = t[2], r = t[3], 1 === n && 0 === r) return !0;
                        if (i = t[0], (o = e.parentNode) && (o[c] !== i || !e.nodeIndex)) {
                            for (a = 0, u = o.firstChild; u; u = u.nextSibling) 1 === u.nodeType && (u.nodeIndex = ++a);
                            o[c] = i;
                        }
                        return s = e.nodeIndex - r, 0 === n ? 0 === s : s % n == 0 && 0 <= s / n;
                    }
                },
                ID: function(e, t) {
                    return 1 === e.nodeType && e.getAttribute("id") === t;
                },
                TAG: function(e, t) {
                    return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t;
                },
                CLASS: function(e, t) {
                    return -1 < (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t);
                },
                ATTR: function(e, t) {
                    var n = t[1], r = b.attr ? b.attr(e, n) : x.attrHandle[n] ? x.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n), i = r + "", o = t[2], a = t[4];
                    return null == r ? "!=" === o : !o && b.attr ? null != r : "=" === o ? i === a : "*=" === o ? 0 <= i.indexOf(a) : "~=" === o ? 0 <= (" " + i + " ").indexOf(a) : a ? "!=" === o ? i !== a : "^=" === o ? 0 === i.indexOf(a) : "$=" === o ? i.substr(i.length - a.length) === a : "|=" === o && (i === a || i.substr(0, a.length + 1) === a + "-") : i && !1 !== r;
                },
                POS: function(e, t, n, r) {
                    var i = t[2], o = x.setFilters[i];
                    if (o) return o(e, n, t, r);
                }
            }
        }, T = x.match.POS, e = function(e, t) {
            return "\\" + (t - 0 + 1);
        };
        for (var t in x.match) x.match[t] = new RegExp(x.match[t].source + /(?![^\[]*\])(?![^\(]*\))/.source), 
        x.leftMatch[t] = new RegExp(/(^(?:.|\r|\n)*?)/.source + x.match[t].source.replace(/\\(\d+)/g, e));
        x.match.globalPOS = T;
        var r, h, i, m, g, w, N = function(e, t) {
            return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e;
        };
        try {
            Array.prototype.slice.call(_.documentElement.childNodes, 0)[0].nodeType;
        } catch (e) {
            N = function(e, t) {
                var n = 0, r = t || [];
                if ("[object Array]" === v.call(e)) Array.prototype.push.apply(r, e); else if ("number" == typeof e.length) for (var i = e.length; n < i; n++) r.push(e[n]); else for (;e[n]; n++) r.push(e[n]);
                return r;
            };
        }
        _.documentElement.compareDocumentPosition ? r = function(e, t) {
            return e === t ? (f = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
        } : (r = function(e, t) {
            if (e === t) return f = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, r, i = [], o = [], a = e.parentNode, s = t.parentNode, l = a;
            if (a === s) return h(e, t);
            if (!a) return -1;
            if (!s) return 1;
            for (;l; ) i.unshift(l), l = l.parentNode;
            for (l = s; l; ) o.unshift(l), l = l.parentNode;
            n = i.length, r = o.length;
            for (var u = 0; u < n && u < r; u++) if (i[u] !== o[u]) return h(i[u], o[u]);
            return u === n ? h(e, o[u], -1) : h(i[u], t, 1);
        }, h = function(e, t, n) {
            if (e === t) return n;
            for (var r = e.nextSibling; r; ) {
                if (r === t) return -1;
                r = r.nextSibling;
            }
            return 1;
        }), m = _.createElement("div"), g = "script" + new Date().getTime(), w = _.documentElement, 
        m.innerHTML = "<a name='" + g + "'/>", w.insertBefore(m, w.firstChild), _.getElementById(g) && (x.find.ID = function(e, t, n) {
            if (void 0 !== t.getElementById && !n) {
                var r = t.getElementById(e[1]);
                return r ? r.id === e[1] || void 0 !== r.getAttributeNode && r.getAttributeNode("id").nodeValue === e[1] ? [ r ] : M : [];
            }
        }, x.filter.ID = function(e, t) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return 1 === e.nodeType && n && n.nodeValue === t;
        }), w.removeChild(m), w = m = null, (i = _.createElement("div")).appendChild(_.createComment("")), 
        0 < i.getElementsByTagName("*").length && (x.find.TAG = function(e, t) {
            var n = t.getElementsByTagName(e[1]);
            if ("*" === e[1]) {
                for (var r = [], i = 0; n[i]; i++) 1 === n[i].nodeType && r.push(n[i]);
                n = r;
            }
            return n;
        }), i.innerHTML = "<a href='#'></a>", i.firstChild && void 0 !== i.firstChild.getAttribute && "#" !== i.firstChild.getAttribute("href") && (x.attrHandle.href = function(e) {
            return e.getAttribute("href", 2);
        }), i = null, _.querySelectorAll && function() {
            var f = b, e = _.createElement("div");
            if (e.innerHTML = "<p class='TEST'></p>", !e.querySelectorAll || 0 !== e.querySelectorAll(".TEST").length) {
                for (var t in b = function(e, t, n, r) {
                    if (t = t || _, !r && !b.isXML(t)) {
                        var i = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(e);
                        if (i && (1 === t.nodeType || 9 === t.nodeType)) {
                            if (i[1]) return N(t.getElementsByTagName(e), n);
                            if (i[2] && x.find.CLASS && t.getElementsByClassName) return N(t.getElementsByClassName(i[2]), n);
                        }
                        if (9 === t.nodeType) {
                            if ("body" === e && t.body) return N([ t.body ], n);
                            if (i && i[3]) {
                                var o = t.getElementById(i[3]);
                                if (!o || !o.parentNode) return N([], n);
                                if (o.id === i[3]) return N([ o ], n);
                            }
                            try {
                                return N(t.querySelectorAll(e), n);
                            } catch (e) {}
                        } else if (1 === t.nodeType && "object" !== t.nodeName.toLowerCase()) {
                            var a = t, s = t.getAttribute("id"), l = s || "__sizzle__", u = t.parentNode, c = /^\s*[+~]/.test(e);
                            s ? l = l.replace(/'/g, "\\$&") : t.setAttribute("id", l), c && u && (t = t.parentNode);
                            try {
                                if (!c || u) return N(t.querySelectorAll("[id='" + l + "'] " + e), n);
                            } catch (e) {} finally {
                                s || a.removeAttribute("id");
                            }
                        }
                    }
                    return f(e, t, n, r);
                }, f) b[t] = f[t];
                e = null;
            }
        }(), function() {
            var e = _.documentElement, r = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (r) {
                var i = !r.call(_.createElement("div"), "div"), o = !1;
                try {
                    r.call(_.documentElement, "[test!='']:sizzle");
                } catch (e) {
                    o = !0;
                }
                b.matchesSelector = function(e, t) {
                    if (t = t.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !b.isXML(e)) try {
                        if (o || !x.match.PSEUDO.test(t) && !/!=/.test(t)) {
                            var n = r.call(e, t);
                            if (n || !i || e.document && 11 !== e.document.nodeType) return n;
                        }
                    } catch (e) {}
                    return 0 < b(t, null, null, [ e ]).length;
                };
            }
        }(), function() {
            var e = _.createElement("div");
            if (e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length) {
                if (e.lastChild.className = "e", 1 === e.getElementsByClassName("e").length) return;
                x.order.splice(1, 0, "CLASS"), x.find.CLASS = function(e, t, n) {
                    if (void 0 !== t.getElementsByClassName && !n) return t.getElementsByClassName(e[1]);
                }, e = null;
            }
        }(), _.documentElement.contains ? b.contains = function(e, t) {
            return e !== t && (!e.contains || e.contains(t));
        } : _.documentElement.compareDocumentPosition ? b.contains = function(e, t) {
            return !!(16 & e.compareDocumentPosition(t));
        } : b.contains = function() {
            return !1;
        }, b.isXML = function(e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return !!t && "HTML" !== t.nodeName;
        };
        var C = function(e, t, n) {
            for (var r, i = [], o = "", a = t.nodeType ? [ t ] : t; r = x.match.PSEUDO.exec(e); ) o += r[0], 
            e = e.replace(x.match.PSEUDO, "");
            e = x.relative[e] ? e + "*" : e;
            for (var s = 0, l = a.length; s < l; s++) b(e, a[s], i, n);
            return b.filter(o, i);
        };
        b.attr = E.attr, b.selectors.attrMap = {}, E.find = b, E.expr = b.selectors, E.expr[":"] = E.expr.filters, 
        E.unique = b.uniqueSort, E.text = b.getText, E.isXMLDoc = b.isXML, E.contains = b.contains;
    }();
    var Z = /Until$/, ee = /^(?:parents|prevUntil|prevAll)/, te = /,/, ne = /^.[^:#\[\.,]*$/, re = Array.prototype.slice, ie = E.expr.match.globalPOS, oe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    E.fn.extend({
        find: function(e) {
            var t, n, r = this;
            if ("string" != typeof e) return E(e).filter(function() {
                for (t = 0, n = r.length; t < n; t++) if (E.contains(r[t], this)) return !0;
            });
            var i, o, a, s = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++) if (i = s.length, E.find(e, this[t], s), 
            0 < t) for (o = i; o < s.length; o++) for (a = 0; a < i; a++) if (s[a] === s[o]) {
                s.splice(o--, 1);
                break;
            }
            return s;
        },
        has: function(e) {
            var n = E(e);
            return this.filter(function() {
                for (var e = 0, t = n.length; e < t; e++) if (E.contains(this, n[e])) return !0;
            });
        },
        not: function(e) {
            return this.pushStack(p(this, e, !1), "not", e);
        },
        filter: function(e) {
            return this.pushStack(p(this, e, !0), "filter", e);
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? ie.test(e) ? 0 <= E(e, this.context).index(this[0]) : 0 < E.filter(e, this).length : 0 < this.filter(e).length);
        },
        closest: function(e, t) {
            var n, r, i = [], o = this[0];
            if (E.isArray(e)) {
                for (var a = 1; o && o.ownerDocument && o !== t; ) {
                    for (n = 0; n < e.length; n++) E(o).is(e[n]) && i.push({
                        selector: e[n],
                        elem: o,
                        level: a
                    });
                    o = o.parentNode, a++;
                }
                return i;
            }
            var s = ie.test(e) || "string" != typeof e ? E(e, t || this.context) : 0;
            for (n = 0, r = this.length; n < r; n++) for (o = this[n]; o; ) {
                if (s ? -1 < s.index(o) : E.find.matchesSelector(o, e)) {
                    i.push(o);
                    break;
                }
                if (!(o = o.parentNode) || !o.ownerDocument || o === t || 11 === o.nodeType) break;
            }
            return i = 1 < i.length ? E.unique(i) : i, this.pushStack(i, "closest", e);
        },
        index: function(e) {
            return e ? "string" == typeof e ? E.inArray(this[0], E(e)) : E.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
        },
        add: function(e, t) {
            var n = "string" == typeof e ? E(e, t) : E.makeArray(e && e.nodeType ? [ e ] : e), r = E.merge(this.get(), n);
            return this.pushStack(h(n[0]) || h(r[0]) ? r : E.unique(r));
        },
        andSelf: function() {
            return this.add(this.prevObject);
        }
    }), E.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return E.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return E.dir(e, "parentNode", n);
        },
        next: function(e) {
            return E.nth(e, 2, "nextSibling");
        },
        prev: function(e) {
            return E.nth(e, 2, "previousSibling");
        },
        nextAll: function(e) {
            return E.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return E.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return E.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return E.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return E.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return E.sibling(e.firstChild);
        },
        contents: function(e) {
            return E.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : E.makeArray(e.childNodes);
        }
    }, function(r, i) {
        E.fn[r] = function(e, t) {
            var n = E.map(this, i, e);
            return Z.test(r) || (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 
            n = 1 < this.length && !oe[r] ? E.unique(n) : n, (1 < this.length || te.test(t)) && ee.test(r) && (n = n.reverse()), 
            this.pushStack(n, r, re.call(arguments).join(","));
        };
    }), E.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? E.find.matchesSelector(t[0], e) ? [ t[0] ] : [] : E.find.matches(e, t);
        },
        dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (n === M || 1 !== i.nodeType || !E(i).is(n)); ) 1 === i.nodeType && r.push(i), 
            i = i[t];
            return r;
        },
        nth: function(e, t, n, r) {
            t = t || 1;
            for (var i = 0; e && (1 !== e.nodeType || ++i !== t); e = e[n]) ;
            return e;
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    });
    var ae = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", se = / jQuery\d+="(?:\d+|null)"/g, le = /^\s+/, ue = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ce = /<([\w:]+)/, fe = /<tbody/i, de = /<|&#?\w+;/, pe = /<(?:script|style)/i, he = /<(?:script|object|embed|option|style)/i, me = new RegExp("<(?:" + ae + ")[\\s/>]", "i"), ge = /checked\s*(?:[^=]|=\s*.checked.)/i, ye = /\/(java|ecma)script/i, ve = /^\s*<!(?:\[CDATA\[|\-\-)/, be = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        area: [ 1, "<map>", "</map>" ],
        _default: [ 0, "", "" ]
    }, xe = T(_);
    be.optgroup = be.option, be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, 
    be.th = be.td, E.support.htmlSerialize || (be._default = [ 1, "div<div>", "</div>" ]), 
    E.fn.extend({
        text: function(e) {
            return E.access(this, function(e) {
                return e === M ? E.text(this) : this.empty().append((this[0] && this[0].ownerDocument || _).createTextNode(e));
            }, null, e, arguments.length);
        },
        wrapAll: function(t) {
            if (E.isFunction(t)) return this.each(function(e) {
                E(this).wrapAll(t.call(this, e));
            });
            if (this[0]) {
                var e = E(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(n) {
            return E.isFunction(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e));
            }) : this.each(function() {
                var e = E(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
            });
        },
        wrap: function(t) {
            var n = E.isFunction(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                E.nodeName(this, "body") || E(this).replaceWith(this.childNodes);
            }).end();
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.appendChild(e);
            });
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.insertBefore(e, this.firstChild);
            });
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this);
            });
            if (arguments.length) {
                var e = E.clean(arguments);
                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments);
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this.nextSibling);
            });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, E.clean(arguments)), e;
            }
        },
        remove: function(e, t) {
            for (var n, r = 0; null != (n = this[r]); r++) e && !E.filter(e, [ n ]).length || (!t && 1 === n.nodeType && (E.cleanData(n.getElementsByTagName("*")), 
            E.cleanData([ n ])), n.parentNode && n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) for (1 === e.nodeType && E.cleanData(e.getElementsByTagName("*")); e.firstChild; ) e.removeChild(e.firstChild);
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return E.clone(this, e, t);
            });
        },
        html: function(e) {
            return E.access(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (e === M) return 1 === t.nodeType ? t.innerHTML.replace(se, "") : null;
                if ("string" == typeof e && !pe.test(e) && (E.support.leadingWhitespace || !le.test(e)) && !be[(ce.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = e.replace(ue, "<$1></$2>");
                    try {
                        for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(t.getElementsByTagName("*")), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function(r) {
            return this[0] && this[0].parentNode ? E.isFunction(r) ? this.each(function(e) {
                var t = E(this), n = t.html();
                t.replaceWith(r.call(this, e, n));
            }) : ("string" != typeof r && (r = E(r).detach()), this.each(function() {
                var e = this.nextSibling, t = this.parentNode;
                E(this).remove(), e ? E(e).before(r) : E(t).append(r);
            })) : this.length ? this.pushStack(E(E.isFunction(r) ? r() : r), "replaceWith", r) : this;
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(n, r, i) {
            var e, t, o, a, s, l = n[0], u = [];
            if (!E.support.checkClone && 3 === arguments.length && "string" == typeof l && ge.test(l)) return this.each(function() {
                E(this).domManip(n, r, i, !0);
            });
            if (E.isFunction(l)) return this.each(function(e) {
                var t = E(this);
                n[0] = l.call(this, e, r ? t.html() : M), t.domManip(n, r, i);
            });
            if (this[0]) {
                if (a = l && l.parentNode, t = 1 === (o = (e = E.support.parentNode && a && 11 === a.nodeType && a.childNodes.length === this.length ? {
                    fragment: a
                } : E.buildFragment(n, this, u)).fragment).childNodes.length ? o = o.firstChild : o.firstChild) {
                    r = r && E.nodeName(t, "tr");
                    for (var c = 0, f = this.length, d = f - 1; c < f; c++) i.call(r ? (s = this[c], 
                    E.nodeName(s, "table") ? s.getElementsByTagName("tbody")[0] || s.appendChild(s.ownerDocument.createElement("tbody")) : s) : this[c], e.cacheable || 1 < f && c < d ? E.clone(o, !0, !0) : o);
                }
                u.length && E.each(u, function(e, t) {
                    t.src ? E.ajax({
                        type: "GET",
                        global: !1,
                        url: t.src,
                        async: !1,
                        dataType: "script"
                    }) : E.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ve, "/*$0*/")), 
                    t.parentNode && t.parentNode.removeChild(t);
                });
            }
            return this;
        }
    }), E.buildFragment = function(e, t, n) {
        var r, i, o, a, s = e[0];
        return t && t[0] && (a = t[0].ownerDocument || t[0]), a.createDocumentFragment || (a = _), 
        1 === e.length && "string" == typeof s && s.length < 512 && a === _ && "<" === s.charAt(0) && !he.test(s) && (E.support.checkClone || !ge.test(s)) && (E.support.html5Clone || !me.test(s)) && (i = !0, 
        (o = E.fragments[s]) && 1 !== o && (r = o)), r || (r = a.createDocumentFragment(), 
        E.clean(e, a, r, n)), i && (E.fragments[s] = o ? r : 1), {
            fragment: r,
            cacheable: i
        };
    }, E.fragments = {}, E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(s, l) {
        E.fn[s] = function(e) {
            var t = [], n = E(e), r = 1 === this.length && this[0].parentNode;
            if (r && 11 === r.nodeType && 1 === r.childNodes.length && 1 === n.length) return n[l](this[0]), 
            this;
            for (var i = 0, o = n.length; i < o; i++) {
                var a = (0 < i ? this.clone(!0) : this).get();
                E(n[i])[l](a), t = t.concat(a);
            }
            return this.pushStack(t, s, n.selector);
        };
    }), E.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = E.support.html5Clone || E.isXMLDoc(e) || !me.test("<" + e.nodeName + ">") ? e.cloneNode(!0) : (a = e, 
            s = _.createElement("div"), xe.appendChild(s), s.innerHTML = a.outerHTML, s.firstChild);
            if (!(E.support.noCloneEvent && E.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (f(e, l), 
            r = u(e), i = u(l), o = 0; r[o]; ++o) i[o] && f(r[o], i[o]);
            if (t && (d(e, l), n)) for (r = u(e), i = u(l), o = 0; r[o]; ++o) d(r[o], i[o]);
            return r = i = null, l;
        },
        clean: function(e, t, n, r) {
            var i, o, a, s = [];
            void 0 === (t = t || _).createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || _);
            for (var l, u = 0; null != (l = e[u]); u++) if ("number" == typeof l && (l += ""), 
            l) {
                if ("string" == typeof l) if (de.test(l)) {
                    l = l.replace(ue, "<$1></$2>");
                    var c, f = (ce.exec(l) || [ "", "" ])[1].toLowerCase(), d = be[f] || be._default, p = d[0], h = t.createElement("div"), m = xe.childNodes;
                    for (t === _ ? xe.appendChild(h) : T(t).appendChild(h), h.innerHTML = d[1] + l + d[2]; p--; ) h = h.lastChild;
                    if (!E.support.tbody) {
                        var g = fe.test(l), y = "table" !== f || g ? "<table>" !== d[1] || g ? [] : h.childNodes : h.firstChild && h.firstChild.childNodes;
                        for (a = y.length - 1; 0 <= a; --a) E.nodeName(y[a], "tbody") && !y[a].childNodes.length && y[a].parentNode.removeChild(y[a]);
                    }
                    !E.support.leadingWhitespace && le.test(l) && h.insertBefore(t.createTextNode(le.exec(l)[0]), h.firstChild), 
                    l = h.childNodes, h && (h.parentNode.removeChild(h), 0 < m.length && ((c = m[m.length - 1]) && c.parentNode && c.parentNode.removeChild(c)));
                } else l = t.createTextNode(l);
                var v;
                if (!E.support.appendChecked) if (l[0] && "number" == typeof (v = l.length)) for (a = 0; a < v; a++) x(l[a]); else x(l);
                l.nodeType ? s.push(l) : s = E.merge(s, l);
            }
            if (n) for (i = function(e) {
                return !e.type || ye.test(e.type);
            }, u = 0; s[u]; u++) if (o = s[u], r && E.nodeName(o, "script") && (!o.type || ye.test(o.type))) r.push(o.parentNode ? o.parentNode.removeChild(o) : o); else {
                if (1 === o.nodeType) {
                    var b = E.grep(o.getElementsByTagName("script"), i);
                    s.splice.apply(s, [ u + 1, 0 ].concat(b));
                }
                n.appendChild(o);
            }
            return s;
        },
        cleanData: function(e) {
            for (var t, n, r, i = E.cache, o = E.event.special, a = E.support.deleteExpando, s = 0; null != (r = e[s]); s++) if ((!r.nodeName || !E.noData[r.nodeName.toLowerCase()]) && (n = r[E.expando])) {
                if ((t = i[n]) && t.events) {
                    for (var l in t.events) o[l] ? E.event.remove(r, l) : E.removeEvent(r, l, t.handle);
                    t.handle && (t.handle.elem = null);
                }
                a ? delete r[E.expando] : r.removeAttribute && r.removeAttribute(E.expando), delete i[n];
            }
        }
    });
    var Te, we, Ne, Ce = /alpha\([^)]*\)/i, Ee = /opacity=([^)]*)/, ke = /([A-Z]|^ms)/g, Se = /^[\-+]?(?:\d*\.)?\d+$/i, Ae = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, Le = /^([\-+])=([\-+.\de]+)/, De = /^margin/, je = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Fe = [ "Top", "Right", "Bottom", "Left" ];
    E.fn.css = function(e, t) {
        return E.access(this, function(e, t, n) {
            return n !== M ? E.style(e, t, n) : E.css(e, t);
        }, e, t, 1 < arguments.length);
    }, E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Te(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                    return e.style.opacity;
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: E.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a = E.camelCase(t), s = e.style, l = E.cssHooks[a];
                if (t = E.cssProps[a] || a, n === M) return l && "get" in l && (i = l.get(e, !1, r)) !== M ? i : s[t];
                if ("string" === (o = typeof n) && (i = Le.exec(n)) && (n = +(i[1] + 1) * +i[2] + parseFloat(E.css(e, t)), 
                o = "number"), null == n || "number" === o && isNaN(n)) return;
                if ("number" === o && !E.cssNumber[a] && (n += "px"), !(l && "set" in l && (n = l.set(e, n)) === M)) try {
                    s[t] = n;
                } catch (e) {}
            }
        },
        css: function(e, t, n) {
            var r, i;
            return t = E.camelCase(t), i = E.cssHooks[t], "cssFloat" === (t = E.cssProps[t] || t) && (t = "float"), 
            i && "get" in i && (r = i.get(e, !0, n)) !== M ? r : Te ? Te(e, t) : void 0;
        },
        swap: function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r;
        }
    }), E.curCSS = E.css, _.defaultView && _.defaultView.getComputedStyle && (we = function(e, t) {
        var n, r, i, o, a = e.style;
        return t = t.replace(ke, "-$1").toLowerCase(), (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && ("" === (n = i.getPropertyValue(t)) && !E.contains(e.ownerDocument.documentElement, e) && (n = E.style(e, t))), 
        !E.support.pixelMargin && i && De.test(t) && Ae.test(n) && (o = a.width, a.width = n, 
        n = i.width, a.width = o), n;
    }), _.documentElement.currentStyle && (Ne = function(e, t) {
        var n, r, i, o = e.currentStyle && e.currentStyle[t], a = e.style;
        return null == o && a && (i = a[t]) && (o = i), Ae.test(o) && (n = a.left, (r = e.runtimeStyle && e.runtimeStyle.left) && (e.runtimeStyle.left = e.currentStyle.left), 
        a.left = "fontSize" === t ? "1em" : o, o = a.pixelLeft + "px", a.left = n, r && (e.runtimeStyle.left = r)), 
        "" === o ? "auto" : o;
    }), Te = we || Ne, E.each([ "height", "width" ], function(e, r) {
        E.cssHooks[r] = {
            get: function(e, t, n) {
                if (t) return 0 !== e.offsetWidth ? i(e, r, n) : E.swap(e, je, function() {
                    return i(e, r, n);
                });
            },
            set: function(e, t) {
                return Se.test(t) ? t + "px" : t;
            }
        };
    }), E.support.opacity || (E.cssHooks.opacity = {
        get: function(e, t) {
            return Ee.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : "";
        },
        set: function(e, t) {
            var n = e.style, r = e.currentStyle, i = E.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            (n.zoom = 1) <= t && "" === E.trim(o.replace(Ce, "")) && (n.removeAttribute("filter"), 
            r && !r.filter) || (n.filter = Ce.test(o) ? o.replace(Ce, i) : o + " " + i);
        }
    }), E(function() {
        E.support.reliableMarginRight || (E.cssHooks.marginRight = {
            get: function(e, t) {
                return E.swap(e, {
                    display: "inline-block"
                }, function() {
                    return t ? Te(e, "margin-right") : e.style.marginRight;
                });
            }
        });
    }), E.expr && E.expr.filters && (E.expr.filters.hidden = function(e) {
        var t = e.offsetWidth, n = e.offsetHeight;
        return 0 === t && 0 === n || !E.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || E.css(e, "display"));
    }, E.expr.filters.visible = function(e) {
        return !E.expr.filters.hidden(e);
    }), E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        E.cssHooks[i + o] = {
            expand: function(e) {
                var t, n = "string" == typeof e ? e.split(" ") : [ e ], r = {};
                for (t = 0; t < 4; t++) r[i + Fe[t] + o] = n[t] || n[t - 2] || n[0];
                return r;
            }
        };
    });
    var Me, _e, He = /%20/g, Oe = /\[\]$/, Be = /\r?\n/g, Pe = /#.*$/, qe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, We = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Ie = /^(?:GET|HEAD)$/, $e = /^\/\//, Re = /\?/, Xe = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ze = /^(?:select|textarea)/i, Ve = /\s+/, Ue = /([?&])_=[^&]*/, Ge = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, Ye = E.fn.load, Je = {}, Qe = {}, Ke = [ "*/" ] + [ "*" ];
    try {
        Me = N.href;
    } catch (e) {
        (Me = _.createElement("a")).href = "", Me = Me.href;
    }
    _e = Ge.exec(Me.toLowerCase()) || [], E.fn.extend({
        load: function(e, t, r) {
            if ("string" != typeof e && Ye) return Ye.apply(this, arguments);
            if (!this.length) return this;
            var n = e.indexOf(" ");
            if (0 <= n) {
                var i = e.slice(n, e.length);
                e = e.slice(0, n);
            }
            var o = "GET";
            t && (E.isFunction(t) ? (r = t, t = M) : "object" == typeof t && (t = E.param(t, E.ajaxSettings.traditional), 
            o = "POST"));
            var a = this;
            return E.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: t,
                complete: function(e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done(function(e) {
                        n = e;
                    }), a.html(i ? E("<div>").append(n.replace(Xe, "")).find(i) : n)), r && a.each(r, [ n, t, e ]);
                }
            }), this;
        },
        serialize: function() {
            return E.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? E.makeArray(this.elements) : this;
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || ze.test(this.nodeName) || We.test(this.type));
            }).map(function(e, n) {
                var t = E(this).val();
                return null == t ? null : E.isArray(t) ? E.map(t, function(e, t) {
                    return {
                        name: n.name,
                        value: e.replace(Be, "\r\n")
                    };
                }) : {
                    name: n.name,
                    value: t.replace(Be, "\r\n")
                };
            }).get();
        }
    }), E.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), E.each([ "get", "post" ], function(e, i) {
        E[i] = function(e, t, n, r) {
            return E.isFunction(t) && (r = r || n, n = t, t = M), E.ajax({
                type: i,
                url: e,
                data: t,
                success: n,
                dataType: r
            });
        };
    }), E.extend({
        getScript: function(e, t) {
            return E.get(e, M, t, "script");
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json");
        },
        ajaxSetup: function(e, t) {
            return t ? n(e, E.ajaxSettings) : (t = e, e = E.ajaxSettings), n(e, t), e;
        },
        ajaxSettings: {
            url: Me,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(_e[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Ke
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": F.String,
                "text html": !0,
                "text json": E.parseJSON,
                "text xml": E.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: r(Je),
        ajaxTransport: r(Qe),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                if (2 !== w) {
                    w = 2, h && clearTimeout(h), p = M, d = r || "", N.readyState = 0 < e ? 4 : 0;
                    var i, o, a, s, l, u = t, c = n ? function(e, t, n) {
                        var r, i, o, a, s = e.contents, l = e.dataTypes, u = e.responseFields;
                        for (i in u) i in n && (t[u[i]] = n[i]);
                        for (;"*" === l[0]; ) l.shift(), r === M && (r = e.mimeType || t.getResponseHeader("content-type"));
                        if (r) for (i in s) if (s[i] && s[i].test(r)) {
                            l.unshift(i);
                            break;
                        }
                        if (l[0] in n) o = l[0]; else {
                            for (i in n) {
                                if (!l[0] || e.converters[i + " " + l[0]]) {
                                    o = i;
                                    break;
                                }
                                a || (a = i);
                            }
                            o = o || a;
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o];
                    }(g, N, n) : M;
                    if (200 <= e && e < 300 || 304 === e) if (g.ifModified && ((s = N.getResponseHeader("Last-Modified")) && (E.lastModified[f] = s), 
                    (l = N.getResponseHeader("Etag")) && (E.etag[f] = l)), 304 === e) u = "notmodified", 
                    i = !0; else try {
                        o = function(e, t) {
                            e.dataFilter && (t = e.dataFilter(t, e.dataType));
                            var n, r, i, o, a, s, l, u, c = e.dataTypes, f = {}, d = c.length, p = c[0];
                            for (n = 1; n < d; n++) {
                                if (1 === n) for (r in e.converters) "string" == typeof r && (f[r.toLowerCase()] = e.converters[r]);
                                if (o = p, "*" === (p = c[n])) p = o; else if ("*" !== o && o !== p) {
                                    if (!(s = f[a = o + " " + p] || f["* " + p])) for (l in u = M, f) if (((i = l.split(" "))[0] === o || "*" === i[0]) && (u = f[i[1] + " " + p])) {
                                        !0 === (l = f[l]) ? s = u : !0 === u && (s = l);
                                        break;
                                    }
                                    !s && !u && E.error("No conversion from " + a.replace(" ", " to ")), !0 !== s && (t = s ? s(t) : u(l(t)));
                                }
                            }
                            return t;
                        }(g, c), u = "success", i = !0;
                    } catch (e) {
                        u = "parsererror", a = e;
                    } else (a = u) && !e || (u = "error", e < 0 && (e = 0));
                    N.status = e, N.statusText = "" + (t || u), i ? b.resolveWith(y, [ o, u, N ]) : b.rejectWith(y, [ N, u, a ]), 
                    N.statusCode(T), T = M, m && v.trigger("ajax" + (i ? "Success" : "Error"), [ N, g, i ? o : a ]), 
                    x.fireWith(y, [ N, u ]), m && (v.trigger("ajaxComplete", [ N, g ]), --E.active || E.event.trigger("ajaxStop"));
                }
            }
            "object" == typeof e && (t = e, e = M), t = t || {};
            var f, d, r, p, h, i, m, o, g = E.ajaxSetup({}, t), y = g.context || g, v = y !== g && (y.nodeType || y instanceof E) ? E(y) : E.event, b = E.Deferred(), x = E.Callbacks("once memory"), T = g.statusCode || {}, a = {}, s = {}, w = 0, N = {
                readyState: 0,
                setRequestHeader: function(e, t) {
                    if (!w) {
                        var n = e.toLowerCase();
                        e = s[n] = s[n] || e, a[e] = t;
                    }
                    return this;
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? d : null;
                },
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!r) for (r = {}; t = qe.exec(d); ) r[t[1].toLowerCase()] = t[2];
                        t = r[e.toLowerCase()];
                    }
                    return t === M ? null : t;
                },
                overrideMimeType: function(e) {
                    return w || (g.mimeType = e), this;
                },
                abort: function(e) {
                    return e = e || "abort", p && p.abort(e), n(0, e), this;
                }
            };
            if (b.promise(N), N.success = N.done, N.error = N.fail, N.complete = x.add, N.statusCode = function(e) {
                var t;
                if (e) if (w < 2) for (t in e) T[t] = [ T[t], e[t] ]; else t = e[N.status], N.then(t, t);
                return this;
            }, g.url = ((e || g.url) + "").replace(Pe, "").replace($e, _e[1] + "//"), g.dataTypes = E.trim(g.dataType || "*").toLowerCase().split(Ve), 
            null == g.crossDomain && (i = Ge.exec(g.url.toLowerCase()), g.crossDomain = !(!i || i[1] == _e[1] && i[2] == _e[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (_e[3] || ("http:" === _e[1] ? 80 : 443)))), 
            g.data && g.processData && "string" != typeof g.data && (g.data = E.param(g.data, g.traditional)), 
            C(Je, g, t, N), 2 === w) return !1;
            if (m = g.global, g.type = g.type.toUpperCase(), g.hasContent = !Ie.test(g.type), 
            m && 0 == E.active++ && E.event.trigger("ajaxStart"), !g.hasContent && (g.data && (g.url += (Re.test(g.url) ? "&" : "?") + g.data, 
            delete g.data), f = g.url, !1 === g.cache)) {
                var l = E.now(), u = g.url.replace(Ue, "$1_=" + l);
                g.url = u + (u === g.url ? (Re.test(g.url) ? "&" : "?") + "_=" + l : "");
            }
            for (o in (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && N.setRequestHeader("Content-Type", g.contentType), 
            g.ifModified && (f = f || g.url, E.lastModified[f] && N.setRequestHeader("If-Modified-Since", E.lastModified[f]), 
            E.etag[f] && N.setRequestHeader("If-None-Match", E.etag[f])), N.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Ke + "; q=0.01" : "") : g.accepts["*"]), 
            g.headers) N.setRequestHeader(o, g.headers[o]);
            if (g.beforeSend && (!1 === g.beforeSend.call(y, N, g) || 2 === w)) return N.abort(), 
            !1;
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) N[o](g[o]);
            if (p = C(Qe, g, t, N)) {
                N.readyState = 1, m && v.trigger("ajaxSend", [ N, g ]), g.async && 0 < g.timeout && (h = setTimeout(function() {
                    N.abort("timeout");
                }, g.timeout));
                try {
                    w = 1, p.send(a, n);
                } catch (e) {
                    if (!(w < 2)) throw e;
                    n(-1, e);
                }
            } else n(-1, "No Transport");
            return N;
        },
        param: function(e, t) {
            var n = [], r = function(e, t) {
                t = E.isFunction(t) ? t() : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
            };
            if (t === M && (t = E.ajaxSettings.traditional), E.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
                r(this.name, this.value);
            }); else for (var i in e) o(i, e[i], t, r);
            return n.join("&").replace(He, "+");
        }
    }), E.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Ze = E.now(), et = /(\=)\?(&|$)|\?\?/i;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return E.expando + "_" + Ze++;
        }
    }), E.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r = "string" == typeof e.data && /^application\/x\-www\-form\-urlencoded/.test(e.contentType);
        if ("jsonp" === e.dataTypes[0] || !1 !== e.jsonp && (et.test(e.url) || r && et.test(e.data))) {
            var i, o = e.jsonpCallback = E.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a = F[o], s = e.url, l = e.data, u = "$1" + o + "$2";
            return !1 !== e.jsonp && (s = s.replace(et, u), e.url === s && (r && (l = l.replace(et, u)), 
            e.data === l && (s += (/\?/.test(s) ? "&" : "?") + e.jsonp + "=" + o))), e.url = s, 
            e.data = l, F[o] = function(e) {
                i = [ e ];
            }, n.always(function() {
                F[o] = a, i && E.isFunction(a) && F[o](i[0]);
            }), e.converters["script json"] = function() {
                return i || E.error(o + " was not called"), i[0];
            }, e.dataTypes[0] = "json", "script";
        }
    }), E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return E.globalEval(e), e;
            }
        }
    }), E.ajaxPrefilter("script", function(e) {
        e.cache === M && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), E.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var r, i = _.head || _.getElementsByTagName("head")[0] || _.documentElement;
            return {
                send: function(e, n) {
                    (r = _.createElement("script")).async = "async", t.scriptCharset && (r.charset = t.scriptCharset), 
                    r.src = t.url, r.onload = r.onreadystatechange = function(e, t) {
                        (t || !r.readyState || /loaded|complete/.test(r.readyState)) && (r.onload = r.onreadystatechange = null, 
                        i && r.parentNode && i.removeChild(r), r = M, t || n(200, "success"));
                    }, i.insertBefore(r, i.firstChild);
                },
                abort: function() {
                    r && r.onload(0, 1);
                }
            };
        }
    });
    var tt, nt, rt = !!F.ActiveXObject && function() {
        for (var e in tt) tt[e](0, 1);
    }, it = 0;
    E.ajaxSettings.xhr = F.ActiveXObject ? function() {
        return !this.isLocal && t() || function() {
            try {
                return new F.ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }();
    } : t, nt = E.ajaxSettings.xhr(), E.extend(E.support, {
        ajax: !!nt,
        cors: !!nt && "withCredentials" in nt
    }), E.support.ajax && E.ajaxTransport(function(c) {
        var f;
        if (!c.crossDomain || E.support.cors) return {
            send: function(e, s) {
                var l, t, u = c.xhr();
                if (c.username ? u.open(c.type, c.url, c.async, c.username, c.password) : u.open(c.type, c.url, c.async), 
                c.xhrFields) for (t in c.xhrFields) u[t] = c.xhrFields[t];
                c.mimeType && u.overrideMimeType && u.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (t in e) u.setRequestHeader(t, e[t]);
                } catch (e) {}
                u.send(c.hasContent && c.data || null), f = function(e, t) {
                    var n, r, i, o, a;
                    try {
                        if (f && (t || 4 === u.readyState)) if (f = M, l && (u.onreadystatechange = E.noop, 
                        rt && delete tt[l]), t) 4 !== u.readyState && u.abort(); else {
                            n = u.status, i = u.getAllResponseHeaders(), o = {}, (a = u.responseXML) && a.documentElement && (o.xml = a);
                            try {
                                o.text = u.responseText;
                            } catch (e) {}
                            try {
                                r = u.statusText;
                            } catch (e) {
                                r = "";
                            }
                            n || !c.isLocal || c.crossDomain ? 1223 === n && (n = 204) : n = o.text ? 200 : 404;
                        }
                    } catch (e) {
                        t || s(-1, e);
                    }
                    o && s(n, r, o, i);
                }, c.async && 4 !== u.readyState ? (l = ++it, rt && (tt || (tt = {}, E(F).unload(rt)), 
                tt[l] = f), u.onreadystatechange = f) : f();
            },
            abort: function() {
                f && f(0, 1);
            }
        };
    });
    var ot, at, st, lt, ut = {}, ct = /^(?:toggle|show|hide)$/, ft = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, dt = [ [ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ], [ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ], [ "opacity" ] ];
    E.fn.extend({
        show: function(e, t, n) {
            var r, i;
            if (e || 0 === e) return this.animate(s("show", 3), e, t, n);
            for (var o = 0, a = this.length; o < a; o++) (r = this[o]).style && (i = r.style.display, 
            !E._data(r, "olddisplay") && "none" === i && (i = r.style.display = ""), ("" === i && "none" === E.css(r, "display") || !E.contains(r.ownerDocument.documentElement, r)) && E._data(r, "olddisplay", g(r.nodeName)));
            for (o = 0; o < a; o++) (r = this[o]).style && ("" !== (i = r.style.display) && "none" !== i || (r.style.display = E._data(r, "olddisplay") || ""));
            return this;
        },
        hide: function(e, t, n) {
            if (e || 0 === e) return this.animate(s("hide", 3), e, t, n);
            for (var r, i, o = 0, a = this.length; o < a; o++) (r = this[o]).style && ("none" !== (i = E.css(r, "display")) && !E._data(r, "olddisplay") && E._data(r, "olddisplay", i));
            for (o = 0; o < a; o++) this[o].style && (this[o].style.display = "none");
            return this;
        },
        _toggle: E.fn.toggle,
        toggle: function(t, e, n) {
            var r = "boolean" == typeof t;
            return E.isFunction(t) && E.isFunction(e) ? this._toggle.apply(this, arguments) : null == t || r ? this.each(function() {
                var e = r ? t : E(this).is(":hidden");
                E(this)[e ? "show" : "hide"]();
            }) : this.animate(s("toggle", 3), t, e, n), this;
        },
        fadeTo: function(e, t, n, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(h, e, t, n) {
            function r() {
                !1 === m.queue && E._mark(this);
                var e, t, n, r, i, o, a, s, l, u, c, f = E.extend({}, m), d = 1 === this.nodeType, p = d && E(this).is(":hidden");
                for (n in f.animatedProperties = {}, h) if (n !== (e = E.camelCase(n)) && (h[e] = h[n], 
                delete h[n]), (i = E.cssHooks[e]) && "expand" in i) for (n in o = i.expand(h[e]), 
                delete h[e], o) n in h || (h[n] = o[n]);
                for (e in h) {
                    if (t = h[e], E.isArray(t) ? (f.animatedProperties[e] = t[1], t = h[e] = t[0]) : f.animatedProperties[e] = f.specialEasing && f.specialEasing[e] || f.easing || "swing", 
                    "hide" === t && p || "show" === t && !p) return f.complete.call(this);
                    d && ("height" === e || "width" === e) && (f.overflow = [ this.style.overflow, this.style.overflowX, this.style.overflowY ], 
                    "inline" === E.css(this, "display") && "none" === E.css(this, "float") && (E.support.inlineBlockNeedsLayout && "inline" !== g(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"));
                }
                for (n in null != f.overflow && (this.style.overflow = "hidden"), h) r = new E.fx(this, f, n), 
                t = h[n], ct.test(t) ? (c = E._data(this, "toggle" + n) || ("toggle" === t ? p ? "show" : "hide" : 0)) ? (E._data(this, "toggle" + n, "show" === c ? "hide" : "show"), 
                r[c]()) : r[t]() : (a = ft.exec(t), s = r.cur(), a ? (l = parseFloat(a[2]), "px" !== (u = a[3] || (E.cssNumber[n] ? "" : "px")) && (E.style(this, n, (l || 1) + u), 
                s = (l || 1) / r.cur() * s, E.style(this, n, s + u)), a[1] && (l = ("-=" === a[1] ? -1 : 1) * l + s), 
                r.custom(s, l, u)) : r.custom(s, t, ""));
                return !0;
            }
            var m = E.speed(e, t, n);
            return E.isEmptyObject(h) ? this.each(m.complete, [ !1 ]) : (h = E.extend({}, h), 
            !1 === m.queue ? this.each(r) : this.queue(m.queue, r));
        },
        stop: function(o, e, a) {
            return "string" != typeof o && (a = e, e = o, o = M), e && !1 !== o && this.queue(o || "fx", []), 
            this.each(function() {
                function e(e, t, n) {
                    var r = t[n];
                    E.removeData(e, n, !0), r.stop(a);
                }
                var t, n = !1, r = E.timers, i = E._data(this);
                if (a || E._unmark(!0, this), null == o) for (t in i) i[t] && i[t].stop && t.indexOf(".run") === t.length - 4 && e(this, i, t); else i[t = o + ".run"] && i[t].stop && e(this, i, t);
                for (t = r.length; t--; ) r[t].elem === this && (null == o || r[t].queue === o) && (a ? r[t](!0) : r[t].saveState(), 
                n = !0, r.splice(t, 1));
                (!a || !n) && E.dequeue(this, o);
            });
        }
    }), E.each({
        slideDown: s("show", 1),
        slideUp: s("hide", 1),
        slideToggle: s("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        E.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n);
        };
    }), E.extend({
        speed: function(e, t, n) {
            var r = e && "object" == typeof e ? E.extend({}, e) : {
                complete: n || !n && t || E.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !E.isFunction(t) && t
            };
            return r.duration = E.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in E.fx.speeds ? E.fx.speeds[r.duration] : E.fx.speeds._default, 
            null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function(e) {
                E.isFunction(r.old) && r.old.call(this), r.queue ? E.dequeue(this, r.queue) : !1 !== e && E._unmark(this);
            }, r;
        },
        easing: {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return -Math.cos(e * Math.PI) / 2 + .5;
            }
        },
        timers: [],
        fx: function(e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {};
        }
    }), E.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (E.fx.step[this.prop] || E.fx.step._default)(this);
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var e, t = E.css(this.elem, this.prop);
            return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e;
        },
        custom: function(e, t, n) {
            function r(e) {
                return i.step(e);
            }
            var i = this, o = E.fx;
            this.startTime = lt || l(), this.end = t, this.now = this.start = e, this.pos = this.state = 0, 
            this.unit = n || this.unit || (E.cssNumber[this.prop] ? "" : "px"), r.queue = this.options.queue, 
            r.elem = this.elem, r.saveState = function() {
                E._data(i.elem, "fxshow" + i.prop) === M && (i.options.hide ? E._data(i.elem, "fxshow" + i.prop, i.start) : i.options.show && E._data(i.elem, "fxshow" + i.prop, i.end));
            }, r() && E.timers.push(r) && !st && (st = setInterval(o.tick, o.interval));
        },
        show: function() {
            var e = E._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || E.style(this.elem, this.prop), this.options.show = !0, 
            e !== M ? this.custom(this.cur(), e) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), 
            E(this.elem).show();
        },
        hide: function() {
            this.options.orig[this.prop] = E._data(this.elem, "fxshow" + this.prop) || E.style(this.elem, this.prop), 
            this.options.hide = !0, this.custom(this.cur(), 0);
        },
        step: function(e) {
            var t, n, r, i = lt || l(), o = !0, a = this.elem, s = this.options;
            if (e || i >= s.duration + this.startTime) {
                for (t in this.now = this.end, this.pos = this.state = 1, this.update(), s.animatedProperties[this.prop] = !0, 
                s.animatedProperties) !0 !== s.animatedProperties[t] && (o = !1);
                if (o) {
                    if (null != s.overflow && !E.support.shrinkWrapBlocks && E.each([ "", "X", "Y" ], function(e, t) {
                        a.style["overflow" + t] = s.overflow[e];
                    }), s.hide && E(a).hide(), s.hide || s.show) for (t in s.animatedProperties) E.style(a, t, s.orig[t]), 
                    E.removeData(a, "fxshow" + t, !0), E.removeData(a, "toggle" + t, !0);
                    (r = s.complete) && (s.complete = !1, r.call(a));
                }
                return !1;
            }
            return s.duration == 1 / 0 ? this.now = i : (n = i - this.startTime, this.state = n / s.duration, 
            this.pos = E.easing[s.animatedProperties[this.prop]](this.state, n, 0, 1, s.duration), 
            this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0;
        }
    }, E.extend(E.fx, {
        tick: function() {
            for (var e, t = E.timers, n = 0; n < t.length; n++) !(e = t[n])() && t[n] === e && t.splice(n--, 1);
            t.length || E.fx.stop();
        },
        interval: 13,
        stop: function() {
            clearInterval(st), st = null;
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                E.style(e.elem, "opacity", e.now);
            },
            _default: function(e) {
                e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now;
            }
        }
    }), E.each(dt.concat.apply([], dt), function(e, t) {
        t.indexOf("margin") && (E.fx.step[t] = function(e) {
            E.style(e.elem, t, Math.max(0, e.now) + e.unit);
        });
    }), E.expr && E.expr.filters && (E.expr.filters.animated = function(t) {
        return E.grep(E.timers, function(e) {
            return t === e.elem;
        }).length;
    });
    var pt, ht = /^t(?:able|d|h)$/i, mt = /^(?:body|html)$/i;
    pt = "getBoundingClientRect" in _.documentElement ? function(e, t, n, r) {
        try {
            r = e.getBoundingClientRect();
        } catch (e) {}
        if (!r || !E.contains(n, e)) return r ? {
            top: r.top,
            left: r.left
        } : {
            top: 0,
            left: 0
        };
        var i = t.body, o = c(t), a = n.clientTop || i.clientTop || 0, s = n.clientLeft || i.clientLeft || 0, l = o.pageYOffset || E.support.boxModel && n.scrollTop || i.scrollTop, u = o.pageXOffset || E.support.boxModel && n.scrollLeft || i.scrollLeft;
        return {
            top: r.top + l - a,
            left: r.left + u - s
        };
    } : function(e, t, n) {
        for (var r, i = e.offsetParent, o = t.body, a = t.defaultView, s = a ? a.getComputedStyle(e, null) : e.currentStyle, l = e.offsetTop, u = e.offsetLeft; (e = e.parentNode) && e !== o && e !== n && (!E.support.fixedPosition || "fixed" !== s.position); ) r = a ? a.getComputedStyle(e, null) : e.currentStyle, 
        l -= e.scrollTop, u -= e.scrollLeft, e === i && (l += e.offsetTop, u += e.offsetLeft, 
        E.support.doesNotAddBorder && (!E.support.doesAddBorderForTableAndCells || !ht.test(e.nodeName)) && (l += parseFloat(r.borderTopWidth) || 0, 
        u += parseFloat(r.borderLeftWidth) || 0), i, i = e.offsetParent), E.support.subtractsBorderForOverflowNotVisible && "visible" !== r.overflow && (l += parseFloat(r.borderTopWidth) || 0, 
        u += parseFloat(r.borderLeftWidth) || 0), s = r;
        return "relative" !== s.position && "static" !== s.position || (l += o.offsetTop, 
        u += o.offsetLeft), E.support.fixedPosition && "fixed" === s.position && (l += Math.max(n.scrollTop, o.scrollTop), 
        u += Math.max(n.scrollLeft, o.scrollLeft)), {
            top: l,
            left: u
        };
    }, E.fn.offset = function(t) {
        if (arguments.length) return t === M ? this : this.each(function(e) {
            E.offset.setOffset(this, t, e);
        });
        var e = this[0], n = e && e.ownerDocument;
        return n ? e === n.body ? E.offset.bodyOffset(e) : pt(e, n, n.documentElement) : null;
    }, E.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop, n = e.offsetLeft;
            return E.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(E.css(e, "marginTop")) || 0, 
            n += parseFloat(E.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            };
        },
        setOffset: function(e, t, n) {
            var r = E.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = E(e), s = a.offset(), l = E.css(e, "top"), u = E.css(e, "left"), c = {}, f = {};
            ("absolute" === r || "fixed" === r) && -1 < E.inArray("auto", [ l, u ]) ? (i = (f = a.position()).top, 
            o = f.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), E.isFunction(t) && (t = t.call(e, n, s)), 
            null != t.top && (c.top = t.top - s.top + i), null != t.left && (c.left = t.left - s.left + o), 
            "using" in t ? t.using.call(e, c) : a.css(c);
        }
    }, E.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var e = this[0], t = this.offsetParent(), n = this.offset(), r = mt.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            } : t.offset();
            return n.top -= parseFloat(E.css(e, "marginTop")) || 0, n.left -= parseFloat(E.css(e, "marginLeft")) || 0, 
            r.top += parseFloat(E.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(E.css(t[0], "borderLeftWidth")) || 0, 
            {
                top: n.top - r.top,
                left: n.left - r.left
            };
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || _.body; e && !mt.test(e.nodeName) && "static" === E.css(e, "position"); ) e = e.offsetParent;
                return e;
            });
        }
    }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = /Y/.test(i);
        E.fn[t] = function(e) {
            return E.access(this, function(e, t, n) {
                var r = c(e);
                if (n === M) return r ? i in r ? r[i] : E.support.boxModel && r.document.documentElement[t] || r.document.body[t] : e[t];
                r ? r.scrollTo(o ? E(r).scrollLeft() : n, o ? n : E(r).scrollTop()) : e[t] = n;
            }, t, e, arguments.length, null);
        };
    }), E.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        var s = "client" + e, l = "scroll" + e, u = "offset" + e;
        E.fn["inner" + e] = function() {
            var e = this[0];
            return e ? e.style ? parseFloat(E.css(e, n, "padding")) : this[n]() : null;
        }, E.fn["outer" + e] = function(e) {
            var t = this[0];
            return t ? t.style ? parseFloat(E.css(t, n, e ? "margin" : "border")) : this[n]() : null;
        }, E.fn[n] = function(e) {
            return E.access(this, function(e, t, n) {
                var r, i, o, a;
                return E.isWindow(e) ? (i = (r = e.document).documentElement[s], E.support.boxModel && i || r.body && r.body[s] || i) : 9 === e.nodeType ? (r = e.documentElement)[s] >= r[l] ? r[s] : Math.max(e.body[l], r[l], e.body[u], r[u]) : n === M ? (o = E.css(e, t), 
                a = parseFloat(o), E.isNumeric(a) ? a : o) : void E(e).css(t, n);
            }, n, e, arguments.length, null);
        };
    }), F.jQuery = F.$ = E, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return E;
    });
}(window);