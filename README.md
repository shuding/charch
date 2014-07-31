charch.js 中文排版工具
======
[github.com/quietshu/charch](github.com/quietshu/charch)

### 特点
- 仅作格式处理，CSS 中文样式请使用 Typo、Han CSS 库
- 替换公共引号“”、‘’为中文直角引号「」、『』
- 中西文衔接处添加一个半角空格
- 对齐方式设置为左右对齐，`word-break`
- 修复 `p` 标签下默认忽略换行符的问题

### 致谢
[https://github.com/vinta/paranoid-auto-spacing](https://github.com/vinta/paranoid-auto-spacing)


### 协议

- 作者：[Shu Ding](github.com/quietshu)
- 版本：1.3
- 协议：[The MIT License](http://opensource.org/licenses/MIT)

### 用法

1. include `charch.js`
  
2. 在需要排版的地方（`<p>` 或是上层元素）加入 class `charch_post`。例如：

	原代码：

		<div>
			<p>半夜写代码</p>
			<p>真蛋疼</p>
		</div>

	应改成：

		<div class="charch_post">
			<p>半夜写代码</p>
			<p>真蛋疼</p>
		</div>
  
 
### Todos

- 如何才能更灵活处理字距问题？比如「ACM-ICPC」和「1 - 2」
- 字符集、符号类别需要完善，需要支持所有 CJK 字符和特殊符号
- 中英文混输 word-wrap 如何解决
- 两个标点悬挂 bug 待修复
- 或许可以进一步制作成一个阅读网页优化插件
