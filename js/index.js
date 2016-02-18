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
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'forthPage'],
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

            //body_var.toggleClass('show_go_top', index > 1);


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

    $('.learnMoreBtn').on('click', function () {
        var page_link = $('a[href="#secondPage"]');

        if (page_link.length) {
            $('a[href="#secondPage"]').click();
        } else {
            docScrollTo($($(this).attr('href')).offset().top);
        }

        return false;
    });

    $('.heroSlidePrev').on('click', function () {
        var btn = $(this);

        btn.closest('.slider_holder').find('.slick-prev').click();

        return false;
    });

    $('.heroSlideNext').on('click', function () {
        var btn = $(this);

        btn.closest('.slider_holder').find('.slick-next').click();

        return false;
    });


    initHeroSlider();

});

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

            $('.fp-tableCell').removeAttr('style').parent().removeAttr('style');

        }
    } else {
        if (!pageSliderLoaded) {
            console.log('init');

            init_main_slider();
        }
    }

});

function initHeroSlider() {
    heroSlider = $('.heroSlider').slick({
        infinite: true,
        init: function () {

        }
    });
}

function init_main_slider() {

    if (pageSliderLoaded) {
        return;
    } else {
        console.log('loaded', pageSliderLoaded);
    }

    $('.pageSlider').fullpage(pageSliderParams);

    if (!heroSlider) {
        initHeroSlider();
    }


    //.mousewheel(function (e) {
    //e.preventDefault();
    //
    //if (Math.abs(e.deltaY) < pageSliderDensity) return;
    //
    //if (e.deltaY < 0) {
    //    pageSlider.slick('slickNext');
    //}
    //else {
    //    pageSlider.slick('slickPrev');
    //}
    //});
}

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