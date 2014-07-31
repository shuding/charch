(function () {
    window.onload = function () {
        var posts = document.getElementsByClassName("charch_post");
        var posts_num = posts.length;
        for (var i = 0; i < posts_num; ++i) {
            charch_typeset_post(posts[i]);
        }
    }

    var check_tag_name = function (el) {
        if (el.tagName == "DIV" ||
            el.tagName == "P" ||
            el.tagName == "SPAN" ||
            el.tagName == "B" ||
            el.tagName == "A" ||
            el.tagName == "UL" ||
            el.tagName == "LI" ||
            el.tagName == "BLOCKQUOTE" ||
            el.tagName == "I" ||
            el.tagName == "STRONG" ||
            el.tagName == "ITALIC" ||
            el.tagName == "SUP" ||
            el.tagName == "SUB")
            return true;
        return false;
    }

    var charch_typeset_post = function(post) {
        if (post.childNodes) {
            var par = post.childNodes.length;
            for(var i = 0; i < par; ++i) {
                if (check_tag_name(post.childNodes[i]))
                    charch_typeset_post(post.childNodes[i]);
                else if (!post.childNodes[i].tagName) {
                    post.childNodes[i].nodeValue = replace_content(post.childNodes[i]);
                }
            }
        } else if (check_tag_name(post)) {
            post.innerHTML = replace_content(post.innerHTML);
        }
    }

    var replace_content = function(str){
        var s   = str.nodeValue;
        var len = s.length;
        if(!len)
            return s;

        s = s.replace(/‘/g, "『");
        s = s.replace(/’/g, "』");
        s = s.replace(/“/g, "「");
        s = s.replace(/”/g, "」");

        return s;
    }
})();