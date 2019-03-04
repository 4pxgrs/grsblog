# 核心规范
## HTML规范
**DOCTYPE声明：** HTML文件第一行统一使用 HTML5 的文档声明：`<!DOCTYPE html>`<br>

**LANG页面语言：** `<html lang="en"></html>` 或 `<html lang="zh-CN"></html>`<br>

**CHARSET字符编码：** 一般情况下统一使用 “UTF-8” 编码`<meta charset="UTF-8">`<br>

**CSS 和 JS 引入：** 不需要为 CSS、JS 指定类型属性 type，因为 HTML5 中默认已包含 text/javascript 和 text/css，如：`<link rel="stylesheet" href="abc.css">、<script src="abc.js"></script>`，css 引用置于头部 `<head>` 标签内，js 引用置于底部 `</body>` 标签之前，或者在`</head>`之前，但是需要加上属性 defer，如：`<script src="abc.js" defer="defer"></script>`

**浏览器渲染设置：** 一般都设置为最新模式来渲染页面，指定 IE 和 Chrome 使用最新版本渲染当前页面，<br>增加标签：`<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">`；360浏览器有两种内核模式，即“极速模式”和“兼容模式”。“极速模式”是以Blink（Webkit）为内核的浏览模式，Blink内核具有更高的网页浏览速度和更好网页渲染效果；“兼容模式”下，360浏览器调用Trident内核（IE内核），Trident内核具有网页兼容性好、页面适用性广的特征。可以通过在页面中添加代码来指定网站的模式，增加标签：`<meta name="renderer" content="webkit">`，content 的取值分别为 webkit，ie-comp，ie-stand，区分大小写，分别代表用极速模式，IE兼容模式（低版本IE模式），IE标准模式（高版本IE模式）。

**书写风格：**
1. 双标签都要正确书写开始标签和结束标签，单标签都不加 “/” 字符，如：`<div></div>、<input>、<br>`
注：双标签成对出现有开始标签和结束标签，如 `<div></div>、<p></p>、<span></span>` 等；单标签没有结束标签，如 `<img>、<input>、<br>、<meta>` 等。
2. HTML标签名、类名、标签属性和大部分属性值统一用小写，如：`<div class="xx" title="yy"></div>`
3. 统一使用四个空格进行代码缩进，元素属性值使用双引号语法
4. 在 HTML 中的特殊字符，如 “<” 和 “>” 在 HTML 源代码中使用<a href="https://baike.baidu.com/item/HTML%E5%AE%9E%E4%BD%93/9172201?fr=aladdin" target="_blank">字符实体</a>
5. 元素嵌套规范：每个块元素独立一行，行元素可选；块元素可以嵌套块和行元素，行元素只能嵌套行元素；p 元素与 h 元素只能嵌套行元素
6. img 标签必须加 alt，尤其是logo、商品图片等关键图片信息，对`SEO`友好
7. 尽量避免多余的父节点，尽量遵循 HTML 标准和语义，用尽量小的复杂度和尽量少的标签来解决问题

**代码注释：**  
1. 单行注释，注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行
```html
<!-- Comment Text -->
<div>...</div>
```
2. 模块注释，`<!-- S Comment Text -->` 表示模块开始，`<!-- E Comment Text -->` 表示模块结束，模块与模块之间相隔一行
```html
<!-- S Comment Text A -->	
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->
	
<!-- S Comment Text B -->	
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```

**HTML5标准模版：**
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>HTML5 PC端模版</title>
</head>
<body>
	
</body>
</html>
```
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0,
 maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
<meta name="format-detection" content="telephone=no">
<title>HTML5 移动端模版</title>
</head>
<body>

</body>
</html>
```

## CSS规范
**样式表编码：** `@charset "UTF-8";` 规则一定要在样式文件的第一行首个字符位置开始<br>

**代码风格：**
1. 统一使用展开格式书写样式
```css
.jdc{
    display: block;
    width: 50px;
}
```
2. 样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写
3. 尽量少用通用选择器 *，尽量少或不使用 ID 选择器，不使用无具体语义定义的标签选择器
4. 统一使用四个空格进行代码缩进，使得各编辑器表现一致
5. 每个属性声明末尾都要加分号，每条属性声明应该只占用一行来保证错误报告更加准确
6. 左括号与类名之间一个空格，冒号与属性值之间一个空格，逗号之后一个空格
7. 属性值十六进制数值能用简写的尽量用简写，如：使用 `color: #fff;` 而不是 `color: #ffffff;`
8. 不要为 0 指明单位，如：使用 `margin: 0;` 而不是 `margin: 0px;`
9. 谨慎使用或不使用属性简写的方式，属性简写需要你必须显式设置所有取值，其中包含不必要的重写和意想不到的副作用，如 `padding、margin、font、background` 等
10. CSS3 浏览器私有前缀在前，标准写法在后：
```css
.jdc {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```
11. 属性声明应该以下面的顺序分组处理：
```
.1 位置属性（position、display、float等）
.2 盒模型（width、height、padding、margin、border等）
.3 其他属性（font、color、text-align、background、transform、transition等）
```

