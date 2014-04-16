window.onload = function(){
    var typo = document.getElementById("typo");
    typo.onclick = function(){
        var post = document.getElementById("para");
        post.value = charch_typeset_paragraph(post.value);
    };
}

var charch_typeset_paragraph = function(p){
	var new_p;
	new_p = charch_content(p);

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
	
	str = str.replace(/“/g, "『");
	str = str.replace(/”/g, "』");
	str = str.replace(/‘/g, "「");
	str = str.replace(/’/g, "」");
    str = str.replace(/·/g, "・");

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
        else if(pre_ch == 0 && ch == 2)
            s += ' ' + str[i];
        else if(pre_ch == 2 && ch == 0)
            s += ' ' + str[i];
        else
            s += str[i];
	}

	return s;
}
