$(function(){
    /* Změny zobrazení v sekci ustava */
    $('#grafika h4').click(function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#048'});
        } else {
            $(this).css({'background-color':'#444'});
        }
        $(this).nextUntil('h4').toggle(1000);
    });

    /* Vykreslení prezidentů */
    var kviz = $('#kviz div.row');
    var odkazy = $('#odkazy ul');
    karty.forEach(function(obj,idx){
        kviz.append('<div class="col-sm-4"><figure><img src="img/prezident0.jpg" alt="prezident"><figcaption>'
        +obj.name+'</figcaption></figure></div>');
        odkazy.append('<li><a href="'+ obj.link +'">'+ obj.name +'</a></li>');
    });

   
    var i = 0;
    window.setInterval(function(){
        $('#sidlo img').attr('src','img/'+sidla[i].photo);
        $('#sidlo figcaption').text(sidla[i].place);
        i<sidla.length-1 ? i++ : i=0; 
    }, 8000);

    
})