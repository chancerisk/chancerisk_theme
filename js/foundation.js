(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.foundation = {
    attach: function (context) {
      $('body').once('foundation').each(function () {
        $(document).foundation();
      });
    }
  };
})(jQuery, Drupal);
