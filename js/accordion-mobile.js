(function ($, Drupal) {
    'use strict';
    Drupal.behaviors.accordion = {
        attach: function (context) {
            if (Foundation.MediaQuery.atLeast('large') == false) {
                $('.accordion').once('accordion').each(function () {
                    var target = $('.accordion-item', this);
                    $(this).foundation('down', target);
                })

            }
        }
    };
})(jQuery, Drupal);
