var popupOrderItem,
    controlPanelBtn,
    popupBtn,
    heroSlider,
    pageSliderDensity = 30,
    pageSlider,
    pageSliderLoaded = false,
    pageSliderParams = {
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'forthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'forthSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize: true,
        //sectionsColor: ['#ccc', '#fff'],
        paddingTop: '0',
        paddingBottom: '0',
        fixedElements: '#header, #footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.slide_section',
        slideSelector: '.slide',

        //events
        onLeave: function (index, nextIndex, direction) {
            console.log(index, nextIndex, direction);

            //if (nextIndex == 1) body_var.removeClass('show_go_top');

            body_var.toggleClass('show_go_top header_fixed', nextIndex != 1);


        },
        afterLoad: function (anchorLink, index) {
            console.log(anchorLink, index);

            if (index !== 1) {
                setTimeout(function () {
                    body_var.addClass('show_go_top header_fixed');
                }, 100);
            }

        },
        afterRender: function () {
            pageSliderLoaded = true;
        },
        afterResize: function () {
        },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            console.log(anchorLink, index, slideAnchor, slideIndex);
        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
            console.log(anchorLink, index, slideIndex, direction, nextSlideIndex);
        }
    };

$(function ($) {

    body_var.delegate('.learnMoreBtn', 'click', function () {
        var page_link = $('a[href="#secondPage"]');

        if (page_link.length) {
            $('a[href="#secondPage"]').click();
        } else {
            docScrollTo($($(this).attr('href')).offset().top);
        }

        return false;
    });


    init_select();

});

function init_select() {
    $('.select2.select2-container').remove();

    $('.asideSelect').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('#aside_menu_dropdown'),
        width: '100%'
    });

}

function docScrollTo(y_pos) {

    $('html, body').animate({scrollTop: y_pos}, 600);

}

$(window).on('load', function () {
    if (win.width() >= 1200) {
        init_main_slider();
    }
}).on('scroll', function () {


}).on('resize', function () {

    if (win.width() < 1200) {

        if (pageSliderLoaded) {
            console.log('destroy');

            pageSliderLoaded = false;

            $.fn.fullpage.destroy();

            $('#fp-nav').remove();

            $('.fp-table').removeAttr('style').removeClass('fp-table');

            $('.fp-tableCell').each(function (ind) {
                var cell = $(this);

                cell.after(cell.html());
                cell.remove();
            });
            
            init_select();

        }
    } else {
        if (!pageSliderLoaded) {
            init_main_slider();
        }
    }

});

function init_main_slider() {

    if (pageSliderLoaded) {
        return;
    } else {
        console.log('loaded', pageSliderLoaded);
    }

    $('.pageSlider').fullpage(pageSliderParams);

}

