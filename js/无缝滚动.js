// 获取标签
var outerBox = document.getElementById("outer");
var innerBox = document.getElementById("inner").getElementsByTagName("img");
var timer = null;
// 让图片滚动起来
function scroll() {
	outerBox.scrollLeft += 2;
	if (outerBox.scrollLeft >= outerBox.scrollWidth - outerBox.clientWidth) {
		outerBox.scrollLeft = 0;
	}
    // 要让图片滚完一张的时候，停一秒再滚动
	if (outerBox.scrollLeft % 200 == 0) {
		clearInterval(timer);
		timer = setTimeout(move, 1000);
	}
}
function move() {
	clearInterval(timer);
	timer = setInterval(scroll, 10);
} move();
// 当鼠标移上去的时候，图片滚动要停止
outerBox.onmouseover = function() {
	clearInterval(timer);
}
// 当鼠标移出来的时候，图片要接着滚动
outerBox.onmouseout = function() {
	move();
}