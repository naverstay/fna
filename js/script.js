var html_var,
    body_var,
    win,
    doc,
    $callback_form,
    $order_form,
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

    if ($("#callback_form").length) {

        $callback_form = $("#callback_form").dialog({
            autoOpen: false,
            modal: true,
            closeOnEscape: true,
            closeText: '',
            show: "fade",
            position: {my: "center center", at: "center center", of: window},
            draggable: true,
            dialogClass: 'dialog_global dialog_g_size_1 dialog_close_butt_mod_1 title_center_mod dialog_butt_v1',
            width: 754,
            open: function (event, ui) {
                body_var.addClass('dialog_regular_open');
            },
            close: function (event, ui) {
                body_var.removeClass('dialog_regular_open');
            }
        });
    }

    if ($("#order_form").length) {

        $order_form = $("#order_form").dialog({
            autoOpen: false,
            modal: true,
            closeOnEscape: true,
            closeText: '',
            show: "fade",
            position: {my: "center center", at: "center center", of: window},
            draggable: true,
            dialogClass: 'dialog_global dialog_g_size_1 dialog_close_butt_mod_1 title_center_mod dialog_butt_v1',
            width: 910,
            open: function (event, ui) {
                body_var.addClass('dialog_regular_open');
            },
            close: function (event, ui) {
                body_var.removeClass('dialog_regular_open');
            }
        });
    }

    $('.callbackOpenBtn').on('click', function () {
        $callback_form.dialog('open');

        return false;
    });

    $('.orderOpenBtn').on('click', function () {
        $order_form.dialog('open');

        return false;
    });

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