// 功能描述：当鼠标点击右键的时候，会显示出导航栏的模块
// oncontextmenu----->鼠标右键
// return false--->阻止鼠标右键功能的默认事件
var menu = document.getElementById("mun");

document.oncontextmenu = function(e) {
	// 事件对象的兼容处理
	var evt = e || window.event;
	// 鼠标的坐标
	var menuLeft = evt.clientX;
	var menuTop = evt.clientY;

	// 当鼠标右击的时候，会显示menu这个模块的内容
	menu.style.display = "block";
	// 防止右击的时候最右边或者最底部跑出去
	if(document.body.clientWidth - menuLeft < menu.clientWidth) {
		menu.style.left = menuLeft - menu.clientWidth + "px";
	} else {
		menu.style.left = menuLeft + "px";
	}
	if(document.body.scrollHeight - menuTop < menu.clientHeight) {
		menu.style.top = menuTop - menu.clientHeight + "px";
	} else {
		menu.style.top = menuTop + "px";
	}
	return false;
}