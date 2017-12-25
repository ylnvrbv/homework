$(function() {

    console.log('The script has been loaded');

    var menu = $('.header__menu');
    var button = $('#menu-main-item');
    var list = $('.menu-list');
    var isClosed = true;

    button.on('click', function() {

    	if (isClosed == true) {
    		menu.addClass('menu-opened', 'fast');
    	}
        
        list.animate({ 'height': 'toggle', 'padding-top':  'toggle'}, 'slow', function() {

        	if (isClosed == false) {
        		menu.removeClass('menu-opened', 'fast');
        	}
			isClosed = !isClosed;        
        });
        
    });

});