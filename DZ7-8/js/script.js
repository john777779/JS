
/*---Tabs---*/
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

/*---Forms----*/
  $(function() {
    var $firstname = $('.firstname'),
    $lastname = $('.lastname'),
    $address = $('.address'),
    $helpFirstname = $('.helpFirstname'),
    $helpLastname = $('.helpLastname'),
    $helpAddress = $('.helpAddress'),
    $showHelp = $('.showHelp');


    $firstname.hover(function() {
      $helpFirstname.show(500)
    },function() {
      $helpFirstname.hide(500)
    });

    $lastname.hover(function() {
      $helpLastname.show(500)
    },function() {
      $helpLastname.hide(500)
    });

    $address.hover(function() {
      $helpAddress.show(500)
    },function() {
      $helpAddress.hide(500)
    });

    $showHelp.on('click', function() {
      $helpFirstname.show(500);
      $helpLastname.show(500);
      $helpAddress.show(500);
    })

  });
