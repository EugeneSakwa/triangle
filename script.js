
function resultCheck() {
	// body...
	var a = document.querySelector('[name="a"]').value;
	var b = document.querySelector('[name="b"]').value;
	var c = document.querySelector('[name="c"]').value;
	console.log(a,b,c)
	if (a == b && a == c) {
		alert("Triangle is equilateral.")
	}
	else if (a == b || a == c) {
		alert("Triangle is isoceles.")
	}
	else
	{
		alert("Triangle scalene.")
	}
}