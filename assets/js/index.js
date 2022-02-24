
let carousel = $('.owl-carousel')

carousel.owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        480:{
            items:2,
            nav:false
        },
        1024:{
            items:3,
            nav:false,
            loop:true
        }
    }
})

$('.custom-1').click(function() {
  $('.responsive .owl-prev').trigger('click');
})
// Go to the previous item
$('.custom-2').click(function() {
  $('.responsive .owl-next').trigger('click');
})
