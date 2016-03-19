var service_tabs;

$(function ($) {

    var tabBlock = $('.tabBlock'),
        service_tabs = tabBlock.tabs({
            active: 0,
            tabContext: tabBlock.data('tab-context'),
            activate: function (e, ui) {
                var tab = ui.newTab;
                console.log(ui);
                tab.parent().attr('data-active-tab', tab.index());

            }
        });

});