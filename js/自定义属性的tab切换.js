var btnArr = document.getElementById("btn").getElementsByTagName("span");
var conArr = document.getElementById("con").getElementsByTagName("div");
var len = btnArr.length;

for (var i = 0; i < len; i++) {
	btnArr[i].index = i;
	btnArr[i].onclick = function() {
		for(var j = 0; j < len; j++) {
			btnArr[j].className = "";
			conArr[j].className = "";
		}
		btnArr[this.index].className = "select";
		conArr[this.index].className = "show";
		console.log(i);
	}
}