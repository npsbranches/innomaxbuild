$(function() {
    var images = [{
            class: "header-hero-img1", // Класс
            timeout: 2000 // Задержка для класса
        }, {
            class: "header-hero-img2",
            timeout: 2000
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