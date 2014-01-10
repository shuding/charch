/*
*
*/


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
		if(post.childNodes[i].tagName == "P")
			charch_typeset_paragraph(post.childNodes[i]);
	}

	var spans = document.getElementsByClassName("charch_span");
	var len = spans.length;
	for(var i = 0; i < len; ++i){
		var sp = spans[i];
		if(sp.innerHTML == "，"
		|| sp.innerHTML == "。"
		|| sp.innerHTML == "、"
		|| sp.innerHTML == "？"
		|| sp.innerHTML == "！"
		|| sp.innerHTML == "）"
		|| sp.innerHTML == "」")
			if(sp.offsetLeft == sp.parentNode.offsetLeft){			// 标点悬挂
				sp.style.float = "right";
				sp.style.width = 0;
			}
	}
}

var charch_typeset_paragraph = function(p){
	p.className += " charch_paragraph";
	p.innerHTML = charch_content(p.innerHTML);

	return p;
}

var chartype = function(ch){
	if(ch <= '\u9FA5' && ch >= '\u4E00')		//标准CJK文字
		return 1;
	if(ch <= '\uFFEF' && ch >= '\uFF00')		// 全角ASCII、全角中英文标点、半宽片假名、半宽平假名、半宽韩文字母
		return 2;
	if(ch <= '\u303F' && ch >= '\u3000')		// CJK标点符号
		return 2;
	if(ch == '\u2014')						// —
		return 2;
	if(ch == '\u2026')						// …
		return 2;
	if(ch == ':'								// 半角ASCII符号
	|| ch == '/'	
	|| ch == '+'
	|| ch == '-'
	|| ch == '*'
	|| ch == '='
	|| ch == '^'
	|| ch == '%'
	|| ch == '~')
		return 3;
	return 0;
}

var charch_content = function(str){
	var len = str.length;
	if(!len)
		return str;
	
	str = str.replace(/\(/g, "（");
	str = str.replace(/\)/g, "）");
	str = str.replace(/“/g, "「");
	str = str.replace(/”/g, "」");
	
	var s = "";
	var pre_ch, next_ch = chartype(str[0]), ch = -1;
	for(var i = 0; i < len; ++i){
		pre_ch = ch;
		ch = next_ch;
		next_ch = (i + 1 == len ? -1 : chartype(str[i + 1]));
		
		if(str[i] == "\n"){
			s += "</p><p>"
		}
		else{	
			if(ch == 2){
				s += "<span class='charch_span'>"+str[i]+"</span>";
			}
			else
				s += "<span>"+str[i]+"</span>";
		}
	}
	return s;
}