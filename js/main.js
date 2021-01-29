$(function () {

    //DRY = Do not repeat yourself

    $('.panel-button').on('click', function () {
        var panelID = $(this).attr('data-panelID');
        var count = parseFloat($(this).attr('count')) + 1;
        $(this).attr('count', count);
        
        $(`#${panelID}`).html(`This button has been clicked ${count} times`)
        $('#' + panelID).slideToggle();
    });

    //tab panel

    $('.tab-panel .tabs li').on('click', function() {
        //find what panel to show 
        var panelID = $(this).attr('rel');
        var panelToHide = $(this).closest('.tab-panel').children('div .active');

        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');

        //show new panel
        $('#' + panelID).addClass('active');
        //hide old panel
        panelToHide.removeClass('active');
    });

});