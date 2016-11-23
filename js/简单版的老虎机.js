var conBox = document.getElementById("con").getElementsByTagName("span");
var timer = null;
var len = conBox.length;

timer = setInterval(function() {
	for(var i = 0; i < len; i++) {
		if(timer) {
			clearInterval(timer);
		}
		conBox[i].index = i;
			for(var j = 0; j < len; j++) {
				conBox[j].className = "";
			}
			conBox[this.index].className = "select";
	}
},1000)
