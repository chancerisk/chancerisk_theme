(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.colored_card_slider = {
    getConfiguration: function (id, slider) {
      var itemsLength = slider.children().length;
      var baseConfig = {
        rows: 0,
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false,

        appendDots: $('.slick-dots-container__grid', slider.parent()),
        responsive: [
          {
            breakpoint: 690,
            settings: {
              dots: itemsLength == 1 ? false : true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1023,
            settings: {
              dots: itemsLength == 1 ? false : true,
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }]
      };
      if (id === 'quote') {
        baseConfig.slidesToShow = 2;
        baseConfig.slidesToScroll = 2;
        baseConfig.infinite = false;
        baseConfig.dots = itemsLength == 1 ? false : true;

      }
      if (id === 'article-slider') {
        baseConfig.slidesToShow = 3;
        baseConfig.slidesToScroll = 2;
        baseConfig.infinite = false;
        baseConfig.dots = false;

      }
      return baseConfig;
    },
    attach: function (context) {
      var self = this;
      $('.grid-slider__slick').once('grid-slider').each(function () {
        var slider = $(this);
        var configId = slider.attr('data-slider-id');
        slider.slick(self.getConfiguration(configId, slider));
      });

    }
  };
})(jQuery, Drupal);
