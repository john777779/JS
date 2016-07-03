'use strict';

(function($) {

  $.fn.modal = function(rez) {

    let $button = this;
    let $body = $('body');
    let $modal;
    let $overlay;
    let $submit;

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
