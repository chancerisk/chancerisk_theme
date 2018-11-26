(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.read_email = {
    attach: function (context) {
      $('.newsletter_js_button').once('open-newsletter').each(function () {
        $('#brands_newsletter_e_mail_field').keyup(function () {
          var e_mail = $('#brands_newsletter_e_mail_field').val();
          $.cookie('brands_email', e_mail, { path: '/' })
        });
      });
    }
  };
  Drupal.behaviors.paste_email = {
    attach: function (context) {
      $('.webform-submission-newsletter-form').once('paste-newsletter').each(function () {
       var email = $.cookie('brands_email');
       var form = $(this)
       var emailField = $('input[name=email]', form)
       if (emailField.val() == '' && email != '') {
         emailField.val(email)
       }
      });
    }
  };
})(jQuery, Drupal);