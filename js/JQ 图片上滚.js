// 功能描述：当鼠标移入当前块的时候，当前块的背景色会发生改变，并且那块背景会跟着鼠标往下移动，同时右边会显示相应的内容
var main = $(".main span");
var move = $(".main div");
var scrool = $(".inner")
main.hover(function() {
	var index = $(this).index();
	move.css({"display": "block"});
	move.stop(true, true).animate({
		"top": $(this).index() * 53 + "px"
	}, 1000)
	scrool.stop(true, true).animate({
		"top": -($(this).index() * 214) + "px"
	}, 1000)
}, function() {
	move.css({"display": "none"});
})