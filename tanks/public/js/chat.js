/**
 * Created by dossorio on 28/04/2014.
 */

$.fn.chat = function () {

    var socket = io.connect('http://localhost:8888');

    this.append('<input name="msg" type="text" placeholder="Write sth & enter"/>');
    $('input', this).keypress(function (e) {
        if (e.keyCode == 13) {
            input = $(this),
                msg = input.val();

            input.parent().append('<p>' + msg + '</p>');
            input.val('');

            socket.emit('msg sent', { msg: msg });
        }
    });

    socket.on('news', function (data) {
        console.log(data);
    });
};

$(function () {
    $('.chat').chat();
});
