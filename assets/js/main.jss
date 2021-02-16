$(function () {

    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $("#homecarousel").position();
        if (scroll > topDist.top) {
            $('nav.navbar').addClass('fixed');
        } else {
            $('nav.navbar').removeClass('fixed');
        }
    });

    $(document).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });

    var $elements = $('.portfolio-items [data-filters]');
    $('.isotopes li').click(function(e) {
      e.preventDefault();
      var toFilter = $(this).attr('data-filters').split(',');
      if(toFilter[0] === ''){
          $elements.show();
          return true;
      }
    
      $elements.hide(500).filter(function() {
        var filter = $(this).attr('data-filters').split(',');
        return toFilter.some(function(value) {
          return filter.indexOf(value) > -1;
        });
      }).show(300);
    });

});