(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.stage = {
    attach: function (context) {
      $('.stage').once('stage').each(function () {

        var slider = $(this);
          var itemsLength = slider.children().length;
        var slickDots = {
          dots: itemsLength == 1 ? false : true,
          infinite: true,
          speed: 500,
          appendDots: $('.slick-dots-container__grid', slider.parent())
        };

        slider.on('init', function (event, slick, currentSlide) {
          var title = $('.slick-current', slider).attr('data-title');
          console.log(currentSlide)
          $('.stage-circle .stage-circle__text').html(title);
          $('.stage-circle .stage-circle__text').fadeIn();
          // left
        });

        slider.on('beforeChange', function (event, slick, currentSlide) {
          $('.stage-circle .stage-circle__text').fadeOut();
        });

        slider.on('afterChange', function (event, slick, currentSlide) {
          var title = $('.slick-current .stage__item', slider).attr('data-title');
          $('.stage-circle .stage-circle__text').html(title);
          $('.stage-circle .stage-circle__text').fadeIn();
          // left
        });
        slider.slick(slickDots);
      });

    }
  };
})(jQuery, Drupal);
