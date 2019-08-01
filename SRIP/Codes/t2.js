function t2()
{
	var path2 = document.querySelector('#top2');
var length2 = path2.getTotalLength();
path2.style.transition = path2.style.WebkitTransition = 'none';
path2.style.strokeDasharray = length2 + " " + length2;
path2.style.strokeDashoffset = '0';



path2.style.transition = path2.style.WebkitTransition = 'stroke-dashoffset 12s ease-in-out';
path2.style.strokeDashoffset = length2;

	}