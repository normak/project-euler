//returns the sum of multiples of 3's and 5's under a number chosen by the user

var result = function(number) 
{
	var sum = 0;
	for (i =1; i < number; i++) 
	{
		if (i % 3 === 0 || i % 5 === 0) 
		{
			sum += i;
		}
	}
	document.getElementById('result').innerHTML = sum;
}