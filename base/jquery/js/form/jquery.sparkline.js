/* jquery.sparkline 2.1.1 - http://omnipotent.net/jquery.sparkline/ 
** Licensed under the New BSD License - see above site for details */
(function(a) {
    typeof define == "function" && define.amd ? define([ "jquery" ], a) : a(jQuery);
})(function(a) {
    "use strict";
    var b = {}, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I = 0;
    c = function() {
        return {
            common: {
                type: "line",
                lineColor: "#00f",
                fillColor: "#cdf",
                defaultPixelsPerValue: 3,
                width: "auto",
                height: "auto",
                composite: !1,
                tagValuesAttribute: "values",
                tagOptionsPrefix: "spark",
                enableTagOptions: !1,
                enableHighlight: !0,
                highlightLighten: 1.4,
                tooltipSkipNull: !0,
                tooltipPrefix: "",
                tooltipSuffix: "",
                disableHiddenCheck: !1,
                numberFormatter: !1,
                numberDigitGroupCount: 3,
                numberDigitGroupSep: ",",
                numberDecimalMark: ".",
                disableTooltips: !1,
                disableInteraction: !1
            },
            line: {
                spotColor: "#f80",
                highlightSpotColor: "#5f5",
                highlightLineColor: "#f22",
                spotRadius: 1.5,
                minSpotColor: "#f80",
                maxSpotColor: "#f80",
                lineWidth: 1,
                normalRangeMin: undefined,
                normalRangeMax: undefined,
                normalRangeColor: "#ccc",
                drawNormalOnTop: !1,
                chartRangeMin: undefined,
                chartRangeMax: undefined,
                chartRangeMinX: undefined,
                chartRangeMaxX: undefined,
                tooltipFormat: new e('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
            },
            bar: {
                barColor: "#3366cc",
                negBarColor: "#f44",
                stackedBarColor: [ "#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099" ],
                zeroColor: undefined,
                nullColor: undefined,
                zeroAxis: !0,
                barWidth: 4,
                barSpacing: 1,
                chartRangeMax: undefined,
                chartRangeMin: undefined,
                chartRangeClip: !1,
                colorMap: undefined,
                tooltipFormat: new e('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
            },
            tristate: {
                barWidth: 4,
                barSpacing: 1,
                posBarColor: "#6f6",
                negBarColor: "#f44",
                zeroBarColor: "#999",
                colorMap: {},
                tooltipFormat: new e('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
                tooltipValueLookups: {
                    map: {
                        "-1": "Loss",
                        0: "Draw",
                        1: "Win"
                    }
                }
            },
            discrete: {
                lineHeight: "auto",
                thresholdColor: undefined,
                thresholdValue: 0,
                chartRangeMax: undefined,
                chartRangeMin: undefined,
                chartRangeClip: !1,
                tooltipFormat: new e("{{prefix}}{{value}}{{suffix}}")
            },
            bullet: {
                targetColor: "#f33",
                targetWidth: 3,
                performanceColor: "#33f",
                rangeColors: [ "#d3dafe", "#a8b6ff", "#7f94ff" ],
                base: undefined,
                tooltipFormat: new e("{{fieldkey:fields}} - {{value}}"),
                tooltipValueLookups: {
                    fields: {
                        r: "Range",
                        p: "Performance",
                        t: "Target"
                    }
                }
            },
            pie: {
                offset: 0,
                sliceColors: [ "#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099" ],
                borderWidth: 0,
                borderColor: "#000",
                tooltipFormat: new e('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
            },
            box: {
                raw: !1,
                boxLineColor: "#000",
                boxFillColor: "#cdf",
                whiskerColor: "#000",
                outlierLineColor: "#333",
                outlierFillColor: "#fff",
                medianColor: "#f00",
                showOutliers: !0,
                outlierIQR: 1.5,
                spotRadius: 1.5,
                target: undefined,
                targetColor: "#4a2",
                chartRangeMax: undefined,
                chartRangeMin: undefined,
                tooltipFormat: new e("{{field:fields}}: {{value}}"),
                tooltipFormatFieldlistKey: "field",
                tooltipValueLookups: {
                    fields: {
                        lq: "Lower Quartile",
                        med: "Median",
                        uq: "Upper Quartile",
                        lo: "Left Outlier",
                        ro: "Right Outlier",
                        lw: "Left Whisker",
                        rw: "Right Whisker"
                    }
                }
            }
        };
    }, B = '.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}', 
    d = function() {
        var b, c;
        return b = function() {
            this.init.apply(this, arguments);
        }, arguments.length > 1 ? (arguments[0] ? (b.prototype = a.extend(new arguments[0](), arguments[arguments.length - 1]), 
        b._super = arguments[0].prototype) : b.prototype = arguments[arguments.length - 1], 
        arguments.length > 2 && (c = Array.prototype.slice.call(arguments, 1, -1), c.unshift(b.prototype), 
        a.extend.apply(a, c))) : b.prototype = arguments[0], b.prototype.cls = b, b;
    }, a.SPFormatClass = e = d({
        fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
        precre: /(\w+)\.(\d+)/,
        init: function(a, b) {
            this.format = a, this.fclass = b;
        },
        render: function(a, b, c) {
            var d = this, e = a, f, g, h, i, j;
            return this.format.replace(this.fre, function() {
                var a;
                return g = arguments[1], h = arguments[3], f = d.precre.exec(g), f ? (j = f[2], 
                g = f[1]) : j = !1, i = e[g], i === undefined ? "" : h && b && b[h] ? (a = b[h], 
                a.get ? b[h].get(i) || i : b[h][i] || i) : (k(i) && (c.get("numberFormatter") ? i = c.get("numberFormatter")(i) : i = p(i, j, c.get("numberDigitGroupCount"), c.get("numberDigitGroupSep"), c.get("numberDecimalMark"))), 
                i);
            });
        }
    }), a.spformat = function(a, b) {
        return new e(a, b);
    }, f = function(a, b, c) {
        return a < b ? b : a > c ? c : a;
    }, g = function(a, b) {
        var c;
        return b === 2 ? (c = Math.floor(a.length / 2), a.length % 2 ? a[c] : (a[c - 1] + a[c]) / 2) : a.length % 2 ? (c = (a.length * b + b) / 4, 
        c % 1 ? (a[Math.floor(c)] + a[Math.floor(c) - 1]) / 2 : a[c - 1]) : (c = (a.length * b + 2) / 4, 
        c % 1 ? (a[Math.floor(c)] + a[Math.floor(c) - 1]) / 2 : a[c - 1]);
    }, h = function(a) {
        var b;
        switch (a) {
          case "undefined":
            a = undefined;
            break;

          case "null":
            a = null;
            break;

          case "true":
            a = !0;
            break;

          case "false":
            a = !1;
            break;

          default:
            b = parseFloat(a), a == b && (a = b);
        }
        return a;
    }, i = function(a) {
        var b, c = [];
        for (b = a.length; b--; ) c[b] = h(a[b]);
        return c;
    }, j = function(a, b) {
        var c, d, e = [];
        for (c = 0, d = a.length; c < d; c++) a[c] !== b && e.push(a[c]);
        return e;
    }, k = function(a) {
        return !isNaN(parseFloat(a)) && isFinite(a);
    }, p = function(b, c, d, e, f) {
        var g, h;
        b = (c === !1 ? parseFloat(b).toString() : b.toFixed(c)).split(""), g = (g = a.inArray(".", b)) < 0 ? b.length : g, 
        g < b.length && (b[g] = f);
        for (h = g - d; h > 0; h -= d) b.splice(h, 0, e);
        return b.join("");
    }, l = function(a, b, c) {
        var d;
        for (d = b.length; d--; ) {
            if (c && b[d] === null) continue;
            if (b[d] !== a) return !1;
        }
        return !0;
    }, m = function(a) {
        var b = 0, c;
        for (c = a.length; c--; ) b += typeof a[c] == "number" ? a[c] : 0;
        return b;
    }, o = function(b) {
        return a.isArray(b) ? b : [ b ];
    }, n = function(a) {
        var b;
        document.createStyleSheet ? document.createStyleSheet().cssText = a : (b = document.createElement("style"), 
        b.type = "text/css", document.getElementsByTagName("head")[0].appendChild(b), b[typeof document.body.style.WebkitAppearance == "string" ? "innerText" : "innerHTML"] = a);
    }, a.fn.simpledraw = function(b, c, d, e) {
        var f, g;
        if (d && (f = this.data("_jqs_vcanvas"))) return f;
        b === undefined && (b = a(this).innerWidth()), c === undefined && (c = a(this).innerHeight());
        if (a.fn.sparkline.hasCanvas) f = new F(b, c, this, e); else {
            if (!a.fn.sparkline.hasVML) return !1;
            f = new G(b, c, this);
        }
        return g = a(this).data("_jqs_mhandler"), g && g.registerCanvas(f), f;
    }, a.fn.cleardraw = function() {
        var a = this.data("_jqs_vcanvas");
        a && a.reset();
    }, a.RangeMapClass = q = d({
        init: function(a) {
            var b, c, d = [];
            for (b in a) a.hasOwnProperty(b) && typeof b == "string" && b.indexOf(":") > -1 && (c = b.split(":"), 
            c[0] = c[0].length === 0 ? -Infinity : parseFloat(c[0]), c[1] = c[1].length === 0 ? Infinity : parseFloat(c[1]), 
            c[2] = a[b], d.push(c));
            this.map = a, this.rangelist = d || !1;
        },
        get: function(a) {
            var b = this.rangelist, c, d, e;
            if ((e = this.map[a]) !== undefined) return e;
            if (b) for (c = b.length; c--; ) {
                d = b[c];
                if (d[0] <= a && d[1] >= a) return d[2];
            }
            return undefined;
        }
    }), a.range_map = function(a) {
        return new q(a);
    }, r = d({
        init: function(b, c) {
            var d = a(b);
            this.$el = d, this.options = c, this.currentPageX = 0, this.currentPageY = 0, this.el = b, 
            this.splist = [], this.tooltip = null, this.over = !1, this.displayTooltips = !c.get("disableTooltips"), 
            this.highlightEnabled = !c.get("disableHighlight");
        },
        registerSparkline: function(a) {
            this.splist.push(a), this.over && this.updateDisplay();
        },
        registerCanvas: function(b) {
            var c = a(b.canvas);
            this.canvas = b, this.$canvas = c, c.mouseenter(a.proxy(this.mouseenter, this)), 
            c.mouseleave(a.proxy(this.mouseleave, this)), c.click(a.proxy(this.mouseclick, this));
        },
        reset: function(a) {
            this.splist = [], this.tooltip && a && (this.tooltip.remove(), this.tooltip = undefined);
        },
        mouseclick: function(b) {
            var c = a.Event("sparklineClick");
            c.originalEvent = b, c.sparklines = this.splist, this.$el.trigger(c);
        },
        mouseenter: function(b) {
            a(document.body).unbind("mousemove.jqs"), a(document.body).bind("mousemove.jqs", a.proxy(this.mousemove, this)), 
            this.over = !0, this.currentPageX = b.pageX, this.currentPageY = b.pageY, this.currentEl = b.target, 
            !this.tooltip && this.displayTooltips && (this.tooltip = new s(this.options), this.tooltip.updatePosition(b.pageX, b.pageY)), 
            this.updateDisplay();
        },
        mouseleave: function() {
            a(document.body).unbind("mousemove.jqs");
            var b = this.splist, c = b.length, d = !1, e, f;
            this.over = !1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null);
            for (f = 0; f < c; f++) e = b[f], e.clearRegionHighlight() && (d = !0);
            d && this.canvas.render();
        },
        mousemove: function(a) {
            this.currentPageX = a.pageX, this.currentPageY = a.pageY, this.currentEl = a.target, 
            this.tooltip && this.tooltip.updatePosition(a.pageX, a.pageY), this.updateDisplay();
        },
        updateDisplay: function() {
            var b = this.splist, c = b.length, d = !1, e = this.$canvas.offset(), f = this.currentPageX - e.left, g = this.currentPageY - e.top, h, i, j, k, l;
            if (!this.over) return;
            for (j = 0; j < c; j++) i = b[j], k = i.setRegionHighlight(this.currentEl, f, g), 
            k && (d = !0);
            if (d) {
                l = a.Event("sparklineRegionChange"), l.sparklines = this.splist, this.$el.trigger(l);
                if (this.tooltip) {
                    h = "";
                    for (j = 0; j < c; j++) i = b[j], h += i.getCurrentRegionTooltip();
                    this.tooltip.setContent(h);
                }
                this.disableHighlight || this.canvas.render();
            }
            k === null && this.mouseleave();
        }
    }), s = d({
        sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
        init: function(b) {
            var c = b.get("tooltipClassname", "jqstooltip"), d = this.sizeStyle, e;
            this.container = b.get("tooltipContainer") || document.body, this.tooltipOffsetX = b.get("tooltipOffsetX", 10), 
            this.tooltipOffsetY = b.get("tooltipOffsetY", 12), a("#jqssizetip").remove(), a("#jqstooltip").remove(), 
            this.sizetip = a("<div/>", {
                id: "jqssizetip",
                style: d,
                class: c
            }), this.tooltip = a("<div/>", {
                id: "jqstooltip",
                class: c
            }).appendTo(this.container), e = this.tooltip.offset(), this.offsetLeft = e.left, 
            this.offsetTop = e.top, this.hidden = !0, a(window).unbind("resize.jqs scroll.jqs"), 
            a(window).bind("resize.jqs scroll.jqs", a.proxy(this.updateWindowDims, this)), this.updateWindowDims();
        },
        updateWindowDims: function() {
            this.scrollTop = a(window).scrollTop(), this.scrollLeft = a(window).scrollLeft(), 
            this.scrollRight = this.scrollLeft + a(window).width(), this.updatePosition();
        },
        getSize: function(a) {
            this.sizetip.html(a).appendTo(this.container), this.width = this.sizetip.width() + 1, 
            this.height = this.sizetip.height(), this.sizetip.remove();
        },
        setContent: function(a) {
            if (!a) {
                this.tooltip.css("visibility", "hidden"), this.hidden = !0;
                return;
            }
            this.getSize(a), this.tooltip.html(a).css({
                width: this.width,
                height: this.height,
                visibility: "visible"
            }), this.hidden && (this.hidden = !1, this.updatePosition());
        },
        updatePosition: function(a, b) {
            if (a === undefined) {
                if (this.mousex === undefined) return;
                a = this.mousex - this.offsetLeft, b = this.mousey - this.offsetTop;
            } else this.mousex = a -= this.offsetLeft, this.mousey = b -= this.offsetTop;
            if (!this.height || !this.width || this.hidden) return;
            b -= this.height + this.tooltipOffsetY, a += this.tooltipOffsetX, b < this.scrollTop && (b = this.scrollTop), 
            a < this.scrollLeft ? a = this.scrollLeft : a + this.width > this.scrollRight && (a = this.scrollRight - this.width), 
            this.tooltip.css({
                left: a,
                top: b
            });
        },
        remove: function() {
            this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = undefined, 
            a(window).unbind("resize.jqs scroll.jqs");
        }
    }), C = function() {
        n(B);
    }, a(C), H = [], a.fn.sparkline = function(b, c) {
        return this.each(function() {
            var d = new a.fn.sparkline.options(this, c), e = a(this), f, g;
            f = function() {
                var c, f, g, h, i, j, k;
                if (b === "html" || b === undefined) {
                    k = this.getAttribute(d.get("tagValuesAttribute"));
                    if (k === undefined || k === null) k = e.html();
                    c = k.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",");
                } else c = b;
                f = d.get("width") === "auto" ? c.length * d.get("defaultPixelsPerValue") : d.get("width");
                if (d.get("height") === "auto") {
                    if (!d.get("composite") || !a.data(this, "_jqs_vcanvas")) h = document.createElement("span"), 
                    h.innerHTML = "a", e.html(h), g = a(h).innerHeight() || a(h).height(), a(h).remove(), 
                    h = null;
                } else g = d.get("height");
                d.get("disableInteraction") ? i = !1 : (i = a.data(this, "_jqs_mhandler"), i ? d.get("composite") || i.reset() : (i = new r(this, d), 
                a.data(this, "_jqs_mhandler", i)));
                if (d.get("composite") && !a.data(this, "_jqs_vcanvas")) {
                    a.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), 
                    a.data(this, "_jqs_errnotify", !0));
                    return;
                }
                j = new (a.fn.sparkline[d.get("type")])(this, c, d, f, g), j.render(), i && i.registerSparkline(j);
            };
            if (a(this).html() && !d.get("disableHiddenCheck") && a(this).is(":hidden") || a.fn.jquery < "1.3.0" && a(this).parents().is(":hidden") || !a(this).parents("body").length) {
                if (!d.get("composite") && a.data(this, "_jqs_pending")) for (g = H.length; g; g--) H[g - 1][0] == this && H.splice(g - 1, 1);
                H.push([ this, f ]), a.data(this, "_jqs_pending", !0);
            } else f.call(this);
        });
    }, a.fn.sparkline.defaults = c(), a.sparkline_display_visible = function() {
        var b, c, d, e = [];
        for (c = 0, d = H.length; c < d; c++) b = H[c][0], a(b).is(":visible") && !a(b).parents().is(":hidden") ? (H[c][1].call(b), 
        a.data(H[c][0], "_jqs_pending", !1), e.push(c)) : !a(b).closest("html").length && !a.data(b, "_jqs_pending") && (a.data(H[c][0], "_jqs_pending", !1), 
        e.push(c));
        for (c = e.length; c; c--) H.splice(e[c - 1], 1);
    }, a.fn.sparkline.options = d({
        init: function(c, d) {
            var e, f, g, h;
            this.userOptions = d = d || {}, this.tag = c, this.tagValCache = {}, f = a.fn.sparkline.defaults, 
            g = f.common, this.tagOptionsPrefix = d.enableTagOptions && (d.tagOptionsPrefix || g.tagOptionsPrefix), 
            h = this.getTagSetting("type"), h === b ? e = f[d.type || g.type] : e = f[h], this.mergedOptions = a.extend({}, g, e, d);
        },
        getTagSetting: function(a) {
            var c = this.tagOptionsPrefix, d, e, f, g;
            if (c === !1 || c === undefined) return b;
            if (this.tagValCache.hasOwnProperty(a)) d = this.tagValCache.key; else {
                d = this.tag.getAttribute(c + a);
                if (d === undefined || d === null) d = b; else if (d.substr(0, 1) === "[") {
                    d = d.substr(1, d.length - 2).split(",");
                    for (e = d.length; e--; ) d[e] = h(d[e].replace(/(^\s*)|(\s*$)/g, ""));
                } else if (d.substr(0, 1) === "{") {
                    f = d.substr(1, d.length - 2).split(","), d = {};
                    for (e = f.length; e--; ) g = f[e].split(":", 2), d[g[0].replace(/(^\s*)|(\s*$)/g, "")] = h(g[1].replace(/(^\s*)|(\s*$)/g, ""));
                } else d = h(d);
                this.tagValCache.key = d;
            }
            return d;
        },
        get: function(a, c) {
            var d = this.getTagSetting(a), e;
            return d !== b ? d : (e = this.mergedOptions[a]) === undefined ? c : e;
        }
    }), a.fn.sparkline._base = d({
        disabled: !1,
        init: function(b, c, d, e, f) {
            this.el = b, this.$el = a(b), this.values = c, this.options = d, this.width = e, 
            this.height = f, this.currentRegion = undefined;
        },
        initTarget: function() {
            var a = !this.options.get("disableInteraction");
            (this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), a)) ? (this.canvasWidth = this.target.pixelWidth, 
            this.canvasHeight = this.target.pixelHeight) : this.disabled = !0;
        },
        render: function() {
            return this.disabled ? (this.el.innerHTML = "", !1) : !0;
        },
        getRegion: function(a, b) {},
        setRegionHighlight: function(a, b, c) {
            var d = this.currentRegion, e = !this.options.get("disableHighlight"), f;
            return b > this.canvasWidth || c > this.canvasHeight || b < 0 || c < 0 ? null : (f = this.getRegion(a, b, c), 
            d !== f ? (d !== undefined && e && this.removeHighlight(), this.currentRegion = f, 
            f !== undefined && e && this.renderHighlight(), !0) : !1);
        },
        clearRegionHighlight: function() {
            return this.currentRegion !== undefined ? (this.removeHighlight(), this.currentRegion = undefined, 
            !0) : !1;
        },
        renderHighlight: function() {
            this.changeHighlight(!0);
        },
        removeHighlight: function() {
            this.changeHighlight(!1);
        },
        changeHighlight: function(a) {},
        getCurrentRegionTooltip: function() {
            var b = this.options, c = "", d = [], f, g, h, i, j, k, l, m, n, o, p, q, r, s;
            if (this.currentRegion === undefined) return "";
            f = this.getCurrentRegionFields(), p = b.get("tooltipFormatter");
            if (p) return p(this, b, f);
            b.get("tooltipChartTitle") && (c += '<div class="jqs jqstitle">' + b.get("tooltipChartTitle") + "</div>\n"), 
            g = this.options.get("tooltipFormat");
            if (!g) return "";
            a.isArray(g) || (g = [ g ]), a.isArray(f) || (f = [ f ]), l = this.options.get("tooltipFormatFieldlist"), 
            m = this.options.get("tooltipFormatFieldlistKey");
            if (l && m) {
                n = [];
                for (k = f.length; k--; ) o = f[k][m], (s = a.inArray(o, l)) != -1 && (n[s] = f[k]);
                f = n;
            }
            h = g.length, r = f.length;
            for (k = 0; k < h; k++) {
                q = g[k], typeof q == "string" && (q = new e(q)), i = q.fclass || "jqsfield";
                for (s = 0; s < r; s++) if (!f[s].isNull || !b.get("tooltipSkipNull")) a.extend(f[s], {
                    prefix: b.get("tooltipPrefix"),
                    suffix: b.get("tooltipSuffix")
                }), j = q.render(f[s], b.get("tooltipValueLookups"), b), d.push('<div class="' + i + '">' + j + "</div>");
            }
            return d.length ? c + d.join("\n") : "";
        },
        getCurrentRegionFields: function() {},
        calcHighlightColor: function(a, b) {
            var c = b.get("highlightColor"), d = b.get("highlightLighten"), e, g, h, i;
            if (c) return c;
            if (d) {
                e = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a);
                if (e) {
                    h = [], g = a.length === 4 ? 16 : 1;
                    for (i = 0; i < 3; i++) h[i] = f(Math.round(parseInt(e[i + 1], 16) * g * d), 0, 255);
                    return "rgb(" + h.join(",") + ")";
                }
            }
            return a;
        }
    }), t = {
        changeHighlight: function(b) {
            var c = this.currentRegion, d = this.target, e = this.regionShapes[c], f;
            e && (f = this.renderRegion(c, b), a.isArray(f) || a.isArray(e) ? (d.replaceWithShapes(e, f), 
            this.regionShapes[c] = a.map(f, function(a) {
                return a.id;
            })) : (d.replaceWithShape(e, f), this.regionShapes[c] = f.id));
        },
        render: function() {
            var b = this.values, c = this.target, d = this.regionShapes, e, f, g, h;
            if (!this.cls._super.render.call(this)) return;
            for (g = b.length; g--; ) {
                e = this.renderRegion(g);
                if (e) if (a.isArray(e)) {
                    f = [];
                    for (h = e.length; h--; ) e[h].append(), f.push(e[h].id);
                    d[g] = f;
                } else e.append(), d[g] = e.id; else d[g] = null;
            }
            c.render();
        }
    }, a.fn.sparkline.line = u = d(a.fn.sparkline._base, {
        type: "line",
        init: function(a, b, c, d, e) {
            u._super.init.call(this, a, b, c, d, e), this.vertices = [], this.regionMap = [], 
            this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, 
            this.lastShapeId = null, this.initTarget();
        },
        getRegion: function(a, b, c) {
            var d, e = this.regionMap;
            for (d = e.length; d--; ) if (e[d] !== null && b >= e[d][0] && b <= e[d][1]) return e[d][2];
            return undefined;
        },
        getCurrentRegionFields: function() {
            var a = this.currentRegion;
            return {
                isNull: this.yvalues[a] === null,
                x: this.xvalues[a],
                y: this.yvalues[a],
                color: this.options.get("lineColor"),
                fillColor: this.options.get("fillColor"),
                offset: a
            };
        },
        renderHighlight: function() {
            var a = this.currentRegion, b = this.target, c = this.vertices[a], d = this.options, e = d.get("spotRadius"), f = d.get("highlightSpotColor"), g = d.get("highlightLineColor"), h, i;
            if (!c) return;
            e && f && (h = b.drawCircle(c[0], c[1], e, undefined, f), this.highlightSpotId = h.id, 
            b.insertAfterShape(this.lastShapeId, h)), g && (i = b.drawLine(c[0], this.canvasTop, c[0], this.canvasTop + this.canvasHeight, g), 
            this.highlightLineId = i.id, b.insertAfterShape(this.lastShapeId, i));
        },
        removeHighlight: function() {
            var a = this.target;
            this.highlightSpotId && (a.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), 
            this.highlightLineId && (a.removeShapeId(this.highlightLineId), this.highlightLineId = null);
        },
        scanValues: function() {
            var a = this.values, b = a.length, c = this.xvalues, d = this.yvalues, e = this.yminmax, f, g, h, i, j;
            for (f = 0; f < b; f++) g = a[f], h = typeof a[f] == "string", i = typeof a[f] == "object" && a[f] instanceof Array, 
            j = h && a[f].split(":"), h && j.length === 2 ? (c.push(Number(j[0])), d.push(Number(j[1])), 
            e.push(Number(j[1]))) : i ? (c.push(g[0]), d.push(g[1]), e.push(g[1])) : (c.push(f), 
            a[f] === null || a[f] === "null" ? d.push(null) : (d.push(Number(g)), e.push(Number(g))));
            this.options.get("xvalues") && (c = this.options.get("xvalues")), this.maxy = this.maxyorg = Math.max.apply(Math, e), 
            this.miny = this.minyorg = Math.min.apply(Math, e), this.maxx = Math.max.apply(Math, c), 
            this.minx = Math.min.apply(Math, c), this.xvalues = c, this.yvalues = d, this.yminmax = e;
        },
        processRangeOptions: function() {
            var a = this.options, b = a.get("normalRangeMin"), c = a.get("normalRangeMax");
            b !== undefined && (b < this.miny && (this.miny = b), c > this.maxy && (this.maxy = c)), 
            a.get("chartRangeMin") !== undefined && (a.get("chartRangeClip") || a.get("chartRangeMin") < this.miny) && (this.miny = a.get("chartRangeMin")), 
            a.get("chartRangeMax") !== undefined && (a.get("chartRangeClip") || a.get("chartRangeMax") > this.maxy) && (this.maxy = a.get("chartRangeMax")), 
            a.get("chartRangeMinX") !== undefined && (a.get("chartRangeClipX") || a.get("chartRangeMinX") < this.minx) && (this.minx = a.get("chartRangeMinX")), 
            a.get("chartRangeMaxX") !== undefined && (a.get("chartRangeClipX") || a.get("chartRangeMaxX") > this.maxx) && (this.maxx = a.get("chartRangeMaxX"));
        },
        drawNormalRange: function(a, b, c, d, e) {
            var f = this.options.get("normalRangeMin"), g = this.options.get("normalRangeMax"), h = b + Math.round(c - c * ((g - this.miny) / e)), i = Math.round(c * (g - f) / e);
            this.target.drawRect(a, h, d, i, undefined, this.options.get("normalRangeColor")).append();
        },
        render: function() {
            var b = this.options, c = this.target, d = this.canvasWidth, e = this.canvasHeight, f = this.vertices, g = b.get("spotRadius"), h = this.regionMap, i, j, k, l, m, n, o, p, r, s, t, v, w, x, y, z, A, B, C, D, E, F, G, H, I;
            if (!u._super.render.call(this)) return;
            this.scanValues(), this.processRangeOptions(), G = this.xvalues, H = this.yvalues;
            if (!this.yminmax.length || this.yvalues.length < 2) return;
            l = m = 0, i = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx, j = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny, 
            k = this.yvalues.length - 1, g && (d < g * 4 || e < g * 4) && (g = 0);
            if (g) {
                E = b.get("highlightSpotColor") && !b.get("disableInteraction");
                if (E || b.get("minSpotColor") || b.get("spotColor") && H[k] === this.miny) e -= Math.ceil(g);
                if (E || b.get("maxSpotColor") || b.get("spotColor") && H[k] === this.maxy) e -= Math.ceil(g), 
                l += Math.ceil(g);
                if (E || (b.get("minSpotColor") || b.get("maxSpotColor")) && (H[0] === this.miny || H[0] === this.maxy)) m += Math.ceil(g), 
                d -= Math.ceil(g);
                if (E || b.get("spotColor") || b.get("minSpotColor") || b.get("maxSpotColor") && (H[k] === this.miny || H[k] === this.maxy)) d -= Math.ceil(g);
            }
            e--, b.get("normalRangeMin") !== undefined && !b.get("drawNormalOnTop") && this.drawNormalRange(m, l, e, d, j), 
            o = [], p = [ o ], x = y = null, z = H.length;
            for (I = 0; I < z; I++) r = G[I], t = G[I + 1], s = H[I], v = m + Math.round((r - this.minx) * (d / i)), 
            w = I < z - 1 ? m + Math.round((t - this.minx) * (d / i)) : d, y = v + (w - v) / 2, 
            h[I] = [ x || 0, y, I ], x = y, s === null ? I && (H[I - 1] !== null && (o = [], 
            p.push(o)), f.push(null)) : (s < this.miny && (s = this.miny), s > this.maxy && (s = this.maxy), 
            o.length || o.push([ v, l + e ]), n = [ v, l + Math.round(e - e * ((s - this.miny) / j)) ], 
            o.push(n), f.push(n));
            A = [], B = [], C = p.length;
            for (I = 0; I < C; I++) o = p[I], o.length && (b.get("fillColor") && (o.push([ o[o.length - 1][0], l + e ]), 
            B.push(o.slice(0)), o.pop()), o.length > 2 && (o[0] = [ o[0][0], o[1][1] ]), A.push(o));
            C = B.length;
            for (I = 0; I < C; I++) c.drawShape(B[I], b.get("fillColor"), b.get("fillColor")).append();
            b.get("normalRangeMin") !== undefined && b.get("drawNormalOnTop") && this.drawNormalRange(m, l, e, d, j), 
            C = A.length;
            for (I = 0; I < C; I++) c.drawShape(A[I], b.get("lineColor"), undefined, b.get("lineWidth")).append();
            if (g && b.get("valueSpots")) {
                D = b.get("valueSpots"), D.get === undefined && (D = new q(D));
                for (I = 0; I < z; I++) F = D.get(H[I]), F && c.drawCircle(m + Math.round((G[I] - this.minx) * (d / i)), l + Math.round(e - e * ((H[I] - this.miny) / j)), g, undefined, F).append();
            }
            g && b.get("spotColor") && H[k] !== null && c.drawCircle(m + Math.round((G[G.length - 1] - this.minx) * (d / i)), l + Math.round(e - e * ((H[k] - this.miny) / j)), g, undefined, b.get("spotColor")).append(), 
            this.maxy !== this.minyorg && (g && b.get("minSpotColor") && (r = G[a.inArray(this.minyorg, H)], 
            c.drawCircle(m + Math.round((r - this.minx) * (d / i)), l + Math.round(e - e * ((this.minyorg - this.miny) / j)), g, undefined, b.get("minSpotColor")).append()), 
            g && b.get("maxSpotColor") && (r = G[a.inArray(this.maxyorg, H)], c.drawCircle(m + Math.round((r - this.minx) * (d / i)), l + Math.round(e - e * ((this.maxyorg - this.miny) / j)), g, undefined, b.get("maxSpotColor")).append())), 
            this.lastShapeId = c.getLastShapeId(), this.canvasTop = l, c.render();
        }
    }), a.fn.sparkline.bar = v = d(a.fn.sparkline._base, t, {
        type: "bar",
        init: function(b, c, d, e, g) {
            var k = parseInt(d.get("barWidth"), 10), l = parseInt(d.get("barSpacing"), 10), m = d.get("chartRangeMin"), n = d.get("chartRangeMax"), o = d.get("chartRangeClip"), p = Infinity, r = -Infinity, s, t, u, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P;
            v._super.init.call(this, b, c, d, e, g);
            for (y = 0, z = c.length; y < z; y++) {
                M = c[y], s = typeof M == "string" && M.indexOf(":") > -1;
                if (s || a.isArray(M)) H = !0, s && (M = c[y] = i(M.split(":"))), M = j(M, null), 
                t = Math.min.apply(Math, M), u = Math.max.apply(Math, M), t < p && (p = t), u > r && (r = u);
            }
            this.stacked = H, this.regionShapes = {}, this.barWidth = k, this.barSpacing = l, 
            this.totalBarWidth = k + l, this.width = e = c.length * k + (c.length - 1) * l, 
            this.initTarget(), o && (F = m === undefined ? -Infinity : m, G = n === undefined ? Infinity : n), 
            x = [], w = H ? [] : x;
            var Q = [], R = [];
            for (y = 0, z = c.length; y < z; y++) if (H) {
                I = c[y], c[y] = L = [], Q[y] = 0, w[y] = R[y] = 0;
                for (J = 0, K = I.length; J < K; J++) M = L[J] = o ? f(I[J], F, G) : I[J], M !== null && (M > 0 && (Q[y] += M), 
                p < 0 && r > 0 ? M < 0 ? R[y] += Math.abs(M) : w[y] += M : w[y] += Math.abs(M - (M < 0 ? r : p)), 
                x.push(M));
            } else M = o ? f(c[y], F, G) : c[y], M = c[y] = h(M), M !== null && x.push(M);
            this.max = E = Math.max.apply(Math, x), this.min = D = Math.min.apply(Math, x), 
            this.stackMax = r = H ? Math.max.apply(Math, Q) : E, this.stackMin = p = H ? Math.min.apply(Math, x) : D, 
            d.get("chartRangeMin") !== undefined && (d.get("chartRangeClip") || d.get("chartRangeMin") < D) && (D = d.get("chartRangeMin")), 
            d.get("chartRangeMax") !== undefined && (d.get("chartRangeClip") || d.get("chartRangeMax") > E) && (E = d.get("chartRangeMax")), 
            this.zeroAxis = B = d.get("zeroAxis", !0), D <= 0 && E >= 0 && B ? C = 0 : B == 0 ? C = D : D > 0 ? C = D : C = E, 
            this.xaxisOffset = C, A = H ? Math.max.apply(Math, w) + Math.max.apply(Math, R) : E - D, 
            this.canvasHeightEf = B && D < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1, 
            D < C ? (O = H && E >= 0 ? r : E, N = (O - C) / A * this.canvasHeight, N !== Math.ceil(N) && (this.canvasHeightEf -= 2, 
            N = Math.ceil(N))) : N = this.canvasHeight, this.yoffset = N, a.isArray(d.get("colorMap")) ? (this.colorMapByIndex = d.get("colorMap"), 
            this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = d.get("colorMap"), 
            this.colorMapByValue && this.colorMapByValue.get === undefined && (this.colorMapByValue = new q(this.colorMapByValue))), 
            this.range = A;
        },
        getRegion: function(a, b, c) {
            var d = Math.floor(b / this.totalBarWidth);
            return d < 0 || d >= this.values.length ? undefined : d;
        },
        getCurrentRegionFields: function() {
            var a = this.currentRegion, b = o(this.values[a]), c = [], d, e;
            for (e = b.length; e--; ) d = b[e], c.push({
                isNull: d === null,
                value: d,
                color: this.calcColor(e, d, a),
                offset: a
            });
            return c;
        },
        calcColor: function(b, c, d) {
            var e = this.colorMapByIndex, f = this.colorMapByValue, g = this.options, h, i;
            return this.stacked ? h = g.get("stackedBarColor") : h = c < 0 ? g.get("negBarColor") : g.get("barColor"), 
            c === 0 && g.get("zeroColor") !== undefined && (h = g.get("zeroColor")), f && (i = f.get(c)) ? h = i : e && e.length > d && (h = e[d]), 
            a.isArray(h) ? h[b % h.length] : h;
        },
        renderRegion: function(b, c) {
            var d = this.values[b], e = this.options, f = this.xaxisOffset, g = [], h = this.range, i = this.stacked, j = this.target, k = b * this.totalBarWidth, m = this.canvasHeightEf, n = this.yoffset, o, p, q, r, s, t, u, v, w, x;
            d = a.isArray(d) ? d : [ d ], u = d.length, v = d[0], r = l(null, d), x = l(f, d, !0);
            if (r) return e.get("nullColor") ? (q = c ? e.get("nullColor") : this.calcHighlightColor(e.get("nullColor"), e), 
            o = n > 0 ? n - 1 : n, j.drawRect(k, o, this.barWidth - 1, 0, q, q)) : undefined;
            s = n;
            for (t = 0; t < u; t++) {
                v = d[t];
                if (i && v === f) {
                    if (!x || w) continue;
                    w = !0;
                }
                h > 0 ? p = Math.floor(m * (Math.abs(v - f) / h)) + 1 : p = 1, v < f || v === f && n === 0 ? (o = s, 
                s += p) : (o = n - p, n -= p), q = this.calcColor(t, v, b), c && (q = this.calcHighlightColor(q, e)), 
                g.push(j.drawRect(k, o, this.barWidth - 1, p - 1, q, q));
            }
            return g.length === 1 ? g[0] : g;
        }
    }), a.fn.sparkline.tristate = w = d(a.fn.sparkline._base, t, {
        type: "tristate",
        init: function(b, c, d, e, f) {
            var g = parseInt(d.get("barWidth"), 10), h = parseInt(d.get("barSpacing"), 10);
            w._super.init.call(this, b, c, d, e, f), this.regionShapes = {}, this.barWidth = g, 
            this.barSpacing = h, this.totalBarWidth = g + h, this.values = a.map(c, Number), 
            this.width = e = c.length * g + (c.length - 1) * h, a.isArray(d.get("colorMap")) ? (this.colorMapByIndex = d.get("colorMap"), 
            this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = d.get("colorMap"), 
            this.colorMapByValue && this.colorMapByValue.get === undefined && (this.colorMapByValue = new q(this.colorMapByValue))), 
            this.initTarget();
        },
        getRegion: function(a, b, c) {
            return Math.floor(b / this.totalBarWidth);
        },
        getCurrentRegionFields: function() {
            var a = this.currentRegion;
            return {
                isNull: this.values[a] === undefined,
                value: this.values[a],
                color: this.calcColor(this.values[a], a),
                offset: a
            };
        },
        calcColor: function(a, b) {
            var c = this.values, d = this.options, e = this.colorMapByIndex, f = this.colorMapByValue, g, h;
            return f && (h = f.get(a)) ? g = h : e && e.length > b ? g = e[b] : c[b] < 0 ? g = d.get("negBarColor") : c[b] > 0 ? g = d.get("posBarColor") : g = d.get("zeroBarColor"), 
            g;
        },
        renderRegion: function(a, b) {
            var c = this.values, d = this.options, e = this.target, f, g, h, i, j, k;
            f = e.pixelHeight, h = Math.round(f / 2), i = a * this.totalBarWidth, c[a] < 0 ? (j = h, 
            g = h - 1) : c[a] > 0 ? (j = 0, g = h - 1) : (j = h - 1, g = 2), k = this.calcColor(c[a], a);
            if (k === null) return;
            return b && (k = this.calcHighlightColor(k, d)), e.drawRect(i, j, this.barWidth - 1, g - 1, k, k);
        }
    }), a.fn.sparkline.discrete = x = d(a.fn.sparkline._base, t, {
        type: "discrete",
        init: function(b, c, d, e, f) {
            x._super.init.call(this, b, c, d, e, f), this.regionShapes = {}, this.values = c = a.map(c, Number), 
            this.min = Math.min.apply(Math, c), this.max = Math.max.apply(Math, c), this.range = this.max - this.min, 
            this.width = e = d.get("width") === "auto" ? c.length * 2 : this.width, this.interval = Math.floor(e / c.length), 
            this.itemWidth = e / c.length, d.get("chartRangeMin") !== undefined && (d.get("chartRangeClip") || d.get("chartRangeMin") < this.min) && (this.min = d.get("chartRangeMin")), 
            d.get("chartRangeMax") !== undefined && (d.get("chartRangeClip") || d.get("chartRangeMax") > this.max) && (this.max = d.get("chartRangeMax")), 
            this.initTarget(), this.target && (this.lineHeight = d.get("lineHeight") === "auto" ? Math.round(this.canvasHeight * .3) : d.get("lineHeight"));
        },
        getRegion: function(a, b, c) {
            return Math.floor(b / this.itemWidth);
        },
        getCurrentRegionFields: function() {
            var a = this.currentRegion;
            return {
                isNull: this.values[a] === undefined,
                value: this.values[a],
                offset: a
            };
        },
        renderRegion: function(a, b) {
            var c = this.values, d = this.options, e = this.min, g = this.max, h = this.range, i = this.interval, j = this.target, k = this.canvasHeight, l = this.lineHeight, m = k - l, n, o, p, q;
            return o = f(c[a], e, g), q = a * i, n = Math.round(m - m * ((o - e) / h)), p = d.get("thresholdColor") && o < d.get("thresholdValue") ? d.get("thresholdColor") : d.get("lineColor"), 
            b && (p = this.calcHighlightColor(p, d)), j.drawLine(q, n, q, n + l, p);
        }
    }), a.fn.sparkline.bullet = y = d(a.fn.sparkline._base, {
        type: "bullet",
        init: function(a, b, c, d, e) {
            var f, g, h;
            y._super.init.call(this, a, b, c, d, e), this.values = b = i(b), h = b.slice(), 
            h[0] = h[0] === null ? h[2] : h[0], h[1] = b[1] === null ? h[2] : h[1], f = Math.min.apply(Math, b), 
            g = Math.max.apply(Math, b), c.get("base") === undefined ? f = f < 0 ? f : 0 : f = c.get("base"), 
            this.min = f, this.max = g, this.range = g - f, this.shapes = {}, this.valueShapes = {}, 
            this.regiondata = {}, this.width = d = c.get("width") === "auto" ? "4.0em" : d, 
            this.target = this.$el.simpledraw(d, e, c.get("composite")), b.length || (this.disabled = !0), 
            this.initTarget();
        },
        getRegion: function(a, b, c) {
            var d = this.target.getShapeAt(a, b, c);
            return d !== undefined && this.shapes[d] !== undefined ? this.shapes[d] : undefined;
        },
        getCurrentRegionFields: function() {
            var a = this.currentRegion;
            return {
                fieldkey: a.substr(0, 1),
                value: this.values[a.substr(1)],
                region: a
            };
        },
        changeHighlight: function(a) {
            var b = this.currentRegion, c = this.valueShapes[b], d;
            delete this.shapes[c];
            switch (b.substr(0, 1)) {
              case "r":
                d = this.renderRange(b.substr(1), a);
                break;

              case "p":
                d = this.renderPerformance(a);
                break;

              case "t":
                d = this.renderTarget(a);
            }
            this.valueShapes[b] = d.id, this.shapes[d.id] = b, this.target.replaceWithShape(c, d);
        },
        renderRange: function(a, b) {
            var c = this.values[a], d = Math.round(this.canvasWidth * ((c - this.min) / this.range)), e = this.options.get("rangeColors")[a - 2];
            return b && (e = this.calcHighlightColor(e, this.options)), this.target.drawRect(0, 0, d - 1, this.canvasHeight - 1, e, e);
        },
        renderPerformance: function(a) {
            var b = this.values[1], c = Math.round(this.canvasWidth * ((b - this.min) / this.range)), d = this.options.get("performanceColor");
            return a && (d = this.calcHighlightColor(d, this.options)), this.target.drawRect(0, Math.round(this.canvasHeight * .3), c - 1, Math.round(this.canvasHeight * .4) - 1, d, d);
        },
        renderTarget: function(a) {
            var b = this.values[0], c = Math.round(this.canvasWidth * ((b - this.min) / this.range) - this.options.get("targetWidth") / 2), d = Math.round(this.canvasHeight * .1), e = this.canvasHeight - d * 2, f = this.options.get("targetColor");
            return a && (f = this.calcHighlightColor(f, this.options)), this.target.drawRect(c, d, this.options.get("targetWidth") - 1, e - 1, f, f);
        },
        render: function() {
            var a = this.values.length, b = this.target, c, d;
            if (!y._super.render.call(this)) return;
            for (c = 2; c < a; c++) d = this.renderRange(c).append(), this.shapes[d.id] = "r" + c, 
            this.valueShapes["r" + c] = d.id;
            this.values[1] !== null && (d = this.renderPerformance().append(), this.shapes[d.id] = "p1", 
            this.valueShapes.p1 = d.id), this.values[0] !== null && (d = this.renderTarget().append(), 
            this.shapes[d.id] = "t0", this.valueShapes.t0 = d.id), b.render();
        }
    }), a.fn.sparkline.pie = z = d(a.fn.sparkline._base, {
        type: "pie",
        init: function(b, c, d, e, f) {
            var g = 0, h;
            z._super.init.call(this, b, c, d, e, f), this.shapes = {}, this.valueShapes = {}, 
            this.values = c = a.map(c, Number), d.get("width") === "auto" && (this.width = this.height);
            if (c.length > 0) for (h = c.length; h--; ) g += c[h];
            this.total = g, this.initTarget(), this.radius = Math.floor(Math.min(this.canvasWidth, this.canvasHeight) / 2);
        },
        getRegion: function(a, b, c) {
            var d = this.target.getShapeAt(a, b, c);
            return d !== undefined && this.shapes[d] !== undefined ? this.shapes[d] : undefined;
        },
        getCurrentRegionFields: function() {
            var a = this.currentRegion;
            return {
                isNull: this.values[a] === undefined,
                value: this.values[a],
                percent: this.values[a] / this.total * 100,
                color: this.options.get("sliceColors")[a % this.options.get("sliceColors").length],
                offset: a
            };
        },
        changeHighlight: function(a) {
            var b = this.currentRegion, c = this.renderSlice(b, a), d = this.valueShapes[b];
            delete this.shapes[d], this.target.replaceWithShape(d, c), this.valueShapes[b] = c.id, 
            this.shapes[c.id] = b;
        },
        renderSlice: function(a, b) {
            var c = this.target, d = this.options, e = this.radius, f = d.get("borderWidth"), g = d.get("offset"), h = 2 * Math.PI, i = this.values, j = this.total, k = g ? 2 * Math.PI * (g / 360) : 0, l, m, n, o, p;
            o = i.length;
            for (n = 0; n < o; n++) {
                l = k, m = k, j > 0 && (m = k + h * (i[n] / j));
                if (a === n) return p = d.get("sliceColors")[n % d.get("sliceColors").length], b && (p = this.calcHighlightColor(p, d)), 
                c.drawPieSlice(e, e, e - f, l, m, undefined, p);
                k = m;
            }
        },
        render: function() {
            var a = this.target, b = this.values, c = this.options, d = this.radius, e = c.get("borderWidth"), f, g;
            if (!z._super.render.call(this)) return;
            e && a.drawCircle(d, d, Math.floor(d - e / 2), c.get("borderColor"), undefined, e).append();
            for (g = b.length; g--; ) b[g] && (f = this.renderSlice(g).append(), this.valueShapes[g] = f.id, 
            this.shapes[f.id] = g);
            a.render();
        }
    }), a.fn.sparkline.box = A = d(a.fn.sparkline._base, {
        type: "box",
        init: function(b, c, d, e, f) {
            A._super.init.call(this, b, c, d, e, f), this.values = a.map(c, Number), this.width = d.get("width") === "auto" ? "4.0em" : e, 
            this.initTarget(), this.values.length || (this.disabled = 1);
        },
        getRegion: function() {
            return 1;
        },
        getCurrentRegionFields: function() {
            var a = [ {
                field: "lq",
                value: this.quartiles[0]
            }, {
                field: "med",
                value: this.quartiles[1]
            }, {
                field: "uq",
                value: this.quartiles[2]
            } ];
            return this.loutlier !== undefined && a.push({
                field: "lo",
                value: this.loutlier
            }), this.routlier !== undefined && a.push({
                field: "ro",
                value: this.routlier
            }), this.lwhisker !== undefined && a.push({
                field: "lw",
                value: this.lwhisker
            }), this.rwhisker !== undefined && a.push({
                field: "rw",
                value: this.rwhisker
            }), a;
        },
        render: function() {
            var a = this.target, b = this.values, c = b.length, d = this.options, e = this.canvasWidth, f = this.canvasHeight, h = d.get("chartRangeMin") === undefined ? Math.min.apply(Math, b) : d.get("chartRangeMin"), i = d.get("chartRangeMax") === undefined ? Math.max.apply(Math, b) : d.get("chartRangeMax"), j = 0, k, l, m, n, o, p, q, r, s, t, u;
            if (!A._super.render.call(this)) return;
            if (d.get("raw")) d.get("showOutliers") && b.length > 5 ? (l = b[0], k = b[1], n = b[2], 
            o = b[3], p = b[4], q = b[5], r = b[6]) : (k = b[0], n = b[1], o = b[2], p = b[3], 
            q = b[4]); else {
                b.sort(function(a, b) {
                    return a - b;
                }), n = g(b, 1), o = g(b, 2), p = g(b, 3), m = p - n;
                if (d.get("showOutliers")) {
                    k = q = undefined;
                    for (s = 0; s < c; s++) k === undefined && b[s] > n - m * d.get("outlierIQR") && (k = b[s]), 
                    b[s] < p + m * d.get("outlierIQR") && (q = b[s]);
                    l = b[0], r = b[c - 1];
                } else k = b[0], q = b[c - 1];
            }
            this.quartiles = [ n, o, p ], this.lwhisker = k, this.rwhisker = q, this.loutlier = l, 
            this.routlier = r, u = e / (i - h + 1), d.get("showOutliers") && (j = Math.ceil(d.get("spotRadius")), 
            e -= 2 * Math.ceil(d.get("spotRadius")), u = e / (i - h + 1), l < k && a.drawCircle((l - h) * u + j, f / 2, d.get("spotRadius"), d.get("outlierLineColor"), d.get("outlierFillColor")).append(), 
            r > q && a.drawCircle((r - h) * u + j, f / 2, d.get("spotRadius"), d.get("outlierLineColor"), d.get("outlierFillColor")).append()), 
            a.drawRect(Math.round((n - h) * u + j), Math.round(f * .1), Math.round((p - n) * u), Math.round(f * .8), d.get("boxLineColor"), d.get("boxFillColor")).append(), 
            a.drawLine(Math.round((k - h) * u + j), Math.round(f / 2), Math.round((n - h) * u + j), Math.round(f / 2), d.get("lineColor")).append(), 
            a.drawLine(Math.round((k - h) * u + j), Math.round(f / 4), Math.round((k - h) * u + j), Math.round(f - f / 4), d.get("whiskerColor")).append(), 
            a.drawLine(Math.round((q - h) * u + j), Math.round(f / 2), Math.round((p - h) * u + j), Math.round(f / 2), d.get("lineColor")).append(), 
            a.drawLine(Math.round((q - h) * u + j), Math.round(f / 4), Math.round((q - h) * u + j), Math.round(f - f / 4), d.get("whiskerColor")).append(), 
            a.drawLine(Math.round((o - h) * u + j), Math.round(f * .1), Math.round((o - h) * u + j), Math.round(f * .9), d.get("medianColor")).append(), 
            d.get("target") && (t = Math.ceil(d.get("spotRadius")), a.drawLine(Math.round((d.get("target") - h) * u + j), Math.round(f / 2 - t), Math.round((d.get("target") - h) * u + j), Math.round(f / 2 + t), d.get("targetColor")).append(), 
            a.drawLine(Math.round((d.get("target") - h) * u + j - t), Math.round(f / 2), Math.round((d.get("target") - h) * u + j + t), Math.round(f / 2), d.get("targetColor")).append()), 
            a.render();
        }
    }), function() {
        document.namespaces && !document.namespaces.v ? (a.fn.sparkline.hasVML = !0, document.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML")) : a.fn.sparkline.hasVML = !1;
        var b = document.createElement("canvas");
        a.fn.sparkline.hasCanvas = !!b.getContext && !!b.getContext("2d");
    }(), D = d({
        init: function(a, b, c, d) {
            this.target = a, this.id = b, this.type = c, this.args = d;
        },
        append: function() {
            return this.target.appendShape(this), this;
        }
    }), E = d({
        _pxregex: /(\d+)(px)?\s*$/i,
        init: function(b, c, d) {
            if (!b) return;
            this.width = b, this.height = c, this.target = d, this.lastShapeId = null, d[0] && (d = d[0]), 
            a.data(d, "_jqs_vcanvas", this);
        },
        drawLine: function(a, b, c, d, e, f) {
            return this.drawShape([ [ a, b ], [ c, d ] ], e, f);
        },
        drawShape: function(a, b, c, d) {
            return this._genShape("Shape", [ a, b, c, d ]);
        },
        drawCircle: function(a, b, c, d, e, f) {
            return this._genShape("Circle", [ a, b, c, d, e, f ]);
        },
        drawPieSlice: function(a, b, c, d, e, f, g) {
            return this._genShape("PieSlice", [ a, b, c, d, e, f, g ]);
        },
        drawRect: function(a, b, c, d, e, f) {
            return this._genShape("Rect", [ a, b, c, d, e, f ]);
        },
        getElement: function() {
            return this.canvas;
        },
        getLastShapeId: function() {
            return this.lastShapeId;
        },
        reset: function() {
            alert("reset not implemented");
        },
        _insert: function(b, c) {
            a(c).html(b);
        },
        _calculatePixelDims: function(b, c, d) {
            var e;
            e = this._pxregex.exec(c), e ? this.pixelHeight = e[1] : this.pixelHeight = a(d).height(), 
            e = this._pxregex.exec(b), e ? this.pixelWidth = e[1] : this.pixelWidth = a(d).width();
        },
        _genShape: function(a, b) {
            var c = I++;
            return b.unshift(c), new D(this, c, a, b);
        },
        appendShape: function(a) {
            alert("appendShape not implemented");
        },
        replaceWithShape: function(a, b) {
            alert("replaceWithShape not implemented");
        },
        insertAfterShape: function(a, b) {
            alert("insertAfterShape not implemented");
        },
        removeShapeId: function(a) {
            alert("removeShapeId not implemented");
        },
        getShapeAt: function(a, b, c) {
            alert("getShapeAt not implemented");
        },
        render: function() {
            alert("render not implemented");
        }
    }), F = d(E, {
        init: function(b, c, d, e) {
            F._super.init.call(this, b, c, d), this.canvas = document.createElement("canvas"), 
            d[0] && (d = d[0]), a.data(d, "_jqs_vcanvas", this), a(this.canvas).css({
                display: "inline-block",
                width: b,
                height: c,
                verticalAlign: "top"
            }), this._insert(this.canvas, d), this._calculatePixelDims(b, c, this.canvas), this.canvas.width = this.pixelWidth, 
            this.canvas.height = this.pixelHeight, this.interact = e, this.shapes = {}, this.shapeseq = [], 
            this.currentTargetShapeId = undefined, a(this.canvas).css({
                width: this.pixelWidth,
                height: this.pixelHeight
            });
        },
        _getContext: function(a, b, c) {
            var d = this.canvas.getContext("2d");
            return a !== undefined && (d.strokeStyle = a), d.lineWidth = c === undefined ? 1 : c, 
            b !== undefined && (d.fillStyle = b), d;
        },
        reset: function() {
            var a = this._getContext();
            a.clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], 
            this.currentTargetShapeId = undefined;
        },
        _drawShape: function(a, b, c, d, e) {
            var f = this._getContext(c, d, e), g, h;
            f.beginPath(), f.moveTo(b[0][0] + .5, b[0][1] + .5);
            for (g = 1, h = b.length; g < h; g++) f.lineTo(b[g][0] + .5, b[g][1] + .5);
            c !== undefined && f.stroke(), d !== undefined && f.fill(), this.targetX !== undefined && this.targetY !== undefined && f.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a);
        },
        _drawCircle: function(a, b, c, d, e, f, g) {
            var h = this._getContext(e, f, g);
            h.beginPath(), h.arc(b, c, d, 0, 2 * Math.PI, !1), this.targetX !== undefined && this.targetY !== undefined && h.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a), 
            e !== undefined && h.stroke(), f !== undefined && h.fill();
        },
        _drawPieSlice: function(a, b, c, d, e, f, g, h) {
            var i = this._getContext(g, h);
            i.beginPath(), i.moveTo(b, c), i.arc(b, c, d, e, f, !1), i.lineTo(b, c), i.closePath(), 
            g !== undefined && i.stroke(), h && i.fill(), this.targetX !== undefined && this.targetY !== undefined && i.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a);
        },
        _drawRect: function(a, b, c, d, e, f, g) {
            return this._drawShape(a, [ [ b, c ], [ b + d, c ], [ b + d, c + e ], [ b, c + e ], [ b, c ] ], f, g);
        },
        appendShape: function(a) {
            return this.shapes[a.id] = a, this.shapeseq.push(a.id), this.lastShapeId = a.id, 
            a.id;
        },
        replaceWithShape: function(a, b) {
            var c = this.shapeseq, d;
            this.shapes[b.id] = b;
            for (d = c.length; d--; ) c[d] == a && (c[d] = b.id);
            delete this.shapes[a];
        },
        replaceWithShapes: function(a, b) {
            var c = this.shapeseq, d = {}, e, f, g;
            for (f = a.length; f--; ) d[a[f]] = !0;
            for (f = c.length; f--; ) e = c[f], d[e] && (c.splice(f, 1), delete this.shapes[e], 
            g = f);
            for (f = b.length; f--; ) c.splice(g, 0, b[f].id), this.shapes[b[f].id] = b[f];
        },
        insertAfterShape: function(a, b) {
            var c = this.shapeseq, d;
            for (d = c.length; d--; ) if (c[d] === a) {
                c.splice(d + 1, 0, b.id), this.shapes[b.id] = b;
                return;
            }
        },
        removeShapeId: function(a) {
            var b = this.shapeseq, c;
            for (c = b.length; c--; ) if (b[c] === a) {
                b.splice(c, 1);
                break;
            }
            delete this.shapes[a];
        },
        getShapeAt: function(a, b, c) {
            return this.targetX = b, this.targetY = c, this.render(), this.currentTargetShapeId;
        },
        render: function() {
            var a = this.shapeseq, b = this.shapes, c = a.length, d = this._getContext(), e, f, g;
            d.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
            for (g = 0; g < c; g++) e = a[g], f = b[e], this["_draw" + f.type].apply(this, f.args);
            this.interact || (this.shapes = {}, this.shapeseq = []);
        }
    }), G = d(E, {
        init: function(b, c, d) {
            var e;
            G._super.init.call(this, b, c, d), d[0] && (d = d[0]), a.data(d, "_jqs_vcanvas", this), 
            this.canvas = document.createElement("span"), a(this.canvas).css({
                display: "inline-block",
                position: "relative",
                overflow: "hidden",
                width: b,
                height: c,
                margin: "0px",
                padding: "0px",
                verticalAlign: "top"
            }), this._insert(this.canvas, d), this._calculatePixelDims(b, c, this.canvas), this.canvas.width = this.pixelWidth, 
            this.canvas.height = this.pixelHeight, e = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"' + ' style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', 
            this.canvas.insertAdjacentHTML("beforeEnd", e), this.group = a(this.canvas).children()[0], 
            this.rendered = !1, this.prerender = "";
        },
        _drawShape: function(a, b, c, d, e) {
            var f = [], g, h, i, j, k, l, m;
            for (m = 0, l = b.length; m < l; m++) f[m] = "" + b[m][0] + "," + b[m][1];
            return g = f.splice(0, 1), e = e === undefined ? 1 : e, h = c === undefined ? ' stroked="false" ' : ' strokeWeight="' + e + 'px" strokeColor="' + c + '" ', 
            i = d === undefined ? ' filled="false"' : ' fillColor="' + d + '" filled="true" ', 
            j = f[0] === f[f.length - 1] ? "x " : "", k = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + a + '" ' + h + i + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + g + " l " + f.join(", ") + " " + j + 'e">' + " </v:shape>", 
            k;
        },
        _drawCircle: function(a, b, c, d, e, f, g) {
            var h, i, j;
            return b -= d, c -= d, h = e === undefined ? ' stroked="false" ' : ' strokeWeight="' + g + 'px" strokeColor="' + e + '" ', 
            i = f === undefined ? ' filled="false"' : ' fillColor="' + f + '" filled="true" ', 
            j = '<v:oval  id="jqsshape' + a + '" ' + h + i + ' style="position:absolute;top:' + c + "px; left:" + b + "px; width:" + d * 2 + "px; height:" + d * 2 + 'px"></v:oval>', 
            j;
        },
        _drawPieSlice: function(a, b, c, d, e, f, g, h) {
            var i, j, k, l, m, n, o, p;
            if (e === f) return "";
            f - e === 2 * Math.PI && (e = 0, f = 2 * Math.PI), j = b + Math.round(Math.cos(e) * d), 
            k = c + Math.round(Math.sin(e) * d), l = b + Math.round(Math.cos(f) * d), m = c + Math.round(Math.sin(f) * d);
            if (j === l && k === m) {
                if (f - e < Math.PI) return "";
                j = l = b + d, k = m = c;
            }
            return j === l && k === m && f - e < Math.PI ? "" : (i = [ b - d, c - d, b + d, c + d, j, k, l, m ], 
            n = g === undefined ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + g + '" ', 
            o = h === undefined ? ' filled="false"' : ' fillColor="' + h + '" filled="true" ', 
            p = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + a + '" ' + n + o + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + b + "," + c + " wa " + i.join(", ") + ' x e">' + " </v:shape>", 
            p);
        },
        _drawRect: function(a, b, c, d, e, f, g) {
            return this._drawShape(a, [ [ b, c ], [ b, c + e ], [ b + d, c + e ], [ b + d, c ], [ b, c ] ], f, g);
        },
        reset: function() {
            this.group.innerHTML = "";
        },
        appendShape: function(a) {
            var b = this["_draw" + a.type].apply(this, a.args);
            return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", b) : this.prerender += b, 
            this.lastShapeId = a.id, a.id;
        },
        replaceWithShape: function(b, c) {
            var d = a("#jqsshape" + b), e = this["_draw" + c.type].apply(this, c.args);
            d[0].outerHTML = e;
        },
        replaceWithShapes: function(b, c) {
            var d = a("#jqsshape" + b[0]), e = "", f = c.length, g;
            for (g = 0; g < f; g++) e += this["_draw" + c[g].type].apply(this, c[g].args);
            d[0].outerHTML = e;
            for (g = 1; g < b.length; g++) a("#jqsshape" + b[g]).remove();
        },
        insertAfterShape: function(b, c) {
            var d = a("#jqsshape" + b), e = this["_draw" + c.type].apply(this, c.args);
            d[0].insertAdjacentHTML("afterEnd", e);
        },
        removeShapeId: function(b) {
            var c = a("#jqsshape" + b);
            this.group.removeChild(c[0]);
        },
        getShapeAt: function(a, b, c) {
            var d = a.id.substr(8);
            return d;
        },
        render: function() {
            this.rendered || (this.group.innerHTML = this.prerender, this.rendered = !0);
        }
    });
});