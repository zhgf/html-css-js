var cons = document.getElementById("con").getElementsByTagName("li");
var timer = null;
var sum = 180;
var i = -1;

timer = setInterval(move, 500);
function move() {
	i++;
	if(i > 7) {
		i = 0;
		sum += 180;
	}
	// rotate3d(0, 0, 0, 30deg);
	cons[i].style.transform = "rotate3d(1, 0, 0," + sum + "deg)";
}