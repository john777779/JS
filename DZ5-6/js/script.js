var body = document.getElementsByTagName('body')[0],
 div = document.createElement('div'),
 span = document.createElement('span'),
 msec = document.createElement('p'),
 start = document.createElement('button');
 start.setAttribute('id', 'begin');
 var clear = document.createElement('button');
 clear.setAttribute('id', 'reset');

console.log(start);
console.log(clear);

 function count() {
   start.innerHTML = 'Pause';
   start.setAttribute('id', 'pause');

   var i = 1;

   setInterval(function() {
     var k = i + "",
     ms = 0,
     ss = Math.floor(i/1000),
     s = ss%60
     m = Math.floor(ss/60),
     h = Math.floor(m/60);



     if (h < 10) {
       h = "0" + h;
     };
     if (m < 10) {
       m = "0" + m;
     };
     if (s < 10) {
       s = "0" + s;
     };
     if (i < 10) {
       ms = k[k.length - 1];
     } else {
       if (i < 100) {
         ms = k[k.length - 2] + k[k.length - 1];
       } else {
         ms = k[k.length - 3] + k[k.length - 2] + k[k.length - 1];
       }
     };




     span.innerHTML = h + ':' + m + ':' + s;
     msec.innerHTML = ms;

     i = i + 4;

 }, 1);

 };

 function clear1() {
  span.innerHTML = "00" + ':' + "00" + ':' + "00";
  msec.innerHTML = "000";

  // clearInterval(count);
 };


body.appendChild(div);

div.appendChild(span);
  span.innerHTML = "00" + ':' + "00" + ':' + "00";
div.appendChild(msec);
  msec.innerHTML = "000";

div.appendChild(start);
  start.innerHTML = 'Start';
div.appendChild(clear);
  clear.innerHTML = 'Clear';

begin.addEventListener('click', count, true);
//pause.addEventListener('click', stop, )
reset.removeEventListener('click', count);
