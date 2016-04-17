var body = document.getElementsByTagName('body')[0],
 tests = document.createElement('div'),
 question = {
 text : 'Вопрос №',
 ansvers: [
  {text : 'Вариант ответа №1',
   correct : true},
  {text : 'Вариант ответа №2',
   correct : true},
  {text : 'Вариант ответа №3',
   correct : true}
 ],
  getQuestion: function(n) {
   var list = '';
   for (var i = 0; i < this.ansvers.length; i++) {
    list += '<li><input type="checkbox">' + this.ansvers[i].text + '</li>'
   }

   return '<h3>' + this.text + n + '</h3><ul>' + list + '</ul>';
  },
},

title = {
  getHeader: function() {
    var header = document.createElement('h1');
    header.innerHTML = 'Тест по программированию';
    return body.appendChild(header);
  }
}

button = {
  text : 'Проверить мои результаты',

  getButton: function() {
    var submit = document.createElement('button');
    submit.className = "btn-group btn-group-lg";
    submit.setAttribute('type', 'submit');
    submit.innerHTML =  button.text;
    return body.appendChild(submit);
  }
};


title.getHeader();

body.appendChild(tests);
for (var i = 1; i < 4; i++) {
 tests.innerHTML += question.getQuestion(i);
};

button.getButton();
