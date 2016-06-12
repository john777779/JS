var names = ["Duncan", "Matthias", "Andy", "Viktor", "Peter", "john"];
var newNames = [];
var div = document.querySelectorAll('.list-container')[0];
var list = document.createElement('ul');

for (var i = 0; i < names.length; i++) {
  var str = names[i];
  newNames[i] = str[0].toUpperCase() + str.slice(1);
};

newNames.sort();
 for (var i = 0; i < newNames.length; i++) {
  var k = i + 1;
  list.innerHTML += '<li>' + k + '. ' + newNames[i] + '</li>';
};

//div.appendChild(list);
console.log (div);
