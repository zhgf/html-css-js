// 获取标签
// var titArr = document.getElementById("tits").getElementsByTagName("span");
// var conArr = document.getElementById("cons").getElementsByTagName("div");
function TabSwitch(TabTit, TabCon) {
	this.titArr = document.getElementById(TabTit).getElementsByTagName("span");
	this.conArr = document.getElementById(TabCon).getElementsByTagName("div");
	this.len = this.titArr.length;
	this.addEvent();
}
// 绑定事件
TabSwitch.prototype.addEvent = function() {
	var _this = this;
	for(var i = 0; i < this.len; i++) {
		this.titArr[i].index = i;
		this.titArr[i].onclick = function() {
			_this.handleClass(this.index);
		}
	}
}
// 控制标签样式
TabSwitch.prototype.handleClass = function(index) {
	for(var i = 0; i < this.len; i++) {
		this.titArr[i].className = "";
		this.conArr[i].className = "";
	}
	this.titArr[index].className = "select";
	this.conArr[index].className = "show";
}

var tab = new TabSwitch("tits", "cons");