jQuery(document).ready(function($) {
  jQuery('.block__title').click(function(event) {
    if(jQuery('.block').hasClass('one')){
      jQuery('.block__title').not(jQuery(this)).removeClass('active');
      jQuery('.block__text').not(jQuery(this).next()).slideUp(300);
      }
    jQuery(this).toggleClass('active').next().slideToggle(300);
  });
jQuery('.show1 a').click(function(e) {
  const headerHeight = jQuery('header').height();
  const hash = this.hash;
  const scrollToSection = jQuery(hash).offset().top - headerHeight;
  jQuery('html, body').animate({
    scrollTop: scrollToSection,
  }, 300);
});
  var $filter = $('header');
  var $filterSpacer = $('<div />', {
    "class": "vnkings-spacer",
    "height": $filter.outerHeight()
  });
  if ($filter.size())
  {
    $(window).scroll(function ()
    {
      if (!$filter.hasClass('fix') && $(window).scrollTop() > $filter.offset().top)
      {
        $filter.before($filterSpacer);
        $filter.addClass("fix");
      }
      else if ($filter.hasClass('fix')  && $(window).scrollTop() < $filterSpacer.offset().top)
      {
        $filter.removeClass("fix");
        $filterSpacer.remove();
      }
    });
  }
});
/**/
$(".box-preview").on('click', '.box-img-preview', function(){
  var dataSilde = $(this).attr('data-slide');
  if(dataSilde == undefined){
    return false;
  }
  var elm = '.main-overlay-slick[data-name=' + dataSilde + ']';
  $(elm).addClass('active')
  $(".box-overlay").removeClass('hide');
  $(".box-overlay .icon-close-overlay").attr('data-slide', dataSilde);
  setTimeout(function(){
    setSlick(elm);
    $(".box-overlay").animate({
      'opacity' : '1'
    });
  },50)
})
$(".box-overlay .icon-close-overlay").click(function(){
  var dataSilde = $(this).attr('data-slide');
  if(dataSilde == undefined){
    return false;
  }
  var elm = '.main-overlay-slick[data-name=' + dataSilde + ']';
  $(elm).removeClass('active')
  unSlick(elm);
  $(".box-overlay").addClass('hide').css({'opacity' : ''});
})
$(document).ready(function(){
  setSlick('.box-preview')
  setTimeout(function(){
    $(".box-img-nano").find(".box-img.default-view").click();
  },50)
})
/**/
function setSlick(elm){
  $(elm).slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
}

function unSlick(elm){
  //'.main-overlay-slick'
  $(elm).slick('unslick')
}

 $('.box-preview').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.box-flex'
});
$('.box-flex').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.box-preview',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

/**/

$(document).on('ready', function() {
	new WOW().init();

  $(".map-slider").slick({
    lazyLoad: 'ondemand',
    prevArrow:"<span class='prev'></span>",
    nextArrow:"<span class='next'></span>",
  });

  $(".regular").slick({
    dots: true,
    infinite: true,
    margin:30,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='img/left.png'></button>",
    nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='img/right.png'></button>",
    responsive:[{
    breakpoint: 576,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  }
  }]

});


    $(".map-slider-footer").slick({
        lazyLoad: 'ondemand',
        prevArrow:"<span class='prev'><p>Trụ sở chính </p></span>",
        nextArrow:"<span class='next'></span>",
      });
    $('.map-slider-for-footer').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.map-slider-nav-footer'
    });
    $('.map-slider-nav-footer').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.map-slider-for-footer',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      autoplay: false,
      prevArrow:"<span class='prev'></span>",
        nextArrow:"<span class='next'></span>",
    });

      /* slide trang 13 */
      $(".slider-page-13").slick({
        dots: false,
        infinite: true,
        margin:10,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:"<span class='prev-mini slick-arrow'><img class='left-arrow ' src='img/rightmini.png'></span>",
        nextArrow:"<span class='next-mini slick-arrow'><img class='right-arrow ' src='img/leftmini.png'></span>",
      });


    $(".lazy").slick({
        lazyLoad: 'ondemand', 
        infinite: true,
         dots: true,
        prevArrow:"<span class='prev'></span>",
        nextArrow:"<span class='next'></span>",
      });

    $(".click-item").click(function () {
        $(".show-item").fadeToggle("slow");
    });
  $(".list-cate-seemore").click(function () {
        $(".list-see-more").fadeToggle("slow");
    });
  $(".policy .btn-style-8").click(function () {
        $(".readmore-20").fadeToggle("slow");
    });
    $('input.input-qty').each(function() {
        var $this = $(this),
            qty = $this.parent().find('.is-form'),
            min = Number($this.attr('min')),
            max = Number($this.attr('max'))
        if (min == 0) {
            var d = 0
        } else d = min
        $(qty).on('click', function() {
            if ($(this).hasClass('minus')) {
                if (d > min) d += -1
            } else if ($(this).hasClass('plus')) {
                var x = Number($this.val()) + 1
                if (x <= max) d += 1
            }
            $this.attr('value', d).val(d)
        })
    });
    
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      autoplay: false,
    });
    
    $(".humburger").click(function () {
          $(".list-menu-mobile").fadeToggle("slow");
      });
    $(".menu-mobile").click(function(){
      $(this).addClass("menu-mobile-active");
    });
    $(".slider-new-mobile").slick({
        lazyLoad: 'ondemand',
        prevArrow:"<span class='prev'></span>",
        nextArrow:"<span class='next'></span>",
      });
    $(".th").click(function () {
          $(".checkbox-th").fadeToggle("slow");
      });
    $(".gb").click(function () {
          $(".checkbox-gb").fadeToggle("slow");
      });
    $(".nxs").click(function () {
          $(".checkbox-nxs").fadeToggle("slow");
      });

    /* menu co dinh */
    jQuery(document).ready(function($) {
            var $filter = $('.header-mobile');
            var $filterSpacer = $('<div />', {
                "class": "vnkings-spacer",
                "height": $filter.outerHeight()
            });
            if ($filter.size())
            {
                $(window).scroll(function ()
                {
                    if (!$filter.hasClass('fix') && $(window).scrollTop() > $filter.offset().top)
                    {
                        $filter.before($filterSpacer);
                        $filter.addClass("fix");
                    }
                    else if ($filter.hasClass('fix')  && $(window).scrollTop() < $filterSpacer.offset().top)
                    {
                        $filter.removeClass("fix");
                        $filterSpacer.remove();
                    }
                });
            }
            
 
        });

    
    var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        };
    });
  
