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