// 获取标签
var texts = document.getElementById("textCon");
var bnts = document.getElementById("bnt");
var cons = document.getElementById("con");
var timer = null;

// 绑定事件
bnts.onclick = function() {
	if(timer) {
		clearInterval(timer);
	}
	var time = texts.value;
	timer = setInterval(function() {
		// 获取设置的时间
		var dates = new Date(time);
		// 获取当系统的时间
		var now = new Date();
		// 把当前的时间转成毫秒数
		var nowM = now.getTime();
		// 把设置的时间转成毫秒数
		var dateM = dates.getTime();
		// 计算设置与当前的毫秒数差
		var poor = dateM - nowM;
		// 然后把计算出来的总毫秒数先换成天，然后向下取整，把余下的小数点部分再转成小时，
		// 再向下取整，再把余下的小数部分再转分钟，然后向下取整，把余下的小数点部分再转成秒钟
		var day = Math.floor(poor / (1000 * 60 * 60 * 24));
		var hours = Math.floor(poor % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
		var minutes = Math.floor(poor % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60));
		var seconds = Math.floor(poor % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000);
		cons.innerHTML = (day + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒");
	}, 16)
}