// 获取标签
var boxs = document.getElementById("box");
var conBox = document.getElementById("cons");
// 点击上下页按钮移动的初始值
var start = 0;

// 用到事件的委托，事件的冒泡，用if...else做兼容处理
if(boxs.addEventListener) {
	boxs.addEventListener("click", show, false);
} else {
	boxs.attachEvent("onclick", show);
}

/*
 *[获取事件目标对象]
 *@param {[对象]} event [事件对象]
 *event.target和event.srcElement是事件目标对象
 * eve做兼容处理
 * start移动的距离
 * author 王亚英
 * 2015.07.08
 */
function show(event) {
	var eve = event.target || event.srcElement;
	start += 610;
	if(start >= 610) {
		start = -610;
	}
	conBox.style.webkitTransform = "translateX(" + start + "px)";
}