var html_var,
    body_var,
    win,
    doc,
    global_window_Height;

$(function ($) {

    win = $(window);
    doc = $(document);
    body_var = $('body');
    global_window_Height = $(window).height();
    popupOrderItem = $('.popup_order_item');
    controlPanelBtn = $('.controlPanelBtn');
    popupBtn = $('.popupBtn');

    var header = $('.header'), doc = $(document),
        browserWindow = $(window);

    /*    browserWindow.on('scroll', function () {
     var scrollLeft = doc.scrollLeft();
     header.css('marginLeft', (scrollLeft > 0 ? -scrollLeft : 0));
     });*/

    $('.goTopBtn').on('click', function () {
        var page_link = $('a[href="#firstPage"]');

        if (page_link.length) {
            $('a[href="#firstPage"]').click();
        } else {
            docScrollTo(0);
        }

        return false;
    });


    $('.openMenu').on('click', function () {

        body_var.toggleClass('open_menu');

        return false;
    });

    $('.closeMenu').on('click', function () {

        body_var.removeClass('open_menu');

        return false;
    });

    all_dialog_close();

});

function docScrollTo(y_pos) {

    $('html, body').animate({scrollTop: y_pos}, 600);

}

$(window).on('load', function () {

}).on('scroll', function () {

    body_var.toggleClass('show_go_top header_fixed', body_var.scrollTop() >= win.height());

}).on('resize', function () {


});

function all_dialog_close() {
    body_var.on('click', '.ui-widget-overlay', all_dialog_close_gl);
}

function all_dialog_close_gl() {
    $(".ui-dialog-content").each(function () {
        var $this = $(this);
        if (!$this.parent().hasClass('always_open')) {
            $this.dialog("close");
        }
    });
}