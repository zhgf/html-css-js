//功能描述： 当鼠标点击按钮的时候，块的高度由li内容撑开变大，同时按钮的背景色会改变。当鼠标再次点击的时候，块的高度会变小，同时按钮背景色会变回原来的颜色
var isChange = true;
var len = $(".up ul").eq(0).children("li").length;

$(".up ul").animate({
	"height": "308px"
});

$(".up div").click(function() {
	var _this = $(this);
	if (isChange) {
		_this.siblings("ul").animate({
			"height": len * 30 + "px"
		},function() {
			// 直接改变样式
			// _this.css({"background-color": "yellow"})
			// 上下这两种方法都可以改变div的背景色
			// 而这种是通过添加类名的方法，来改变样式的
			_this.addClass("min")	
			isChange = false;
		})	
	} else {
		_this.siblings("ul").animate({
			"height": "308px"
		},function() {
			_this.removeClass("min")
			isChange = true;
		})
	}
})