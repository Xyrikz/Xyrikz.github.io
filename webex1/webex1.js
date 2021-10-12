document.getElementById('radio1').checked = true;
let slide = 2;
setInterval(function () {
	document.getElementById('radio' + slide).checked = true;
	slide++;
	if (slide > 3) {
		slide = 1;
	}
}, 5000);
