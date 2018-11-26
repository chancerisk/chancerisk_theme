(function ($, Drupal) {
    'use strict';
    Drupal.behaviors.toc = {
        attach: function (context) {
            var i = 1;
            $('h1, .h1, h2, .h2, h3, .h3', $('.article')).each(
                function (index, item) {
                    $(this).attr('id', 'headline_' + i);
                    $( ".lined-list" ).append("<li class='lined-list__items'><a href='#headline_" + i + "'>"+ $(item).text() +" </a></li>");
                    i++;
                }
            );
        }
    };
})(jQuery, Drupal);