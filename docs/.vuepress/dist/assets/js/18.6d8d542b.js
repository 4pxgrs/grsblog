(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{182:function(a,t,e){"use strict";e.r(t);var s=e(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"webapp-meta"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webapp-meta","aria-hidden":"true"}},[a._v("#")]),a._v(" WebApp Meta")]),a._v(" "),e("h3",{attrs:{id:"webapp-meta-标签设置-ios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webapp-meta-标签设置-ios","aria-hidden":"true"}},[a._v("#")]),a._v(" WebApp Meta 标签设置(iOS)")]),a._v(" "),e("blockquote",[e("p",[a._v("A web application is designed to look and behave in a way similar to a native application—for example, it is scaled to fit the entire screen on iOS. You can tailor your web application for Safari on iOS even further, by making it appear like a native application when the user adds it to the Home screen. You do this by using settings for iOS that are ignored by other platforms.")])]),a._v(" "),e("p",[a._v("WebApp目的在于使其界面和行为在某种程度上类似于原生APP应用。例如，WebApp 可以在 iOS 设备上通过缩放去适配设备屏幕。当用户将WebApp程序添加到主屏幕后，会使得它看上去像原生APP一样，以此，你可以进一步为 Safari 定制自己的 WebApp，而使用某些专为 iOS 平台设定的设置就可以做到。"),e("br"),e("br"),a._v("\nWebApp可以通过设置 meta 标签来改变页面的一些表现，有些 meta 设置在 Safari 应用或原生 App 的内嵌网页中都可以生效，而有些设置侧需要将应用添加到主屏幕的时候才会生效。")]),a._v(" "),e("h2",{attrs:{id:"viewport-meta-tag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#viewport-meta-tag","aria-hidden":"true"}},[a._v("#")]),a._v(" Viewport Meta Tag")]),a._v(" "),e("h3",{attrs:{id:"通用类设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通用类设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 通用类设置")]),a._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("meta")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("viewport"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("width=device-width, initial-scale=1.0, \nmaximum-scale=1.0, user-scalable=no"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("ul",[e("li",[a._v("width – viewport的宽度")]),a._v(" "),e("li",[a._v("height – viewport的高度")]),a._v(" "),e("li",[a._v("initial-scale – 初始的缩放比例")]),a._v(" "),e("li",[a._v("minimum-scale – 允许用户缩放到的最小比例")]),a._v(" "),e("li",[a._v("maximum-scale – 允许用户缩放到的最大比例")]),a._v(" "),e("li",[a._v("user-scalable – 是否允许用户缩放")])]),a._v(" "),e("h3",{attrs:{id:"safari-on-ios-viewport"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#safari-on-ios-viewport","aria-hidden":"true"}},[a._v("#")]),a._v(" Safari on iOS viewport")]),a._v(" "),e("blockquote",[e("p",[a._v("The width of the viewport in pixels. The default is 980. The range is from 200 to 10,000."),e("br"),e("br"),a._v("\nThe minimum-scale and maximum-scale properties also affect the behavior when changing orientations. The range of these property values is from >0 to 10.0. The default value for minimum-scale is 0.25 and maximum-scale is 5.0")])]),a._v(" "),e("blockquote",[e("p",[a._v("user-scalable – The default is yes."),e("br"),a._v("\nSetting user-scalable to no also prevents a webpage from scrolling when entering text in an input field.")])]),a._v(" "),e("ul",[e("li",[a._v("默认宽度是 980px，范围从 200px 到 10000px")]),a._v(" "),e("li",[a._v("initial-scale 缩放比例范围值是 从 >0 到 10 之间")]),a._v(" "),e("li",[a._v("minimum-scale 默认值是 0.25")]),a._v(" "),e("li",[a._v("maximum-scale 默认值是 5")]),a._v(" "),e("li",[a._v("user-scalable – 默认值是 yes，设置 no 还可以在文本框输入文本的时候阻止页面滚动")])]),a._v(" "),e("p",[a._v("更多关于 Safari on iOS viewport 的设置:"),e("br"),a._v(" "),e("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html#//apple_ref/doc/uid/TP40006509-SW19",target:"_blank"}},[a._v("Configuring the Viewport")]),e("br"),a._v(" "),e("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html",target:"_blank"}},[a._v("Safari HTML Reference")])]),a._v(" "),e("h2",{attrs:{id:"apple-specific-meta-tag-keys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apple-specific-meta-tag-keys","aria-hidden":"true"}},[a._v("#")]),a._v(" Apple-Specific Meta Tag Keys")]),a._v(" "),e("h3",{attrs:{id:"apple-mobile-web-app-capable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apple-mobile-web-app-capable","aria-hidden":"true"}},[a._v("#")]),a._v(" apple-mobile-web-app-capable")]),a._v(" "),e("p",[a._v("设置 WebApp 是否进入全屏模式，该设置需要添加到主屏幕才生效")]),a._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("meta")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("apple-mobile-web-app-capable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("yes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("blockquote",[e("p",[a._v("If content is set to yes, the web application runs in full-screen mode;otherwise, it does not. The default behavior is to use Safari to display web content.You can determine whether a webpage is displayed in full-screen mode using the window.navigator.standalone read-only Boolean JavaScript property.")])]),a._v(" "),e("ul",[e("li",[a._v("content设置 yes 进入全屏模式")]),a._v(" "),e("li",[a._v("默认会启动 Safari 应用，使用 Safari 应用浏览")]),a._v(" "),e("li",[a._v("通过检测 window.navigator.standalone 的 Boolean 值可以判断 web 应用是否处于全屏模式")])]),a._v(" "),e("h3",{attrs:{id:"apple-mobile-web-app-status-bar-style"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apple-mobile-web-app-status-bar-style","aria-hidden":"true"}},[a._v("#")]),a._v(" apple-mobile-web-app-status-bar-style")]),a._v(" "),e("p",[a._v("为 webapp 设置状态栏样式")]),a._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("meta")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("apple-mobile-web-app-status-bar-style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("black"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("blockquote",[e("p",[a._v("This meta tag has no effect unless you first specify full-screen mode as described in apple-apple-mobile-web-app-capable.")])]),a._v(" "),e("p",[a._v("If content is set to default, the status bar appears normal. If set to black, the status bar has a black background. If set to black-translucent, the status bar is black and translucent. If set to default or black, the web content is displayed below the status bar. If set to black-translucent, the web content is displayed on the entire screen, partially obscured by the status bar. The default value is default.")]),a._v(" "),e("ul",[e("li",[a._v("此 meta 设置只在全屏模式生效")]),a._v(" "),e("li",[a._v("默认值是 default")]),a._v(" "),e("li",[a._v("content=”black”，状态栏背景黑色，网页内容在状态栏下面")]),a._v(" "),e("li",[a._v("content=”black-translucent”，状态栏半透明，背景黑色，网页内容占满全屏")])]),a._v(" "),e("p",[a._v("该设置在 iOS6 和 iOS7 表现还可以，但到了 iOS8 后会出现各种问题，而且在 iOS9 中并没有生效。"),e("br"),a._v("\n参阅："),e("a",{attrs:{href:"https://stackoverflow.com/questions/25884806/ios-8-web-app-status-bar-position-and-resizing-problems",target:"_blank"}},[a._v("iOS 8: web app status bar position and resizing problems")])]),a._v(" "),e("h3",{attrs:{id:"format-detection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#format-detection","aria-hidden":"true"}},[a._v("#")]),a._v(" format-detection")]),a._v(" "),e("p",[a._v("自动识别页面中有可能是电话格式的数字")]),a._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("meta")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("format-detection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("telephone=no"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("blockquote",[e("p",[a._v("By default, Safari on iOS detects any string formatted like a phone number and makes it a link that calls the number. Specifying telephone=no disables this feature.")])]),a._v(" "),e("p",[a._v("iOS中的 Safari 会默认识别与电话格式相似的数字并生成一个可以拉起电话应用并将该数字作为电话号码拨打的链接。定义 telephone=no 可以屏蔽该功能"),e("br"),a._v("\n更多 WebApp 设置参考 "),e("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4",target:"_blank"}},[a._v("Configuring Web Applications")])])])}],!1,null,null,null);t.default=n.exports}}]);