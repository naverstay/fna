var map,
    offices = [
        {lat: 55.718367, lng: 37.792625},
        {lat: 55.723550, lng: 37.633198}
    ];

$(function ($) {

 

});

$(window).on('load', function () {

    initialize();

    $('.contactOfficeBtn').on('click', function () {
        var firedEl = $(this), office_ind = firedEl.attr('data-href').replace(/\D/ig, '') * 1 - 1,
            map_center = new google.maps.LatLng(offices[office_ind].lat + 0.004, offices[office_ind].lng);

        console.log(office_ind, firedEl.attr('data-href').replace(/\D/ig, ''));

        firedEl.parent().addClass('active').siblings().removeClass('active');

        $('.officeTime').hide().filter(function (i, el) {
            return $(el).hasClass(firedEl.attr('data-href'));
        }).show();

        map.setCenter(map_center, 1);

        return false;
    }).first().click();
});

function initialize() {

    var mapOptions = {
        center: offices[0],
        zoom: 16
    };

    map = new google.maps.Map(document.getElementById('g_map'),
        mapOptions);

    var image1 = {
        url: 'i/contacts/office_1.png',
        size: new google.maps.Size(223, 98)
    };

    var image2 = {
        url: 'i/contacts/office_2.png',
        size: new google.maps.Size(223, 98)
    };

    var marker1 = new google.maps.Marker({
        position: offices[0],
        map: map,
        icon: image1,
        title: 'Центральный офис'
    });

    var marker2 = new google.maps.Marker({
        position: offices[1],
        map: map,
        icon: image2,
        title: 'Дополнительный офис'
    });


}
