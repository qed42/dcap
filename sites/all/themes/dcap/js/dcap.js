(function($, Drupal) {
  Drupal.behaviors.dcap = {
    attach: function(context, settings) {
      $.noConflict();

      //Home Page Wish Block Heading Font
      var words = $('.pane-block-7 .wish-to-be-one > h2').text().split(' ');
      var html = '';
      $.each(words, function() {
          html += '<span style="color:#ff6425;">'+this.substring(0,1)+'</span>'+this.substring(1) + ' ';
      });
      $('.pane-block-7 .wish-to-be-one > h2').html(html);

      //FAQ Page Accordian
      var $bgs = $('.view-faqs .view-content .views-row > .views-field-body').hide();
      $('.view-faqs .view-content .views-row > .views-field-title').click(function () {
        $('.view-faqs .view-content .views-row > .views-field-title a').removeClass('active');
        if($(this).next().css('display') === 'none'){
          $(this).find('a').addClass('active');
        }
        var $target = $(this).parent().children('.view-faqs .view-content .views-row > .views-field-body').stop(true).slideToggle();
        $bgs.not($target).filter(':visible').stop(true, true).slideUp();
      });

    }
  };
})(jQuery, Drupal);
