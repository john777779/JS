'use strict';

$(function() {
  var html = $('#page').html();
  var ansvers1 = [
    {text : 'Вариант ответа №1',
    correct : true},
    {text : 'Вариант ответа №2',
    correct : false},
    {text : 'Вариант ответа №3',
    correct : false}
  ];

  var ansvers2 = [
    {text : 'Вариант ответа №1',
    correct : false},
    {text : 'Вариант ответа №2',
    correct : true},
    {text : 'Вариант ответа №3',
    correct : false}
  ];

  var ansvers3 = [
    {text : 'Вариант ответа №1',
    correct : false},
    {text : 'Вариант ответа №2',
    correct : false},
    {text : 'Вариант ответа №3',
    correct : true}
  ];

  var content = tmpl(html, {
    title: 'Тест по программированию',
    quastion1: 'Вопрос №1',
    quastion2: 'Вопрос №2',
    quastion3: 'Вопрос №3',
    name1: 'firstBox',
    name2: 'secondBox',
    name3: 'thirdBox',
    ansver1: ansvers1,
    ansver2: ansvers2,
    ansver3: ansvers3,
  });

localStorage.setItem('ansvers1Local', JSON.stringify(ansvers1));
localStorage.setItem('ansvers2Local', JSON.stringify(ansvers2));
localStorage.setItem('ansvers3Local', JSON.stringify(ansvers3));
localStorage.setItem('contentLocal', JSON.stringify(content));

ansvers1 = localStorage.getItem('ansvers1Local');
ansvers1 = JSON.parse(ansvers1);

ansvers2 = localStorage.getItem('ansvers2Local');
ansvers2 = JSON.parse(ansvers2);

ansvers3 = localStorage.getItem('ansvers3Local');
ansvers3 = JSON.parse(ansvers3);

content = localStorage.getItem('contentLocal');
content = JSON.parse(content);

$('section').append(content);

var $submit = $('button');

function check() {
  var $firstBox = $('input[name="firstBox"]:checked').val();
  var $secondBox = $('input[name="secondBox"]:checked').val();
  var $thirdBox = $('input[name="thirdBox"]:checked').val();
  var rez;
    if ($firstBox == 'true' && $secondBox == 'true' && $thirdBox == 'true') {
      rez = 'Тест пройден';
      $('button').modal(rez);
    } else {
    rez = 'Тест не пройден';
    $('button').modal(rez);
  };
};

$submit.on('click', check);
});
