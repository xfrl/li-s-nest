# liYanlin-s-nest
Web development assignment for Li Yanlin
position 属性规定元素的定位类型。
background-size：100% 100%;---按容器比例撑满，图片变形；
background-size：cover;---把背景图片放大到适合元素容器的尺寸，图片比例不变，但是要注意，超出容器的部分可能会裁掉
z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。
background-repeat 属性设置是否及如何重复背景图像。
background-attachment :定义背景图片随滚动轴的移动方式
取值: scroll | fixed | inherit
scroll: 随着页面的滚动轴背景图片将移动
fixed: 随着页面的滚动轴背景图片不会移动
inherit: 继承初始值: scroll
text-transform 属性控制文本的大小写。
display 属性规定元素应该生成的框的类型。
overflow:hidden，那么该元素的内容若超出了给定的宽度和高度属性，那么超出的部分将会被隐藏，不占位。

<a>去下划线
a {
  color: #5cb48e;
  text-decoration: none !important;
}
!important为开发者提供了一个增加样式权重的方法
herf = "#" 意思是链接当前页面
<body style="overflow:-Scroll;overflow-x:hidden">去掉横向滚动条

bootstrap栅栏系统css中的col-xs-*、col-sm-*、col-md-* 的意义：
.col-xs- 超小屏幕 手机 (<768px)
.col-sm- 小屏幕 平板 (≥768px)
.col-md- 中等屏幕 桌面显示器 (≥992px)
.col-lg- 大屏幕 大桌面显示器 (≥1200px)

<form action="#">// 提交数据到本页面

bootstrap：
.container 类 (为第一级div设置) 可以理解为它就是一个“大容器”
.row类 (为第二级div设置) 容器中可以有很多“行” “装”内容

<fieldset> 标签将表单内容的一部分打包，生成一组相关表单的字段。
当一组表单元素放到 <fieldset> 标签内时，浏览器会以特殊方式来显示它们，它们可能有特殊的边界、3D 效果，或者甚至可创建一个子表单来处理这些元素。

offset表示偏移，而col-md-offset-2表示向左偏移两个单位。

为什么使用严格模式  (function($){
		"use strict";       :
消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
消除代码运行的一些不安全之处，保证代码运行的安全；
提高编译器效率，增加运行速度；
为未来新版本的Javascript做好铺垫。
"严格模式"体现了Javascript更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经支持它，许多大项目已经开始全面拥抱它。

attr() 方法设置或返回被选元素的属性和值。

slideUp()通过使用滑动效果，隐藏被选元素，如果元素已显示出来的话。
slideDown() 方法通过使用滑动效果，显示隐藏的被选元素。
fadeOut() 方法使用淡出效果来隐藏被选元素，假如该元素是隐藏的。
slideToggle() 方法通过使用滑动效果（高度变化）来切换元素的可见状态。
如果被选元素是可见的，则隐藏这些元素，如果被选元素是隐藏的，则显示这些元素。
