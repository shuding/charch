// pangu.js https://github.com/vinta/paranoid-auto-spacing
(function(i){var j=/^(code|pre|textarea)$/i;var d=/^(a|del|pre|s|strike|u)$/i;var f=/^(br|hr|i|img|pangu)$/i;var c=/^(div|h1|h2|h3|h4|h5|h6|p)$/i;function e(k){var l=k.parentNode;while(l.nodeName.search(/^(html|head|body|#document)$/i)===-1){if((l.getAttribute("contenteditable")==="true")||(l.getAttribute("g_editable")==="true")){return true}else{if(l.nodeName.search(j)>=0){return true}else{l=l.parentNode}}}return false}function b(o,m){var n=o.childNodes;for(var k=0;k<n.length;k++){var l=n[k];if(l.nodeType!==8&&l.textContent){return l===m}}}function a(o,m){var n=o.childNodes;for(var k=n.length-1;k>-1;k--){var l=n[k];if(l.nodeType!==8&&l.textContent){return l===m}}}function h(m){var l=m;var k;m=m.replace(/([\u3040-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])(["'])/ig,"$1 $2");m=m.replace(/(["'])([\u3040-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/ig,"$1 $2");m=m.replace(/(["']+)(\s*)(.+?)(\s*)(["']+)/ig,"$1$3$5");m=m.replace(/([\u3040-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])(#(\S+))/ig,"$1 $2");m=m.replace(/((\S+)#)([\u3040-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/ig,"$1 $3");l=m;k=l.replace(/([\u3040-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([<\[\{\(]+(.*?)[>\]\}\)]+)([\u3040-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/ig,"$1 $2 $4");m=k;if(l===k){m=m.replace(/([\u3040-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([<>\[\]\{\}\(\)])/ig,"$1 $2");m=m.replace(/([<>\[\]\{\}\(\)])([\u3040-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/ig,"$1 $2")}m=m.replace(/([<\[\{\(]+)(\s*)(.+?)(\s*)([>\]\}\)]+)/ig,"$1$3$5");m=m.replace(/([\u3040-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([a-z0-9`@&%=\$\^\*\-\+\|\/\\])/ig,"$1 $2");m=m.replace(/([a-z0-9`~!%&=;\|\,\.\:\?\$\^\*\-\+\/\\])([\u3040-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/ig,"$1 $2");return m}function g(l){var t=false;var k=document.evaluate(l,document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);var n=k.snapshotLength;var v;for(var s=n-1;s>-1;--s){var r=k.snapshotItem(s);if(e(r)){v=r;continue}var u=h(r.data);if(r.data!==u){t=true;r.data=u}if(v){if(r.nextSibling){if(r.nextSibling.nodeName.search(f)>=0){v=r;continue}}var w=r.data.toString().substr(-1)+v.data.toString().substr(0,1);var o=h(w);if(w!==o){t=true;var m=v;while(m.parentNode&&m.nodeName.search(d)===-1&&b(m.parentNode,m)){m=m.parentNode}var p=r;while(p.parentNode&&p.nodeName.search(d)===-1&&a(p.parentNode,p)){p=p.parentNode}if(p.nextSibling){if(p.nextSibling.nodeName.search(f)>=0){v=r;continue}}if(p.nodeName.search(c)===-1){if(m.nodeName.search(d)===-1){if((m.nodeName.search(j)===-1)&&(m.nodeName.search(c)===-1)){if(v.previousSibling){if(v.previousSibling.nodeName.search(f)===-1){v.data=" "+v.data}}else{v.data=" "+v.data}}}else{if(p.nodeName.search(d)===-1){r.data=r.data+" "}else{var q=document.createElement("pangu");q.innerHTML=" ";if(m.previousSibling){if(m.previousSibling.nodeName.search(f)===-1){m.parentNode.insertBefore(q,m)}}else{m.parentNode.insertBefore(q,m)}if(!q.previousElementSibling){if(q.parentNode){q.parentNode.removeChild(q)}}}}}}}v=r}return t}i.text_spacing=function(k){return h(k)};i.page_spacing=function(){var l="/html/head/title/text()";g(l);var m="/html/body//*/text()[normalize-space(.)]";["script","style","textarea"].forEach(function(n){m+='[translate(name(..),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz")!="'+n+'"]'});var k=g(m);return k};i.element_spacing=function(n){var p;if(n.indexOf("#")===0){var m=n.slice(1);p='id("'+m+'")//text()'}else{if(n.indexOf(".")===0){var l=n.slice(1);p='//*[contains(concat(" ",normalize-space(@class)," "), " '+l+' ")]//text()'}else{var o=n;p="//"+o+"//text()"}}var k=g(p);return k}}(window.pangu=window.pangu||{}));
(function(){
    'use strict';

    var insert_style_sheet = function () {
        var style = document.createElement("style");
        style.innerHTML = ".charch {" +
            "   word-break: normal;" +
            "   word-warp: break-word;" +
            "   line-height: 1.8em;" +
            "   text-align: justify" +
            "}" +
            ".no_line_height {" +
            "   line-height: inherit" +
            "}" +
            "p.charch_indent, .charch_indent p {" +
            "   text-indent: 2em" +
            "}" +
            "a.charch_link, .charch_link a {" +
            "   text-decoration: none;" +
            "   border-bottom: 1px solid" +
            "}" +
            "p.charch_pseudo, .charch_pseudo p {" +
            "   text-indent: 0" +
            "}" +
            "p.charch_pseudo::first-letter, .charch_pseudo p::first-letter {" +
            "   font-size: 2.8em;" +
            "   line-height: 1.2em;" +
            "   float: left" +
            "}";
        (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(style);
    };

    var for_each_specific_element = function (p, tag, func) {
        if (p.nodeName === tag)
            return func(p);
        var children_num = p.childNodes.length;
        for(var i = 0; i < children_num; ++i) {
            var add_ons = for_each_specific_element(p.childNodes[i], tag, func);
            i += add_ons;
            children_num += add_ons;
        }
        return 0;
    };

    var replace_bracket = function (p) {
        for_each_specific_element(p, "#text", function (t) {
            var s = t.data;
            s = s.replace(/“/g, "「");
            s = s.replace(/”/g, "」");
            s = s.replace(/‘/g, "『");
            s = s.replace(/’/g, "』");
            t.data = s;
            return 0;
        });
    };

    var link_space = function (p) {
        for_each_specific_element(p, "A", function (t) {
            var space_before = document.createElement("span"), space_after = document.createElement("span");
            space_before.innerText = space_after.innerText = " ";
            t.parentNode.insertBefore(space_before, t);
            t.parentNode.insertBefore(space_after, t.nextSibling);
            return 2;
        });
    };

    var charch_typeset_post = function (p) {
        var className = " " + p.className + " ";

        if(className.indexOf(" no_cjk_latin_space ") === -1)
            p.className += " charch_space";

        if(className.indexOf(" no_bracket_replace ") === -1)
            replace_bracket(p);

        if(className.indexOf(" no_link_space ") === -1)
            link_space(p);
    };

    var posts = document.getElementsByClassName("charch");
    var posts_num = posts.length;
    for (var i = 0; i < posts_num; ++i)
        charch_typeset_post(posts[i]);

    insert_style_sheet();
    pangu.element_spacing(".charch_space");
})();