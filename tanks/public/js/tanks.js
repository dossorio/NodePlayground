/**
 * Created by dossorio on 29/04/2014.
 */

$.fn.tanks = function () {

    /* pg = Canvas Playground */
    var pg = document.createElement('canvas'),
        pgContext = pg.getContext('2d');

    $(pg)
        .height('100%')
        .width('100%')
        .appendTo(this);

    pgContext.fillRect(50, 25, 150, 100);

    /* keys 37, 38, 39 and 40 */
    $(window).keypress(function(e){
        switch(e.keyCode){
            case 37:
                console.log('left');
                break;
            case 38:
                console.log('up');
                break;
            case 39:
                console.log('right');
                break;
            case 40:
                console.log('down');
                break;
        }
    });
};

$(function () {
    $('.tanks').tanks();
});
