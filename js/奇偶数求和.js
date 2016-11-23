var odd = document.getElementById("odd");
var startInput = document.getElementById("start");
var endInput = document.getElementById("end");
var result = document.getElementById("result");
var resetBox = document.getElementById("resetBox");
var clearBtn = document.getElementById("clear");

odd.onclick = function() {
	var startValue = parseInt(startInput.value);
	var endValue = parseInt(endInput.value);
	if(isNaN(startValue)) {
		alert("请输入起始值");
	} else if(isNaN(endValue)) {
		alert("请输入结束值");
	} else if(endValue < startValue) {
		alert("你输入的起始值大于结束值了");
	} else {
		var sum = 0;
		for(var i = startValue; i <= endValue; i++) {
			if(i % 2 == 1) {
				sum = sum + i;			
			}
		}
	result.innerHTML = sum;
	resetBox.className = "odd";
	}
}
even.onclick = function() {
	var startValue = parseInt(startInput.value);
	var endValue = parseInt(endInput.value);
	if(isNaN(startValue)) {
		alert("请输入起始值");
	} else if(isNaN(endValue)) {
		alert("请输入结束值");
	} else if(endValue < startValue) {
		alert("你输入的起始值大于结束值了");
	} else {
		var sum = 0;
		for(var i = startValue; i <= endValue; i++) {
			if(i % 2 == 0) {
				sum = sum + i;
			}
		}
	result.innerHTML = sum;
	resetBox.className = "even";
	}
}

clearBtn.onclick = function() {
	result.innerHTML = "";
	endInput.value = "";
	startInput.value = "";
	resetBox.className = "resetColor";
}