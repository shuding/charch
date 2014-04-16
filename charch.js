window.onload = function(){
	var posts = document.getElementsByClassName("charch_post");
	var posts_num = posts.length;
	for(var i = 0; i < posts_num; ++i){
		charch_typeset_post(posts[i]);
	}
}

var charch_typeset_post = function(post){
	var par = post.childNodes.length;
	
	for(var i = 0; i < par; ++i){
		if(post.childNodes[i].tagName == "DIV" ||
		   post.childNodes[i].tagName == "P" ||
		   post.childNodes[i].tagName == "A" ||
		   post.childNodes[i].tagName == "UL" ||
		   post.childNodes[i].tagName == "LI" ||
		   post.childNodes[i].tagName == "BLOCKQUOTE" ||
		   post.childNodes[i].tagName == "I" ||
		   post.childNodes[i].tagName == "STRONG" ||
		   post.childNodes[i].tagName == "ITALIC" ||
		   post.childNodes[i].tagName == "SUP" ||
		   post.childNodes[i].tagName == "SUB")
			charch_typeset_post(post.childNodes[i]);
		else if(!post.childNodes[i].tagName){
			var new_p = charch_typeset_paragraph(post.childNodes[i]);
			if(new_p){
				if(post.tagName == "P" && par == 1){
					var tmp = new_p.innerHTML;
					new_p = document.createElement("P");
					new_p.innerHTML = tmp;
					new_p.className = "charch_span charch_paragraph";
				}
				post.removeChild(post.childNodes[i]);
				post.insertBefore(new_p, post.childNodes[i]);
			}
			console.log(post);
		}
	}

/*
	var spans = document.getElementsByClassName("charch_letter_span");
	var len = spans.length;
	for(var i = 0; i < len; ++i){
		var sp = spans[i];
		if(sp)
			if(sp.innerHTML == "，"
			|| sp.innerHTML == "。"
			|| sp.innerHTML == "、"
			|| sp.innerHTML == "；"
			|| sp.innerHTML == "？"
			|| sp.innerHTML == "！"
			|| sp.innerHTML == "）"
			|| sp.innerHTML == "」")
				if(sp.offsetLeft == sp.parentNode.offsetLeft){
//					sp.style.width = 0;
//					var tmp = sp;
//					sp.parentNode.parentNode.insertBefore(tmp, sp.parentNode);
//					sp.parentNode.removeChild(sp);
				}
	}*/
}

var charch_typeset_paragraph = function(p, t){
	var new_p = document.createElement("SPAN");
	new_p.innerHTML = p.nodeValue;
	if(new_p.innerHTML[0] == '\n')
		return undefined;
	
	new_p.innerHTML = charch_content(new_p.innerHTML);
	new_p.className = "charch_span";

	return new_p;
}

var chartype = function(ch){
    // Other
    // basic latin && extends: http://jrgraphix.net/r/Unicode/0020-007F
    // Greek && Coptic && Arabic && ........
    if(ch >= '\u0020' && ch <= '\u2bff')
        return 0;

    // escaped CJK Symbols
    if(ch >= '\ufe30' && ch <= '\ufe6f')
        return 1;
    if(ch >= '\u3000' && ch <= '\u303f')
        return 1;
    if(ch >= '\uff00' && ch <= '\uff65')
        return 1;

    // CJK Charactars
    if(ch >= '\u2e80')
        return 2;

    return 0;
}

var charch_content = function(str){
	var len = str.length;
	if(!len)
		return str;
	
//	str = str.replace(/\(/g, "（");
//	str = str.replace(/\)/g, "）");
	str = str.replace(/“/g, "『");
	str = str.replace(/”/g, "』");
	str = str.replace(/‘/g, "「");
	str = str.replace(/’/g, "」");

	var s = "";
	var pre_ch, next_ch = chartype(str[0]), ch = -1;
	for(var i = 0; i < len; ++i){
		pre_ch = ch;
		ch = next_ch;
		next_ch = (i + 1 == len ? -1 : chartype(str[i + 1]));
		
		if(str[i] == '\n'){
            if(i && str[i - 1] != '\n')
                s += '\n';
            else if(i > 1 && str[i - 1] == '\n' && str[i - 2] != '\n')
                s += '\n';
        }
		else{
			if(pre_ch == 0 && ch == 2)
				s += "<span class='charch_letter_span'> </span>";
			else if(pre_ch == 2 && ch == 0)
				s += "<span class='charch_letter_span'> </span>";
			else
				s += "<span class='charch_letter_span'>"+str[i]+"</span>";
		}
	}

	return s;
//	return str;
}
