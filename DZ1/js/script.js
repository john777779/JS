function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result = result * x ;
  }

  return result;
}

var x = prompt('Введие число возводимое в степень');
var n = prompt('Введите степень');

if (n < 1) {
  alert('Степень ' + n + ' Ведена ошибочная степень, введите целую степень, большую 0');
} else {
  console.log( pow(x, n) );
}
