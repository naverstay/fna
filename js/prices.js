var price_tabs;

$(function ($) {


    $('.priceSelect').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('#aside_menu_dropdown'),
        width: '100%'
    });

    body_var.delegate('.priceSelect', 'change', function () {
        $('a[href=' + $(this).val() + ']').click();
    });

    $('.contactOfficeBtn').on('click', function () {
        var firedEl = $(this);

        firedEl.parent().addClass('active').siblings().removeClass('active');

        $('.officeTime').hide().filter(function (i, el) {
            return $(el).hasClass(firedEl.attr('data-href'));
        }).show();

        return false;
    }).first().click();

    var tabBlock = $('.tabBlock'),
        price_tabs = tabBlock.tabs({
            active: 0,
            tabContext: tabBlock.data('tab-context'),
            activate: function (e, ui) {
                var tab = ui.newTab;

                tab.parent().attr('data-active-tab', tab.index());

                $('.priceSelect').val('#' + ui.newPanel.attr('id')).trigger('change');

            }
        });

    $('.select2').select2({
        minimumResultsForSearch: Infinity,
        width: '100%'
    });

    $('#annual_revenu').slider({
        min: 1000,
        max: 10000,
        value_box: '<span class="toddler_val"></span>',
        slide: function (event, ui) {
            $(ui.handle).find('.toddler_val').text(ui.value + ' тыс. руб.');
            $('#annual_revenu_val').val(ui.value);
        },
        load: function (event, ui) {
            console.log(event, ui);
        }
    });

});


