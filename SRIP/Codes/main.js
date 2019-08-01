



function move() {
  var elem = document.getElementById("myBar");   
  var width = 1;
  
  function frame() {
    if (width >= 57) {
      clearInterval(id);

    } else {
      width=width+0.05; 
      elem.style.width = width + "%"; 
    }
  }
  var id = setInterval(frame, 10);
}
/*function move01() {
  var elem = document.getElementById("myBar");   
elem.removeAttribute("style","width");
}
function move02() {
  var elem = document.getElementById("myBar1");   
elem.removeAttribute("style","width");
}
*/
function move2() {


  var elem = document.getElementById("myBar1");   
  var width = 1;

  function frame() {
    if (width >= 45) {
      clearInterval(id);
    } else {
      width=width+0.06; 
      elem.style.width = width + "%"; 
    }
  }
  var id = setInterval(frame, 10);
}










/*
function t11()
{
var path = document.querySelector('#top1');
path.removeAttribute("style");
}
function t01()
{
var path = document.querySelector('#top');
path.removeAttribute("style");
}
function t21()
{
var path = document.querySelector('#top2');
path.removeAttribute("style");
}
function t31()
{
var path = document.querySelector('#top3');
path.removeAttribute("style");
}
function t41()
{
var path = document.querySelector('#top4');
path.removeAttribute("style");
}
*/




















