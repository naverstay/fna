$(function ($) {

    $('.contactOfficeBtn').on('click', function () {
        var firedEl = $(this);

        firedEl.parent().addClass('active').siblings().removeClass('active');

        $('.officeTime').hide().filter(function (i, el) {
            return $(el).hasClass(firedEl.attr('data-href'));
        }).show();

        return false;
    }).first().click();


});