$(document).ready(function (){
    $(window).scroll(function(){
        if(this.scroll > 20){
            $('.navbar').addclass("sticky");
        }else{
            $('.navbar').removeclass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addclass("show");
        }
        
         });

    

   // toggle menu/navbar script
    $('.menu-btn').click(function(){
      $('.navbar .menu').toggleclass("active");
      $('.menu-btn i').toggleclass("active");

    });

    // owl carousel script
    $('.carousel').owlcarousels({
      margin: 20,
      loop: true,
      autoplaytimeout: 2000,
      autoplayhoverpause: true,
      responsive: {
        0:{
            item:1,
            nav: false
        },
        600:{
            item:2,
            nav: false
        },
        1000:{
            item:3,
            nav: false
        }
      }
    });
});    
