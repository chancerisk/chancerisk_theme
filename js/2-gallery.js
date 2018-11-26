(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.gallery = {
    attach: function (context) {
      $('[data-slider-id="article-grid"]').once('gallery').each(function () {
          $('[data-fancybox="gallery"]', this).fancybox();
      });
    }
  };
})(jQuery, Drupal);
