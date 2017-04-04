var vis = [];

function makeVisible(x)
{
	var op = 1;
	var y = document.getElementById(x);
	if (vis.length > 0) {
		for (var i = 0; i < vis.length; i++) {
			y.style.opacity = 1;
			y.style.display = 'block';
			var z = document.getElementById(vis[i]);
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

/*

function gettingStarted()
{
	var op = 1;

	var article = document.getElementById("mid");
	var fig = document.getElementById("theFig");
	var mano = document.getElementById("mano");

	var timer = setInterval(function () {
		if (op <= 0.1)
		{
			clearInterval(timer);
			mano.style.display = 'none';
			mano.style.display = 'hidden';
			fig.style.display = 'none';
			fig.style.display = 'hidden';
			article.style.visibility = 'visible';
		}
		fig.style.opacity = op;
		fig.style.filter = 'alpha(opacity=' + op * 100 + ")";
		mano.style.opacity = op;
		mano.style.filter = 'alpha(opacity=' + op * 100 + ")";
	    op -= op * 0.1;
	}, 50);
	article.style.paddingTop = "100px";
	var arr = ["mid"];
	vis = arr;
}
*/