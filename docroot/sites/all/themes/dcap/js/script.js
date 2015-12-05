(function ($, Drupal) {

  Drupal.behaviors.dcap = {
    attach: function (context, settings) {
      $('.pane-tweet').parent().parent().addClass('social-block');

      // Footer Wrapping.
      // $('.pane-menu-menu-university, .pane-menu-menu-organisation, .pane-menu-menu-community, .pane-menu-menu-follow-us-on-social-media').wrapAll('<div class="footer-right">');
    }
  };

})(jQuery, Drupal);
