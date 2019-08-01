function t()
{
	var path = document.querySelector('#top');
var length = path.getTotalLength();
path.style.transition = path.style.WebkitTransition = 'none';
path.style.strokeDasharray = length + " " + length;
path.style.strokeDashoffset = '0';


path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 12s ease-in-out';
path.style.strokeDashoffset = length;
	}