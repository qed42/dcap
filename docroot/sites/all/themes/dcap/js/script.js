(function ($, Drupal) {

  Drupal.behaviors.dcap = {
    attach: function (context, settings) {
      $('.pane-tweet').parent().parent().addClass('social-block');
    }
  };

})(jQuery, Drupal);
