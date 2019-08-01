	function t3()
{
	var path3 = document.querySelector('#top3');
var length3 = path3.getTotalLength();
path3.style.transition = path3.style.WebkitTransition = 'none';
path3.style.strokeDasharray = length3 + " " + length3;
path3.style.strokeDashoffset = '0';


path3.style.transition = path3.style.WebkitTransition = 'stroke-dashoffset 12s ease-in-out';
path3.style.strokeDashoffset = -length3;
}