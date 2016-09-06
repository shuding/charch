/**
 * Created by shuding on 9/30/15.
 * <ds303077135@gmail.com>
 */

'use strict';

var Pangu = require('./pangu');

module.exports = Charch;

function Charch(document) {
    'use strict';

    function isChinese(node) {
        var re=/[^\u4e00-\u9fa5]/;
        if(re.test(node.textContent)) return false;
        return true;
    }

    var insert_style_sheet = function () {
        var style       = document.createElement("style");
        style.innerHTML = ".charch {" +
                          "   word-break: normal;" +
                          "   word-warp: break-word;" +
                          "   text-align: justify" +
                          "}" +
                          ".charch-line-height {" +
                          "   line-height: 1.8em;" +
                          "}" +
                          "p.charch-indent, .charch-indent p {" +
                          "   text-indent: 2em" +
                          "}" +
                          "a.charch-link, .charch-link a {" +
                          "   text-decoration: none;" +
                          "   border-bottom: 1px solid" +
                          "}" +
                          ".charch-vertical a.charch-link, .charch-vertical.charch-link a {" +
                          "   border-bottom: none;" +
                          "   border-left: 1px solid" +
                          "}" +
                          "p.charch-pseudo, .charch-pseudo p {" +
                          "   text-indent: 0" +
                          "}" +
                          "p.charch-pseudo::first-letter, .charch-pseudo p::first-letter {" +
                          "   font-size: 2.8em;" +
                          "   line-height: 1.2em;" +
                          "   float: left" +
                          "}" +
                          "p.charch-vertical, .charch-vertical {" +
                          "   -webkit-writing-mode: vertical-rl;" +
                          "   writing-mode: vertical-rl;" +
                          "}" +
                          "em.charch, .charch em {" +
                          "   font-style: normal;" +
                          "   -webkit-text-emphasis-style: dot;" +
                          "   -webkit-text-emphasis-position: under;" +
                          "   text-emphasis-style: dot;" +
                          "   text-emphasis-position: under" +
                          "}";
        (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(style);
    };

    var for_each_specific_element = function (p, tag, func) {
        if (p.nodeName === tag) {
            return func(p);
        }
        var children_num = p.childNodes.length;
        for (var i = 0; i < children_num; ++i) {
            var add_ons = for_each_specific_element(p.childNodes[i], tag, func);
            i += add_ons;
            children_num += add_ons;
        }
        return 0;
    };

    var replace_bracket = function (p) {
        for_each_specific_element(p, "#text", function (t) {
            var s  = t.data;
            s      = s.replace(/“/g, "「");
            s      = s.replace(/”/g, "」");
            s      = s.replace(/‘/g, "『");
            s      = s.replace(/’/g, "』");
            s      = s.replace(/([A-z]+)』/g, "$1'");
            t.data = s;
            return 0;
        });
    };

    var link_space = function (p) {
        for_each_specific_element(p, "A", function (t) {
            var space_before       = document.createElement("span"), space_after = document.createElement("span");
            space_before.innerText = space_after.innerText = " ";
            t.parentNode.insertBefore(space_before, t);
            t.parentNode.insertBefore(space_after, t.nextSibling);
            return 2;
        });
    };

    var charch_typeset_post = function (p) {
        var className = " " + p.className + " ";

        if (className.indexOf(" charch-bracket-replace ") !== -1 && (isChinese(p))) {
            replace_bracket(p);
        }

        if (className.indexOf(" charch-link-space ") !== -1) {
            link_space(p);
        }
    };

    insert_style_sheet();
    [].forEach.call(document.getElementsByClassName("charch"), charch_typeset_post);

    var pangu = new Pangu();
    pangu.element_spacing(".charch-cjk-latin-space");
}
