// 功能描述：
// 当时针走一格的时候，分针走360度，也就是1小时是60分钟
// 当秒针走360度，分针走一小格，也就是1分钟是60秒

var hour = document.getElementById("hourBox");
var minute = document.getElementById("minuteBox");
var second = document.getElementById("secondBox");
var timer = null;

timer = setInterval(function() {
	var dates = new Date();
	// hours每走一格，是30度
	var hours = dates.getHours() * 30;
	// minutes是每走一格，是6度
	var minutes = dates.getMinutes() * 6;
	// seconds是每走一格也是6度
	var seconds = dates.getSeconds() * 6;
	// 秒钟是每次6度6度的走的
	seconds += 6;
	// 秒钟移动多少，分钟相应的跟着这个比例"seconds / 60"缓动多少
	minutes += (seconds / 60);
	hour.style.webkitTransform = "rotate(" + hours  + "deg)";
	minute.style.webkitTransform = "rotate(" + minutes + "deg)";
	second.style.webkitTransform = "rotate(" + seconds + "deg)";
}, 0)