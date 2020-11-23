jQuery(document).ready(function () {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.fas fa-arrow-up').fadeIn(duration);
        } else {
            jQuery('.fas fa-arrow-up').fadeOut(duration);
        }
    });

    jQuery('.fas fa-arrow-up').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    })
});