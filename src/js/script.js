
$(document).ready(function(){
    /* const slider = tns({
        container: '.slider__wrapper',
        items: 3,
        slideBy: 'page',
        autoplay: true,
        controls: false,
        nav: false,
        dots: true,
    
        responsive: {
            575: {
            edgePadding: 20,
            gutter: 20,
            items: 1
            },
            747: {
            gutter: 30,
            items: 1
            },
            991: {
            items: 1
            }
        }
          
    }); */

     $('.slider__wrapper').slick({
        speed: 930,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="prev"><img src="img/icons/arrow-left.png" alt="arrow"></button>',
        nextArrow: '<button type="button" class="next"><img src="img/icons/arrow-right.png" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    
    document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev');
    });
    
    document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next');
    });
});