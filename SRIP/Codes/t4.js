function t4()
{

	var path4 = document.querySelector('#top4');
var length4 = path4.getTotalLength();
path4.style.transition = path4.style.WebkitTransition = 'none';
path4.style.strokeDasharray = length4 + " " + length4;
path4.style.strokeDashoffset = '0';


path4.style.transition = path4.style.WebkitTransition = 'stroke-dashoffset 12s ease-in-out';
path4.style.strokeDashoffset = -length4;
	}