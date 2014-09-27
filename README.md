charch.js 中文排版工具
======
Demo: [shud.in/charch/demo](http://shud.in/charch/demo)

## 致谢
[https://github.com/vinta/paranoid-auto-spacing](https://github.com/vinta/paranoid-auto-spacing)

## 协议

- 作者：[Shu Ding](github.com/quietshu)
- 版本：0.1
- 协议：[The MIT License](http://opensource.org/licenses/MIT)

## 用法

1. 在 `body` **底部**插入此脚本：

		<script src="charch.js"></script>

2. 在需要排版的元素上加入 `class='charch'`
3. 设置同样是添加 `class` 的形式：
	1. `charch_indent`：段前自动缩进两格
	1. `charch_link`：超链接下划线调整
	1. `charch_pseudo`：（此段）首字加大
	1. `charch_vertical`：竖排
	1. `no_cjk_latin_space`：关闭中西文自动间隔
	1. `no_bracket_replace`：关闭直角引号自动替换
	1. `no_link_space`：关闭超链接左右间隔
	1. `no_line_height`：关闭行距自动调整
	
例如：

	<div class="charch charch_pseudo charch_vertical">
		<p>段落一</p>
		<p>段落二</p>
		...
	</div>
	<script src="charch.js"></script>
	
将生成一段竖排文本，且首字加大。

## 样例

### 正常（窄）

![2](./demo/2.png)

### 首字加大

![1](./demo/1.png)

### 竖排

![3](./demo/3.png)