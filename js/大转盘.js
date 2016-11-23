// 功能描述：
// 当点击dot这个模块的时候，scrool这个转盘要转动起来。
// 当转盘转动30度的时候，会弹出相应内容的对话框，
// 然后隔一秒秒钟，转盘接着转动。
var scrool = document.getElementById("scroolBox");
	console.log(scroll);
var finger = document.getElementById("fingerBox");
var timer = null;
// 初始的角度
var star = 0;
// 角度叠加的变量
var speed = 1;
// 圈数
var num = 1;

scrool.onclick = function() {
	if(timer) {
		clearInterval(timer);
	}
	var mat = (Math.floor(Math.random() * 12)) * 30 + 15;
	// 停止的位置
	var dnc = (mat - 15) / 30;
	timer = setInterval(function() {
		star += speed;
		if(star >= 360) {
			star = 0;
			num++;
		}
		if(num >= 1) {
			speed = 5 - num;
			if(speed <= 1) {
				speed = 1;
			}
		}
		scrool.style.webkitTransform = "rotate(" + star + "deg)";
		if(star == mat && num >= 4) {
			clearInterval(timer);
			move(dnc + 1);
			star = 0;
			speed = 1;
			num = 1;
		}
	}, 16)

}
function move(x) {
	switch(x) {
		case 1 : alert("恭喜你，你中了中体倍力运动包一个"); break;
		case 2 : alert("恭喜你，你中了保湿液一瓶"); break;
		case 3 : alert("恭喜你，你中了张裕葡萄酒一瓶"); break;
		case 4 : alert("恭喜你，你中了利缘堂纯天然玫瑰水一瓶"); break;
		case 5 : alert("恭喜你，你中了ABC女士小礼包一份"); break;
		case 6 : alert("恭喜你，你中了晰特美容年卡一张"); break;
		case 7 : alert("恭喜你，你中了蒙牛真果粒一箱"); break;
		case 8 : alert("恭喜你，你中了男士香水一瓶"); break;
		case 9 : alert("恭喜你，你中了隆庆祥车载衣架一个"); break;
		case 10 : alert("恭喜你，你中了十二乐坊至尊组合礼品一份"); break;
		case 11 : alert("恭喜你，你中了爽肤水一瓶"); break;
		case 12 : alert("恭喜你，你中了手巾一条"); break;
	}
}
