// 获取标签
var outerBox = document.getElementById("outer");
var innerBox = document.getElementById("inner").getElementsByTagName("img");
var btnBox = document.getElementById("btn").getElementsByTagName("span");
var timer = null;
var timerIndex = null;
var len = btnBox.length;

/*
 *[startMove大图滚动函数]
 *
 *
 */
function startMove(endPos) {
	// 获取起点
	var startPos = outerBox.scrollLeft;
	console.log(startPos);
	var speed;

	if(timer) {
		clearInterval(timer);
	}
	timer = setInterval(move, 20);
	
	/*
	 *[move实现缓冲运动的]
	 *
	 *
	 */
	function move() {
		// 步长 = （终点 - 起点） / 步数;
		speed = (endPos - startPos) / 10;
		console.log(endPos);
		speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
		startPos += speed;

		// 实现自动贴合，并清除计时器
		if (Math.abs(endPos - startPos) <= 10) {
			startPos = endPos;
			clearInterval(timer);
			// 如果缓冲函数执行完后，把timer赋值为空
			timer = null;
		} ;
		outerBox.scrollLeft = startPos;
	}
}

var index = 0;

/*
 *[indexChange利用索引值多次滚动]
 *
 *
 *
 */
function indexChange() {
	index++;
	if (index == 5) {
		index = 0;
	}
	startMove(index * 200);
}
timerIndex = setInterval(indexChange, 2000);
// 添加序号功能
for (var i = 1; i < len - 1; i++) {
	btnBox[i].index = i;
	btnBox[i].onclick = function() {
		// 清除自动滚动的计时器，防止冲突
		clearInterval(timerIndex);
		// 根据目标值进行滚动
		// 序号功能的索引要与自动滚动的索引保持一致
		index = this.index -1;
		startMove(index * 200);
		// 启动自动滚动的功能
		timerIndex = setInterval(indexChange, 2000);
	}
}
// 添加左键功能
btnBox[0].onclick = function() {
	// 如果缓冲函数还未执行完（起点还未达到终点），不能执行点击
	if(timer) {
		// 直接返回控制权（click里面的代码不执行）
		return;
	};
	// 清除自动滚动的计时器
	clearInterval(timerIndex);
	index--;
	if (index == -1) {
		index = 4;
	}
	// console.log(index);
	startMove(index * 200);
	// 启动自动滚动的功能
	timerIndex = setInterval(indexChange, 2000);
}
// 添加右键功能
btnBox[6].onclick = function() {
	// 如果缓冲函数还未执行完（起点还未达到终点），不能执行点击
	if(timer) {
		// 直接返回控制权（click里面的代码不执行）
		return;
	};
	// 清除自动滚动的计时器
	clearInterval(timerIndex);
	indexChange();
	// 启动自动滚动的功能
	timerIndex = setInterval(indexChange, 2000);
}