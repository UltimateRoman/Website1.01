navigator.geolocation.getCurrentPosition(function(position)
{
 document.write(position.coors.latitde + " , " + position.coors.longitude);
})
function hel()
{
 let a = document.querySelector('#h').value;
 alert('Hello ' + a);
 document.getElementById('name').innerHTML = ('Welcome , ' + a);
}
var c = 0;
function counter()
{
 c = c+1;
 document.getElementById('count').innerHTML = c;
}
function red()
{
 document.querySelector('body').style.backgroundColor = 'red';
}
function green()
{
 document.querySelector('body').style.backgroundColor = 'green';
}
function blue()
{
 document.querySelector('body').style.backgroundColor = 'blue';
}
function white()
{
 document.querySelector('body').style.backgroundColor = 'white';
}
function font()
{
 document.querySelector('#txt').style.fontSize = this.value;
}
function blink()
{
 b = document.getElementById('blink');
 if(b.style.visibility == 'hidden')
 {
  b.style.visibility = 'visible';
 }
 else
 {
  b.style.visibility = 'hidden';
 }
}
window.setInterval(blink,400);
