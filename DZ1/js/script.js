function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result = result * x ;
  }
  return result;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var x = +prompt('Введие число возводимое в степень');
alert (typeof x);
var n = +prompt('Введите степень');
alert (typeof n);

isNumeric(x);
isNumeric(n);


if (isNaN(x) || isNaN(n)) {
  alert ('Введены неверные значения');

} else {
  if (n < 1) {
    alert('Степень ' + n + ' Ведена ошибочная степень, введите целую степень, большую 0');
  } else {
    console.log( pow(x, n) );
  }
}
