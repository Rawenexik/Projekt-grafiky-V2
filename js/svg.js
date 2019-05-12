$(function(){
    $('h2').text('Popis základní desky');
    $('.objekt').attr({'style':'fill:rgba(0,0,100,0.5);'});

    $('.objekt').on('click',function(){
        $('.objekt').attr({'style':'fill:rgba(0,0,100,0.5);'});
        $(this).attr({'style':'fill:rgba(0,0,0,0.5);stroke:black'});
        $('#text h2').text($(this).data('nazev'));
    })
})