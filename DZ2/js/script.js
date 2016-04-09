var arr = [];

for (var i = 0; i < 5; i++) {
  arr.push(prompt('Введите имя для занесения в массив'));
    }


var name = prompt('Введите имя');

if (name != '') {
  for (var i in arr) {
    if (arr[i]==name) {
      var k = true;
    }
  }

  if (k === true) {
  alert(name + ' ,вы успешно вошли');
  } else {
    alert('Имя не найдено');
  }

} else {
  alert('Имя не введено')
}
