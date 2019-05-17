if (window.innerWidth < 576) {

    function removeAos() {
      var elem = document.getElementById('aos-css-file');
      elem.parentNode.removeChild(elem);
      return false;
    }
    removeAos();
  
  }
  
  AOS.init();

/*
 **  Прелоадер
 */

$(document).ready(function () {
    $('.preloader').delay(400).fadeOut(500);
    $('body').addClass('overflow');
  })


// window.onload = function() {
//     $('.preloader').fadeOut();
//     $('body').addClass('overflow');
// }

$('.btn-bars').click(function () {
    $('.btn-bars').toggleClass('active');
    $('.header-mobile').toggleClass('active');
    $('body').toggleClass('overflow-hidden');
});

// $(document).ready(function( ) {
//     $('.preloader').fadeOut();
//     $('body').addClass('overflow');
// })

// $(window).load(function() {
//     $('.preloader').fadeOut();
//     $('body').addClass('overflow');
//   });

$(window).scroll(function () {
    var the_top = $(document).scrollTop();
    if (the_top > 130) {
        $('.header-fixed').addClass('visible');
    } else {
        $('.header-fixed').removeClass('visible');
    }
});


$(function() {
    var images = [{
            class: "header-hero-img1", // Класс
            timeout: 5000 // Задержка для класса
        }, {
            class: "header-hero-img2",
            timeout: 5000
        }],
        i = 0,
        timeout;

    
    function changeBackground() {
        clearTimeout(timeout);

        $('#header-bottom-right').removeClass().addClass(function() {
            if (i >= images.length)
                i = 0;
            
            timeout = setTimeout(changeBackground, images[i].timeout);
     
            return images[i++].class;
        });
              
    }

    changeBackground();        
});

if ($(".about-numbers").length) {
    var show = true;
    var countbox = ".about-numbers";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.counter-number').css('opacity', '1');
            $('.counter-number').spincrement({
                thousandSeparator: "",
                duration: 4000
            });
            show = false;
        }
    });
}

$('.clients-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

$('.catalog-button').click(function () {
    $('.catalog-sidebar').toggleClass('open');
    $('.sidebar-layout').toggleClass('visible');
});
$('.sidebar-layout').click(function () {
    $('.catalog-sidebar').toggleClass('open');
    $('.sidebar-layout').toggleClass('visible');
});

$(".header-infoblock-menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;

    $('body,html').animate({
        scrollTop: top
    }, 1500);
});

var subMenu = $('.sub-menu');
var menuItemHasChildren = $('.menu-item-has-children');

menuItemHasChildren.click(function (e) {
    e.preventDefault();
   
    $(this).children(subMenu).toggleClass('toggle');
    $(this).find('a:first i').toggleClass('rotate');
    // $(this).find('a:first').addClass('asddd');
})

menuItemHasChildren.each(function () {
    $(this).find('a:first').prepend('<i class="fa fa-angle-right"></i>');
});

// $(document).click(function (e) {
//     if ($(e.target).closest(subMenu).length || $(e.target).closest('.header-menu ul li').length) return;
//     subMenu.removeClass('toggle');
//     $('.menu-item-has-children a:first i').removeClass('rotate');
//     e.stopPropagation();
// });
$(function(){
    var $gallery = $('.single-product-photos a').simpleLightbox();

    $gallery.on('show.simplelightbox', function(){
        console.log('Requested for showing');
    })
    .on('shown.simplelightbox', function(){
        console.log('Shown');
    })
    .on('close.simplelightbox', function(){
        console.log('Requested for closing');
    })
    .on('closed.simplelightbox', function(){
        console.log('Closed');
    })
    .on('change.simplelightbox', function(){
        console.log('Requested for change');
    })
    .on('next.simplelightbox', function(){
        console.log('Requested for next');
    })
    .on('prev.simplelightbox', function(){
        console.log('Requested for prev');
    })
    .on('nextImageLoaded.simplelightbox', function(){
        console.log('Next image loaded');
    })
    .on('prevImageLoaded.simplelightbox', function(){
        console.log('Prev image loaded');
    })
    .on('changed.simplelightbox', function(){
        console.log('Image changed');
    })
    .on('nextDone.simplelightbox', function(){
        console.log('Image changed to next');
    })
    .on('prevDone.simplelightbox', function(){
        console.log('Image changed to prev');
    })
    .on('error.simplelightbox', function(e){
        console.log('No image found, go to the next/prev');
        console.log(e);
    });
});