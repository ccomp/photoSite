var vis = [];

function makeVisible(x)
{
	var op = 1;
	var y = document.getElementById(x);
	if (vis.length > 0) {
		for (var i = 0; i < vis.length; i++) {
			var z = document.getElementById(vis[i]);
			if (z == y) return;
			y.style.opacity = 1;
			y.style.display = 'block';

			var timer = setInterval(function () {
				if (op <= 0.1)
				{
					clearInterval(timer);
					z.style.display = 'none';
					z.style.opacity = 1;
				}
				z.style.opacity = op;
				z.style.filter = 'alpha(opacity=' + op * 100 + ")";
			    op -= op * 0.1;
			}, 50);
			op = 1;
			vis.splice(i, 1);
		}
	} else {
		y.style.display = 'block';
		y.style.opacity = 1;
		y.style.filter = '';
	}
	vis.push(x);
}

window.onload = function init()
{
	vis = ["intro"];
};