**注释规范：**
1. 注释以字符 `/*` 开始，以字符 `*/` 结束
2. 注释内容第一个字符和最后一个字符都是一个空格字符，单独占一行，行与行之间相隔一行
```css
/* Comment Text */
.jdc{}

/* Comment Text */
.jdc{}
```
3. 在样式文件编码声明 @charset 语句下面注明文件信息：
```css
@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 2019-01-21
 */
```
**重置样式：**<br>
以下为基础的重置样式，根据项目需要可在基础重置样式上自行添加或删除<br>
**PC端** 
```css
html, body, div, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, ul, li, fieldset, form, label, input, legend, table, caption, tbody, tfoot, thead, tr, th, td, textarea, article, aside, audio, canvas, figure, footer, header, mark, menu, nav, section, time, video { margin: 0; padding: 0; }
h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal }
article, aside, dialog, figure, footer, header, hgroup, nav, section, blockquote { display: block; }
ul, ol { list-style: none; }
img { border: 0 none; vertical-align: top; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: none; }
table { border-collapse: collapse; border-spacing: 0; }
strong, em, i { font-style: normal; font-weight: normal; }
ins { text-decoration: underline; }
del { text-decoration: line-through; }
mark { background: none; }
input::-ms-clear { display: none !important; }
body { font: 12px/1.5 \5FAE\8F6F\96C5\9ED1, \5B8B\4F53, "Hiragino Sans GB", STHeiti, "WenQuanYi Micro Hei", "Droid Sans Fallback", SimSun, sans-serif; background: #fff; }
a { text-decoration: none; color: #333; }
a:hover { text-decoration: underline; }
```

**移动端**
```css
* { -webkit-tap-highlight-color: transparent; outline: 0; margin: 0; padding: 0; vertical-align: baseline; }
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin: 0; padding: 0; vertical-align: baseline; }
img { border: 0 none; vertical-align: top; }
i, em { font-style: normal; }
ol, ul { list-style: none; }
input, select, button, h1, h2, h3, h4, h5, h6 { font-size: 100%; font-family: inherit; }
table { border-collapse: collapse; border-spacing: 0; }
a { text-decoration: none; color: #666; }
body { margin: 0 auto; min-width: 320px; max-width: 640px; height: 100%; font-size: 14px; font-family: -apple-system,Helvetica,sans-serif; line-height: 1.5; color: #666; -webkit-text-size-adjust: 100% !important; text-size-adjust: 100% !important; }
input[type="text"], textarea { -webkit-appearance: none; -moz-appearance: none; appearance: none; }
```

## JS规范
### 语言规范
**基本类型：** string、number、boolean、null、undefined

**复杂类型：** object、array、function

**标识符及命名：**<br>
 1.标识符是指变量、函数、属性或函数的参数的名字<br>
 2.第一个字符必须是字母、下划线_或美元符号$<br>
 3.其他字符可以是字母、下划线_、美元符号$或数字<br>
 4.不能含有空格，不能以关键字或保留字命名<br>

**变量声明：**<br>
 1.声明变量必须加上关键字（var、let、const）<br>
 2.标准变量采用驼峰式命名<br>
 3.常量采用大写字母，下划线连接的方式<br>
 4.约定在声明变量时，一个声明对应一个变量<br>

 **字符串：** 统一使用单引号 `''` 的形式<br>

 **数组：** 请使用字面量值代替数组构造器创建数组<br>
 如：使用 `var arr = [];`，不使用 `var arr = new Array();`<br>

 **对象：** 请使用字面量值代替对象构造器创建对象<br>
 如：使用 `var obj = {};`，不使用 `var obj = new Object();`<br>

 **函数：** 请使用函数声明，而不是函数表达式<br>
 如：使用 `function foo () { ... };`，不使用 `var foo = function () { ... };`<br>

 **原型：** 不要修改内置对象的原型，如 `Object` 和 `Array`<br>

 **eval：** 我们约定禁止使用该方法<br>

 **with:：** 我们约定禁止使用该方法

 ### 编码规范
 **缩进：** 代码保持一致的缩进，约定缩进使用四个空格<br>

 **分号：** 约定每个语句的末尾有分号 `;`<br>

 **单行代码块：** 约定在单行代码块中使用空格
 ```js
function foo () { return true; }
if (foo) { bar = 0; }
 ```
**大括号：** 约定使用 `One True Brace Style` 风格
```js
if (foo) {
    bar();
} else {
    baz();
}
```
**逗号：** 约定在逗号后面使用空格，逗号前面不加空格，逗号放置在当前行的末尾
```js
var foo = 1, bar = 2;

var foo = 1,
    bar = 2;
```
**空行：** 空白行对于分离代码逻辑有帮助，约定最大连续空行数为 2<br>

**空格：** 约定代码块前要添加空格，函数括号前要加空格，操作符前后要加空格
```js
var sum = 1 + 2;

function func (x) {
    // ...
}
```
**构造函数：** 约定构造函数的首字母要大写，以此来区分构造函数和普通函数，通过 new 调用构造函数时后面加圆括号，如 `var person = new Person();`<br>

