var starBtn = document.getElementById("star");
var endBtn = document.getElementById("end");
var clearBtn = document.getElementById("clear");
var oddBtn = document.getElementById("odd");
var evenBtn = document.getElementById("even");
var resultBtn = document.getElementById("result");

// 当点击“奇数求和”这一块的时候，如果输入框里面输入的是奇数的时候，就把和赋给resultBtn
oddBtn.onclick = function() {
	resultBtn.innerHTML = add();
}
// 当点击“偶数求和”这一块的时候，如果输入框里面输入的是偶数的时候，就把和赋给resultBtn
evenBtn.onclick = function() {
	resultBtn.innerHTML = eve();
}
// 当点击清空按钮的时候，要清空resultBtn里面的值，还有输入框里面的值
clearBtn.onclick = function() {
	resultBtn.innerHTML = "";
	starBtn.value = "";
	endBtn.value = "";
}
function add() {
	// 这是判断输入框里面输入是否是奇数
	if((starBtn.value % 2 == 1) && (endBtn.value % 2 == 1)) {
		return parseFloat(starBtn.value) + parseFloat(endBtn.value);
	}
	
}
function eve() {
	// 这是判断输入框里面输入是否是偶数
	if(starBtn.value % 2 == 0 && endBtn.value % 2 == 0) {
		return parseFloat(starBtn.value) + parseFloat(endBtn.value);
	}
}