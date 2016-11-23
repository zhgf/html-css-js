// 获取标签
// 构造函数里面放的是属性
function TabSwitch(tabTit, tabCon) {
	this.titBtn = document.getElementById(tabTit).getElementsByTagName("span");
	this.conBtn = document.getElementById(tabCon).getElementsByTagName("div");
	this.len = this.titBtn.length;
	// 调用绑定事件方法
	this.addEvent();
}
// 绑定事件
// 原型里面放的是方法
TabSwitch.prototype.addEvent = function() {
	// 防止指向错误
	var _this = this;
	for(var i = 0; i < this.len; i++) {
		// 自定义属性
		this.titBtn[i].index = i;
		this.titBtn[i].onclick = function() {
			_this.handleClass(this.index);
		}
	}
}
// 控制标签的样式
TabSwitch.prototype.handleClass = function(index) {
	// 清空类名
	for(var i = 0; i < this.len; i++) {
		this.titBtn[i].className = "";
		this.conBtn[i].className = "";
	}
	// 添加类名
	this.titBtn[index].className = "show";
	this.conBtn[index].className = "select";
}
new TabSwitch("tits", "cons");