$(function () {
    $('#change-color').on('click', function (){
        $('#target').css('color', 'pink');
    });
    $('#change-text').on('click', function (){
        $('#target').text('変わりました');
    });
    $('#fade-out').on('click', function (){
        $('#target').fadeOut();
    });
    $('#fade-in').on('click', function (){
        $('#target').fadeIn();
    });
});