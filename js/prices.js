$(function ($) {

    $('.contactOfficeBtn').on('click', function () {
        var firedEl = $(this);

        firedEl.parent().addClass('active').siblings().removeClass('active');

        $('.officeTime').hide().filter(function (i, el) {
            return $(el).hasClass(firedEl.attr('data-href'));
        }).show();

        return false;
    }).first().click();


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
        },
        load: function (event, ui) {
            console.log(event, ui);
        }
    });

});

