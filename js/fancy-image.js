(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.fancy_image = {
    attach: function (context) {
      $('[data-slider-id="fancy-image"]').once('image').each(function () {
          $('[data-fancybox="image"]').fancybox();
      });
    }
  };
})(jQuery, Drupal);