/* menu co dinh */

$(window).on('scroll', function(e){
    $(".category-page").css({
        'position'  : 'fixed',
        'top'       : '140px',
        'width'     : '252px'
    });
    if(window.pageYOffset < 300){
        $(".detail-fixed-pro").css({
            'position'  : 'inherit',
            'top'       : '0px'
        });
    }else{
        //calc height header to set top css
        var heightHeader = $("header").innerHeight();
        $(".detail-fixed-pro").css({
            'position'  : 'fixed',
            'top'       : heightHeader + 'px',
            'width'     : '252px'
        });
    }
});

$("body").find('a[href^="#"]').each(function(){
    var href = $(this).attr("href");
    //if href isn't id then return
    if(href == '#'){
        return true;
    }
    $(this).click(function(e){
        e.preventDefault();
        //lấy ra height của header
        var heightHeader = $("header").innerHeight();
        //lấy height của cái fixed kia nữa
        var heightDetailFixed = $(".detail-fixed-pro").innerHeight();
        //lấy offsetTop của cái thằng mà mình sẽ đi tới
        var offsetTopElement = $(href).offset().top;
        //tính toán offset đi tới
        //sẽ bằng offsetTop của element - height header - height detail fixed - thêm 10px cho rộng rãi
        var offsetScroll = offsetTopElement - heightDetailFixed - heightHeader - 10;
        $("html, body").animate({
            'scrollTop' : offsetScroll
        })
        return false;
    })
})

jQuery(".chitiet-thongtin h5").click(function () {
  jQuery(".chitiet-box").fadeToggle("slow");
});
jQuery(".v-item").click(function () {
  jQuery(this).find(".video-v").fadeToggle("slow");
});
jQuery(window).scroll(function(){
  if (jQuery(this).scrollTop() > 1300) {
    jQuery('.back-category').fadeIn();
  } else {
    jQuery('.back-category').fadeOut();
  }
});
/*
if(typeof $ == 'undefined'){
  var $ = jQuery;
}
$(".link-section.muc_luc_header").on('click', 'a[href^="#"]', function(e){
    e.preventDefault();
    //block redirect if href = #
    var href = $(this).attr("href");
    if('#' == href){
        return false;
    }
    //lấy ra height của header
    var heightHeader = $("header").innerHeight();
    //lấy height của cái fixed kia nữa
    var heightDetailFixed = $(".detail-fixed-pro").innerHeight();
    //lấy offsetTop của cái thằng mà mình sẽ đi tới
    var offsetTopElement = $(href).offset().top;
    //tính toán offset đi tới
    //sẽ bằng offsetTop của element - height header - height detail fixed - thêm 10px cho rộng rãi
    var offsetScroll = offsetTopElement - heightDetailFixed - heightHeader - 10;
    $("html, body").animate({
        'scrollTop' : offsetScroll
    });
    return false;
});*/