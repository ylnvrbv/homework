$(function() {
    var $links = $('.countries__item');

    $links.on('click', function() {
        var $submenu = $(this).find('.countries__submenu');
        var $arrow = $(this).find('.arrow');
        $submenu.animate({ 'height': 'toggle', 'opacity': 'toggle' }, 300);
        $arrow.toggleClass('arrow-rotated');
    });

    var $searchList = $('.wrapper-search-list');

    $searchList.on('click', function() {
        var $arrow = $(this).find('.arrow__search');
        $arrow.toggleClass('arrow-rotated', 200);

    });

    $('input[name="daterange"]').daterangepicker();

    $("#ex2").slider({});

    $('input[name="daterange"]').daterangepicker(
{
    locale: {
      format: 'DD.MM.YYYY'
    },
    startDate: '01.01.2016',
    endDate: '01.03.2016'
}, 
function(start, end, label) {
    alert("A new date range was chosen: " + start.format('DD.MM.YYYY') + ' to ' + end.format('DD.MM.YYYY'));
});

});




























// $('#slider-range').slider({
//     range: true,
//     min: 100,
//     max: 1800,
//     step: 50,
//     values: [100, 1100]
// });

// $('.ui-slider-range').append($('.range-wrapper'));

// $('.range').html('<span class="range-value"><sup>$</sup>' + $('#slider-range').slider("values", 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</span><span class="range-divider"></span><span class="range-value"><sup>$</sup>' + $("#slider-range").slider("values", 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</span>');

// $('.ui-slider-handle, .ui-slider-range').on('mousedown', function() {
//     $('.gear-large').addClass('active');
// });