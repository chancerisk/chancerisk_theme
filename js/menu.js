(function ($, Drupal) {
  'use strict';

  function handleMenuBahvior() {
    var navigation = $('.menu-primary');
    // For large screens remove foundation javascript handling. Use plain css.
    if (Foundation.MediaQuery.atLeast('large')) {
      if (navigation.hasClass('menu-primary--rendered')) {
        navigation.foundation('destroy');
      }
    }
    // For mobile use the default foundation menu behavior.
    else {
      navigation.addClass('menu-primary--rendered')
      new Foundation.AccordionMenu(navigation, []);
    }
  }

  // Handle initial menu building.
  Drupal.behaviors.menu = {
    attach: function (context) {
      handleMenuBahvior();
    }
  };
  // Handle breakpoint changes.
  $(window).on('changed.zf.mediaquery', function (event, newSize, oldSize) {
    handleMenuBahvior();
  });

})(jQuery, Drupal);
