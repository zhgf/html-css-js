// 功能描述：1.当鼠标移入左边那个块的时候，右边块要显示相应的内容，
// 2.并且鼠标移入到哪个位置，右边要把相应的位置给放大比例显示出来。
// 3.当鼠标称出的时候，右边的那块不显示任何内容

// 获取标签
var mapL = document.getElementById("conL");
var wraps = document.getElementById("wrap");
var scrollBox = document.getElementById("scroll");
var	mapR = document.getElementById("conR");
var outerBox = document.getElementById("outer");
var limiX = mapL.clientWidth - scrollBox.offsetWidth;
var limiY = mapL.clientHeight - scrollBox.offsetHeight;
var scale = 0;

// 绑定事件
mapL.onmouseover = function(e) {
	mapR.style.display = "block";
	scrollBox.style.display = "block";


	// 以下是处理事件对象的兼容问题
	var evt = e || window.event;
	// 阻止默认
	evt.preventDefault();
	// 鼠标的初始值
	var starX = evt.clientX;
	var starY = evt.clientY;
	// 鼠标可以在移动块的中间位置
	scrollBox.style.left = (starX - wraps.offsetLeft - (scrollBox.offsetWidth) / 2) + "px";
	scrollBox.style.top = (starY - wraps.offsetTop - (scrollBox.offsetHeight) / 2) + "px";
	// 与父元素之间的距离
	var distanceX = scrollBox.offsetLeft;
	var distanceY = scrollBox.offsetTop;

	document.onmousemove = function(e) {
		// 以下是处理事件对象的兼容问题
		var evt = e || window.event;
		// 阻止默认
		evt.preventDefault();
		// 计算拖拽块移动的距离
		var endX = evt.clientX - starX + distanceX;
		var endY = evt.clientY -starY + distanceY;

		// 内容区域的可滚动的范围          内容区域滚动的距离
		// ---------------------- ======== ------------------
		// 滚动条可滚动的范围               滚动条滚动的距离
		
		scaleX = outerBox.offsetWidth / mapL.offsetWidth;
		// scaleY = outerBox.offsetHeight / mapL.offsetHeight;
		mapR.scrollLeft = endX * scaleX;
		mapR.scrollTop = endY * scaleX;
		if(endX <= 0) {
			endX = 0;
		}
		if(endX >= mapL.clientWidth - scrollBox.offsetWidth) {
			endX = mapL.clientWidth - scrollBox.offsetWidth;
		}
		if(endY <= 0) {
			endY = 0;
		}
		if(endY >= mapL.clientHeight - scrollBox.offsetHeight) {
			endY = mapL.clientHeight - scrollBox.offsetHeight;
		}
		
		scrollBox.style.left = endX + "px";
		scrollBox.style.top = endY + "px";
	}
	
}

document.onmouseout = function() {
	document.onmousemove = null;
	scrollBox.style.display = null;
	mapR.style.display = null;
}