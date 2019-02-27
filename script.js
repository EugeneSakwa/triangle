
function resultCheck() {
	// body...
	var a = document.querySelector('[name="a"]').value;
	var b = document.querySelector('[name="b"]').value;
	var c = document.querySelector('[name="c"]').value;
	// display values of a, b and c as provided in the console
	console.log(a,b,c)
	// check if the value is greater than zero
	if ((a > 1 && b > 1 && c > 1) && (b+c) > a && (a+b) > c && (c+a) > b) {
		if (true) {
			if (a == b && a == c) {
				alert("Triangle is equilateral.")
				return 
			}
			// check if two of the values are equal
			else if (a == b || a == c || b == c) {
				alert("Triangle is isosceles.")
			}
			else if (a <= 0 && b <= 0 && c <= 0) {
				alert("Not a triangle.")
			}
			else
				// if all other values are present but not equal
			{
				alert("Triangle is scalene.")
			}
		}
		else
		{
			alert("Not a triangle.");
		}
	}
	else{
		alert("Triangle cannot be formed")
	}
}
