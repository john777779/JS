var body = document.getElementsByTagName('body')[0],
 div = document.createElement('div'),
 span = document.createElement('span'),
 msec = document.createElement('p'),
 start = document.createElement('a');
 start.className = "start";
 var clear = document.createElement('a');
 clear.classList.add('clear');
 //elem = document.getElementsByClassName('start'),
var eClear = document.querySelector('.clear'),
 timer = {
   hours: 00,
   minutes: 00,
   sec: 00,
   milisec: 000
 };

 function count() {
   start.innerHTML = 'Pause';
   start.className = 'pause';

   var i = 1;
   setInterval(function() {
     console.log(i);
     i++;
   }, 2000);
   alert('Test');
 }

 function clear() {
   clearInterval()
 }

  // console.log(e_start);
body.appendChild(div);

div.appendChild(span);
  span.innerHTML = timer.hours + ':' + timer.minutes + ':' + timer.sec;
div.appendChild(msec);
  msec.innerHTML = timer.milisec;

div.appendChild(start);
  start.className = 'start';
  start.innerHTML = 'Start';
div.appendChild(clear);
  clear.className = 'clear';
  clear.innerHTML = 'Clear';

start.addEventListener('click', count);
eClear.removeEventListener('click', count);
//console.log(eClear);
