/**
 * Created by dossorio on 28/04/2014.
 */

$(function () {

    $.fn.chat = function () {
        this.append('<input name="msg" type="text" placeholder="Write sth & enter"/>');
        $('input', this).keypress(function (e) {
            if (e.keyCode == 13) {
                $(this).parent().append('<p>' + $(this).val() + '</p>');
                $(this).val('');
            }
        });
    };

    $('.chat').chat();
});
