var service_tabs;

$(function ($) {

    $('.serviceSelect').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('#aside_menu_dropdown'),
        width: '100%'
    });

    body_var.delegate('.serviceSelect', 'change', function () {
        $('a[href=' + $(this).val() + ']').click();
    });

    var tabBlock = $('.tabBlock'),
        service_tabs = tabBlock.tabs({
            active: 0,
            tabContext: tabBlock.data('tab-context'),
            activate: function (e, ui) {
                var tab = ui.newTab;

                tab.parent().attr('data-active-tab', tab.index());

                $('.serviceSelect').val('#' + ui.newPanel.attr('id')).trigger('change');

            }
        });

});