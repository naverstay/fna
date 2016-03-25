var map,
    city_tabs,
    active_tab = 0,
    markers = [],
    offices = [
        [ // moscow
            {lat: 55.718367, lng: 37.792625},
            {lat: 55.723550, lng: 37.633198}
        ],
        [ // piter 
            {lat: 59.925716, lng: 30.390106}
        ],
        [ // kirov
            {lat: 58.603602, lng: 49.630090}
        ],
        [ // volgograd
            {lat: 48.807704, lng: 44.731371}
        ],
        [ // eburg
            {lat: 56.835682, lng: 60.590764}
        ],
        [ // krasnodar 
            {lat: 45.039185, lng: 38.985680}
        ],
        [ // novosib   
            {lat: 55.050508, lng: 82.943357}
        ],
        [ // simfer  
            {lat: 44.960869, lng: 34.116387}
        ],
        [ // almati   
            {lat: 43.229473, lng: 76.945915}
        ]
    ];

$(function ($) {

    $('.citySelect').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('#city_menu_dropdown'),
        width: '100%'
    });

    body_var.delegate('.citySelect', 'change', function () {
        $('a[href=' + $(this).val() + ']').click();
    });

    var tabBlock = $('.tabBlock'),
        city_tabs = tabBlock.tabs({
            active: active_tab,
            tabContext: tabBlock.data('tab-context'),
            activate: function (e, ui) {
                var tab = ui.newTab, panel = $(ui.newPanel);

                tab.parent().attr('data-active-tab', tab.index());

                active_tab = tab.index();

                if (!panel.find('.contacts_office_item.active').length) {
                    panel.find('.contacts_office_item').first().find('.contactOfficeBtn').click();
                } else {
                    panel.find('.contacts_office_item.active').find('.contactOfficeBtn').click();
                }
            }
        });

});

$(window).on('load', function () {

    initialize();

    $('.contactOfficeBtn').on('click', function () {
        var firedEl = $(this), office_ind = firedEl.attr('data-href').replace(/\D/ig, '') * 1 - 1,
            map_center = new google.maps.LatLng(offices[active_tab][office_ind].lat + 0.004, offices[active_tab][office_ind].lng);

        //console.log(office_ind, firedEl.attr('data-href').replace(/\D/ig, ''));

        firedEl.closest('.contactsOfficeSwitcher').find('.contacts_office_item').removeClass('active');

        firedEl.parent().addClass('active');

        $('.officeTime').hide().filter(function (i, el) {
            return $(el).hasClass(firedEl.attr('data-href'));
        }).show();

        map.setCenter(map_center, 1);

        return false;
    }).first().click();
});

function initialize() {

    var mapOptions = {
        center: offices[active_tab][0],
        zoom: 16
    };

    map = new google.maps.Map(document.getElementById('g_map'),
        mapOptions);

    var image1 = {
        url: 'i/contacts/contacts-baloon.svg',
        size: new google.maps.Size(223, 98)
    };

    var image2 = {
        url: 'i/contacts/contacts-baloon-2.svg',
        size: new google.maps.Size(223, 98)
    };

    for (var i = 0; i < offices.length; i++) {
        var city = offices[i];

        //console.log(city);

        for (var j = 0; j < city.length; j++) {
            var office = city[j];

            //console.log(office);

            var marker1 = new google.maps.Marker({
                position: office,
                map: map,
                icon: j == 0 ? image1 : image2,
                title: j == 0 ? 'Центральный офис' : 'Дополнительный офис'
            });

            markers.push(marker1);
        }
    }

}
