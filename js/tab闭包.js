var titBtn = document.getElementById("tit").getElementsByTagName("span");
var conBtn = document.getElementById("con").getElementsByTagName("div");
var len = titBtn.length;

// 绑定事件
for (var i = 0; i < len; i++) {
	titBtn[i].onclick = function(x) {
		return function() {
			for (var j = 0; j < len; j++) {
				titBtn[j].className = "";
				conBtn[j].className = "";
			}
			titBtn[x].className = "select";
			conBtn[x].className = "show";
		}
	}(i);
}
