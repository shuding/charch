charch.js 中文排版库
======

# 效果

<img src="demo.png">

# 用法

- 将`charch.js`放入网站根目录下。

- 在网页头部`</head>`之前加入如下代码：

  <script type="text/javascript" src="charch.js"></script>
  
- 在需要排版的文章父元素（`<p>`的上层`<div>`）加入类`charch_post`。例如：

  原代码：
  <div id="foo" class="bar">
    <p>半夜写代码</p>
    <p>真蛋疼</p>
  </div>

  应改成：
  <div id="foo" class="bar charch_post">
    <p>半夜写代码</p>
    <p>真蛋疼</p>
  </div>
  
# 说明

- 不依赖其他 js 库。

- 功能仍在进一步完善中。
