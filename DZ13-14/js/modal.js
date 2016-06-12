'use strict';

(function($) {

  $.fn.modal = function(rez) {

    var $button = this;
    var $body = $('body');
    var $modal;
    var $overlay;
    var $submit;

    (function showModal() {
      $modal = $('<div class="modals alert alert-info"><h1>' + rez + '</h1></div>');
      $overlay = $('<div class="overlay"></div>');
      $submit = $('<button type="button" class="submit btn btn-default">Пройти ещё раз</button>');

      $submit.one('click', hideModal);
      $body.append($overlay);
      $body.append($modal);
      $modal.append($submit);
    })();

    function hideModal() {
      $modal.remove();
      $overlay.remove();
      location.reload();
    };
    return this;
  };
})(jQuery);
