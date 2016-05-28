$(function() {

  var html = $('#page').html();
  var reasons = [
    {
      content: 'Frontend это интересно'
    },

    {
      content: 'Есть возможность развития'
    },

    {
      content: 'Карьерный, профессиональный личностный рост'
    }
  ];

  var content = tmpl(html, {
    name: 'Шмуля Евгений Сергеевич',
    education: 'Бывший студент КПИ ФИОТ',
    reason: reasons,
    phone: '+38-093-915-05-58',
    mail: 'john77777@ukr.net',
    fb: 'https://www.facebook.com/profile.php?id=1455386781',
    feedback: 'Забор строить Вам не буду :)',
  });

  $('section').append(content);
});
