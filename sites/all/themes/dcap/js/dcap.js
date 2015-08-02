(function($, Drupal) {
  Drupal.behaviors.dcap = {
    attach: function(context, settings) {
      $.noConflict();

      var words = $('.pane-block-7 .wish-to-be-one > h2').text().split(' ');
      var html = '';
      $.each(words, function() {
          html += '<span style="color:#ff6425;">'+this.substring(0,1)+'</span>'+this.substring(1) + ' ';
      });
      $('.pane-block-7 .wish-to-be-one > h2').html(html);
    }
  };
})(jQuery, Drupal);
