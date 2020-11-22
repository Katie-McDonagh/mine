  $(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){
  $('html').css("scrollBehavior", "smooth");
});


  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});
})
