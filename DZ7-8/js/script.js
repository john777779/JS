$(function() {
    var $tab_1 = $('.tab-1'),
    $tab_2 = $('.tab-2'),
    $tab_3 = $('.tab-3'),
    $subTabs_1 = $('.subTabs-1'),
    $subTabs_2 = $('.subTabs-2'),
    $subTabs_3 = $('.subTabs-3');

    $tab_1.on('click', function() {
      $tab_1.addClass('active');
      $tab_2.removeClass('active');
      $tab_3.removeClass('active');
      $subTabs_1.css('display', 'block');
      $subTabs_2.css('display', 'none');
      $subTabs_3.css('display', 'none');
    });

    $tab_2.on('click', function() {
      $tab_2.addClass('active');
      $tab_1.removeClass('active');
      $tab_3.removeClass('active');
      $subTabs_2.css('display', 'block');
      $subTabs_1.css('display', 'none');
      $subTabs_3.css('display', 'none');
    });

    $tab_3.on('click', function() {
      $tab_3.addClass('active');
      $tab_1.removeClass('active');
      $tab_2.removeClass('active');
      $subTabs_3.css('display', 'block');
      $subTabs_1.css('display', 'none');
      $subTabs_2.css('display', 'none');
    });

  });
