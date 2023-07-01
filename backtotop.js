
$(function() {
  
    // Chung
    var topup = $('.top-up');

      topup.on('click', function(e) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  });

  $('.slider-for-video').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-nav-video'
  });
  $('.slider-nav-video').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for-video',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    initialSlide: 2,
    arrows: true,
    prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='img/images/pv1.png'></button>",
    nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='img/images/nv1.png'></button>",
  });

  $(".click-title").click(function(){
    $(this).addClass("active-click");
  });
  $(".title-tabfaq-item").click(function(){
    $(this).addClass("active-click");
  });

  /*$(".text").click(function(){
    $(this).css("display","none");
  });*/
  $('.block__title').click(function(event) {
    if($('.block').hasClass('one')){
      $('.block__title').not($(this)).removeClass('active');
      $('.block__text').not($(this).next()).slideUp(300);
      }
    $(this).toggleClass('active').next().slideToggle(300);
  });
/**/
  $(".slider-g1").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='img/rightmini.png'></button>",
    nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='img/leftmini.png'></button>",
   });