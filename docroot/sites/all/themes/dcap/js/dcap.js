(function($, Drupal) {
  Drupal.behaviors.dcap = {
    attach: function(context, settings) {
      $.noConflict();

    }
  };
})(jQuery, Drupal);


(function($) {

  $(document).ready(function() {

    //MainContent Ajustment
    var applyMapContainerHeight = function() {
      var browserheight = $(window).height();
      var headHeight = $('.region-header').outerHeight(true);
      var footerHeight = $('.region-footer').outerHeight(true);
      browserheight = browserheight - (headHeight + footerHeight);
      $(".maincontent-wrapper").css('min-height', browserheight);
    };

    applyMapContainerHeight();

    $(window).resize(function() {
      applyMapContainerHeight();

    });

    $('.header').prepend('<div class="hamburger-icon"></div>');
      //Hamburger Menu
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() < 768) {

        $('.header .hamburger-icon').click(function() {
          if ($('.header .region-header').hasClass('menuopen')) {
              $('.header .region-header').removeClass('menuopen');
              $('.header .region-header').addClass('menuclose');
          } else {
            $('.header .region-header').addClass('menuopen');
            $('.header .region-header').removeClass('menuclose');
          }
       });
      $('.header .menu li a').click(function() {
        if ($('.header .region-header').hasClass('menuopen')) {
          $('.header .region-header').removeClass('menuopen');
          $('.header .region-header').addClass('menuclose');
        }
      });
      }
      else {
        $('.header').remove('.hamburger-icon');
      }

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

  });

})(jQuery);