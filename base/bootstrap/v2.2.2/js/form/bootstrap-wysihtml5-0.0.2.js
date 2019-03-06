!function(a, b) {
    "use strict";
    var c = {
        "font-styles": "<li class='dropdown'><a class='btn dropdown-toggle' data-toggle='dropdown' href='#'><i class='icon-font'></i>&nbsp;<span class='current-font'>Normal text</span>&nbsp;<b class='caret'></b></a><ul class='dropdown-menu'><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='div'>Normal text</a></li><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h1'>Heading 1</a></li><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h2'>Heading 2</a></li></ul></li>",
        emphasis: "<li><div class='btn-group'><a class='btn' data-wysihtml5-command='bold' title='CTRL+B'>Bold</a><a class='btn' data-wysihtml5-command='italic' title='CTRL+I'>Italic</a><a class='btn' data-wysihtml5-command='underline' title='CTRL+U'>Underline</a></div></li>",
        lists: "<li><div class='btn-group'><a class='btn' data-wysihtml5-command='insertUnorderedList' title='Unordered List'><i class='icon-list'></i></a><a class='btn' data-wysihtml5-command='insertOrderedList' title='Ordered List'><i class='icon-th-list'></i></a><a class='btn' data-wysihtml5-command='Outdent' title='Outdent'><i class='icon-indent-right'></i></a><a class='btn' data-wysihtml5-command='Indent' title='Indent'><i class='icon-indent-left'></i></a></div></li>",
        link: "<li><div class='bootstrap-wysihtml5-insert-link-modal modal hide fade'><div class='modal-header'><a class='close' data-dismiss='modal'>&times;</a><h3>Insert Link</h3></div><div class='modal-body'><input value='http://' class='bootstrap-wysihtml5-insert-link-url input-xlarge'></div><div class='modal-footer'><a href='#' class='btn' data-dismiss='modal'>Cancel</a><a href='#' class='btn btn-primary' data-dismiss='modal'>Insert link</a></div></div><a class='btn' data-wysihtml5-command='createLink' title='Link'><i class='icon-share'></i></a></li>",
        image: "<li><div class='bootstrap-wysihtml5-insert-image-modal modal hide fade'><div class='modal-header'><a class='close' data-dismiss='modal'>&times;</a><h3>Insert Image</h3></div><div class='modal-body'><input value='http://' class='bootstrap-wysihtml5-insert-image-url input-xlarge'></div><div class='modal-footer'><a href='#' class='btn' data-dismiss='modal'>Cancel</a><a href='#' class='btn btn-primary' data-dismiss='modal'>Insert image</a></div></div><a class='btn' data-wysihtml5-command='insertImage' title='Insert image'><i class='icon-picture'></i></a></li>",
        html: "<li><div class='btn-group'><a class='btn' data-wysihtml5-action='change_view' title='Edit HTML'><i class='icon-pencil'></i></a></div></li>"
    }, d = {
        "font-styles": !0,
        emphasis: !0,
        lists: !0,
        html: !1,
        link: !0,
        image: !0,
        events: {},
        parserRules: {
            tags: {
                b: {},
                i: {},
                br: {},
                ol: {},
                ul: {},
                li: {},
                h1: {},
                h2: {},
                blockquote: {},
                u: 1,
                img: {
                    check_attributes: {
                        width: "numbers",
                        alt: "alt",
                        src: "url",
                        height: "numbers"
                    }
                },
                a: {
                    set_attributes: {
                        target: "_blank",
                        rel: "nofollow"
                    },
                    check_attributes: {
                        href: "url"
                    }
                }
            }
        },
        stylesheets: []
    }, e = function(b, c) {
        this.el = b, this.toolbar = this.createToolbar(b, c || d), this.editor = this.createEditor(c), 
        window.editor = this.editor, a("iframe.wysihtml5-sandbox").each(function(b, c) {
            a(c.contentWindow).off("focus.wysihtml5").on({
                "focus.wysihtml5": function() {
                    a("li.dropdown").removeClass("open");
                }
            });
        });
    };
    e.prototype = {
        constructor: e,
        createEditor: function(c) {
            c = a.extend(d, c || {}), c.toolbar = this.toolbar[0];
            var e = new b.Editor(this.el[0], c);
            if (c && c.events) for (var f in c.events) e.on(f, c.events[f]);
            return e;
        },
        createToolbar: function(b, e) {
            var f = this, g = a("<ul/>", {
                class: "wysihtml5-toolbar",
                style: "display:none"
            });
            for (var h in d) {
                var i = !1;
                e[h] !== undefined ? e[h] === !0 && (i = !0) : i = d[h], i === !0 && (g.append(c[h]), 
                h === "html" && this.initHtml(g), h === "link" && this.initInsertLink(g), h === "image" && this.initInsertImage(g));
            }
            if (e.toolbar) for (h in e.toolbar) g.append(e.toolbar[h]);
            return g.find("a[data-wysihtml5-command='formatBlock']").click(function(b) {
                var c = a(b.srcElement);
                f.toolbar.find(".current-font").text(c.html());
            }), this.el.before(g), g;
        },
        initHtml: function(a) {
            var b = "a[data-wysihtml5-action='change_view']";
            a.find(b).click(function(c) {
                a.find("a.btn").not(b).toggleClass("disabled");
            });
        },
        initInsertImage: function(a) {
            var b = this, c = a.find(".bootstrap-wysihtml5-insert-image-modal"), d = c.find(".bootstrap-wysihtml5-insert-image-url"), e = c.find("a.btn-primary"), f = d.val(), g = function() {
                var a = d.val();
                d.val(f), b.editor.composer.commands.exec("insertImage", a);
            };
            d.keypress(function(a) {
                a.which == 13 && (g(), c.modal("hide"));
            }), e.click(g), c.on("shown", function() {
                d.focus();
            }), c.on("hide", function() {
                b.editor.currentView.element.focus();
            }), a.find("a[data-wysihtml5-command=insertImage]").click(function() {
                return c.modal("show"), c.on("click.dismiss.modal", '[data-dismiss="modal"]', function(a) {
                    a.stopPropagation();
                }), !1;
            });
        },
        initInsertLink: function(a) {
            var b = this, c = a.find(".bootstrap-wysihtml5-insert-link-modal"), d = c.find(".bootstrap-wysihtml5-insert-link-url"), e = c.find("a.btn-primary"), f = d.val(), g = function() {
                var a = d.val();
                d.val(f), b.editor.composer.commands.exec("createLink", {
                    href: a,
                    target: "_blank",
                    rel: "nofollow"
                });
            }, h = !1;
            d.keypress(function(a) {
                a.which == 13 && (g(), c.modal("hide"));
            }), e.click(g), c.on("shown", function() {
                d.focus();
            }), c.on("hide", function() {
                b.editor.currentView.element.focus();
            }), a.find("a[data-wysihtml5-command=createLink]").click(function() {
                return c.modal("show"), c.on("click.dismiss.modal", '[data-dismiss="modal"]', function(a) {
                    a.stopPropagation();
                }), !1;
            });
        }
    }, a.fn.wysihtml5 = function(b) {
        return this.each(function() {
            var c = a(this);
            c.data("wysihtml5", new e(c, b));
        });
    }, a.fn.wysihtml5.Constructor = e;
}(window.jQuery, window.wysihtml5);