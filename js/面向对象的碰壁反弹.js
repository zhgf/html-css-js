// 构思需要哪些属性？
// posX posY inner outer limitX limitY timer
function Bounce(parentId) {
	var _this = this;
	this.inner = document.createElement("div");
	this.outer = document.getElementById(parentId);
	this.outer.appendChild(this.inner);
	this.moveX = true;
	this.moveY = true;
	this.limitX = this.outer.clientWidth - this.inner.offsetWidth;
	this.limitY = this.outer.clientHeight - this.inner.offsetHeight;
	// 位置随机
	this.posX = Math.floor(Math.random() * this.limitX);
	this.posY = Math.floor(Math.random() * this.limitY);
	// 速度
	this.speed = 3;
	this.timer = setTimeout(function() {
		_this.move();
		// arguments.callee这个指向的是函数自己（就是本身的函数名）
		setTimeout(arguments.callee, 16)
	})
}

Bounce.prototype.move = function() {
	if (this.moveX) {
		this.posX += this.speed;
		if (this.posX >= this.limitX) {
			this.posX = this.limitX;
			this.moveX = false;
		}
	} else {
		this.posX -= this.speed;
		if (this.posX <= 0) {
			this.posX = 0;
			this.moveX = true;
		}
	}
	if (this.moveY) {
		this.posY += this.speed;
		if (this.posY >= this.limitY) {
			this.posY = this.limitY;
			this.moveY = false;
		}
	} else {
		this.posY -= this.speed;
		if (this.posY <= 0) {
			this.posY = 0;
			this.moveY = true;
		}
	}
	this.rePos();
}
Bounce.prototype.rePos = function() {
	this.inner.style.left = this.posX + "px";
	this.inner.style.top = this.posY + "px";
}
// new Bounce("outer", "inner");
/*****************************************************************************************************/
// 3.重写不同的方法

function RanBall(parentId) {
	// 1.属性的继承
	Bounce.call(this, parentId);

	// 颜色随机
	this.colorR = Math.floor(Math.random() *256);
	this.colorG = Math.floor(Math.random() *256);
	this.colorB = Math.floor(Math.random() *256);

	// 重写属性
	// 速度随机
	this.speed = Math.floor(Math.random() * 8 + 1);
	// 方向随机
	this.moveX = Math.floor(Math.random() * 2);
	this.moveY = Math.floor(Math.random() * 2);
	if (this.moveX == 1) {
		this.moveX = true;
	} else {
		this.moveX = false;
	}
	
	if (this.moveY == 1) {
		this.moveY = true;
	} else {
		this.moveY = false;
	}
	
	// 调用初始化方法
	this.initial();
}
// 2.方法的继承
for (var i in Bounce.prototype) {
	RanBall.prototype[i] = Bounce.prototype[i];
};
// 3.添加新的方法
RanBall.prototype.initial = function() {
	this.inner.style.backgroundColor = "rgb(" + this.colorR + "," + this.colorG + "," + this.colorB + ")";
}
// 重写控制位置的方法
RanBall.prototype.rePos = function() {
	this.inner.style.webkitTransform = "translateX(" + this.posX + "px) translateY(" + this.posY + "px)";
}
for (var i = 0; i < 300; i++) {
	new RanBall("outer");
}
// new RanBall("outer", "inner");