**模块化：** 满足可维护性，代码复用，命名空间，多人协作等需要
```js
(function (window, undefined) {
    var login = {
        init: function () {
            this.bindEvent();
        },
        cacheElement: function() {
            // 一些经常需要用到的元素，先缓存起来，避免多次调用
            this.$body = $("body");
        },
        bindEvent: function () {
            this.$body.on("click", ".free-register", this.freeRegisterFn);
        },
        // ...
    }
    login.init();
})(window);
```
**单行注释：**<br>
1.单独一行：//(双斜线)与注释文字之间保留一个空格；<br>
2.在代码后面注释：//(双斜线)与代码之间保留一个空格，并且//(双斜线)与注释文字之间保留一个空格；<br>
3.注释代码：//(双斜线)与代码之间保留一个空格。<br>
```js
// 单独在一行注释
setTitle();

var maxCount = 10; // 在代码后面注释

// setName(); // 注释代码
```
**多行注释：** 注释内容前后与星号有一个空格
```js
/* function fn () {
    console.log('123');
} */
```
**文档注释：** 用于 方法、构造函数、对象
```js
/**
 * 简述
 * 功能详细描述
 * @param <String> arg1 参数1
 * @param <Number> arg2 参数2，默认为0
 * @return <Boolean> 判断xxx是否成功
 */
 function fooFn (arg1, arg2) {
    // code
 }
```
**BOM：** Unicode 字节顺序标记 (BOM) 用来指定代码单元是高字节序还是低字节序。UTF-8 不需要 BOM 来表明字节顺序，因为单个字节并不影响字节顺序。`切记不要使用 windows 的记事本改代码！`

## 命名规范
**目录及命名：**
* 项目文件夹：projectname
   * 样式文件夹：css
   *  脚本文件夹：js
   * 图片文件夹：img
   * index.html

**图片命名：**
* **图标图片：** 通用图标 icon-com-* ，系统图标 icon-sys-* ，其他图标 icon-other-* ，如 `icon-com-add`
* **其他图片：** 通用图片 fpx-com-* ，业务图片 fpx-sys-* ，其他图片 fpx-other-* ，如 `fpx-com-logo`

**文件命名：**<br>
确保文件命名总是以字母开头而不是数字，且字母一律小写，以点号连接且不带其他标点符号，如：
```html
<!-- HTML -->
jdc.html
jdc.list.html
jdc.detail.html

<!-- CSS -->
jdc.css
jdc.list.css
jdc.detail.css

<!-- JS -->
jdc.js
jdc.list.js
jdc.detail.js
```
**ClassName命名：**<br>
ClassName的命名应该尽量精短、明确，必须以字母开头命名，且全部字母为小写，单词之间统一使用横杠 `“-”` 连接。<br>
`命名原则：`基于姓氏命名法（继承 + 外来），在子孙模块数量可预测的情况下，严格继承祖先模块的命名前缀，当子孙模块超过4级或以上的时候，可以考虑在祖先模块内具有识辨性的独立缩写作为新的子孙模块。推荐示例如下：
```html
<div class="modulename">
	<div class="modulename-cover"></div>
	<div class="modulename-info">
    	<div class="modulename-info-user">
    		<div class="modulename-info-user-img">
    			<img src="" alt="">
    			<!-- 这个时候 miui 为 modulename-info-user-img 首字母缩写-->
    			<div class="miui-tit"></div>
    			<div class="miui-txt"></div>
    			...
    		</div>
    	</div>
    	<div class="modulename-info-list"></div>
	</div>
</div>
```

## 图片规范
**图片格式：**
* 正常图片优先考虑JPG格式
* 涉及透明/半透明特性使用PNG格式
* 涉及一些小动画效果使用GIF格式

**图片大小：**
* PC平台单张的图片的大小不应大于 200KB
* 移动平台单张的图片的大小不应大于 100KB

**图片质量：**
* 上线的图片都应该经过压缩处理，压缩后的图片不应该出现肉眼可感知的失真区域
* 60质量的JPEG格式图片与质量大于60的相比，肉眼已看不出明显的区别，因此保存 JPEG 图的时候，质量一般控制在60，若保真度要求高的图片可适量提高到 80，图片大小控制在 200KB 以内

**图片引入：**
* HTML 中图片引入不需添加 width、height 属性，alt 属性应该写上，如 `<img src="" alt="" >`
* CSS 中图片引入不需要引号，如 `.jdc {background-image: url(icon.png);}`

**CSS Sprites 使用建议：**
* 适合使用频率高更新频率低的小图标
* 尽量不留太多的空白
* 体积较大的图片不合并
* 确保要合并的小图坐标数值和合并后的 Sprites 图尺寸均为偶数

**Data URIs（base64编码）使用建议：**
* 适合更新频率高的小图片，如某些具备自定义功能的标题icon等
* 转换成 Base64 编码的图片应小于 2KB
* 移动端不使用 Base64 编码
* 要兼容 IE6/IE7 的不使用
