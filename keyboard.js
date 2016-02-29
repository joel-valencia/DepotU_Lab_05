var main = function() {
    var letterIndex = 0;
    
    var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    
    $('#keyboard-upper-container').hide();
    $('#words').text(sentences[0]);
    $('#next-letter').text(sentences[0].charAt(letterIndex));
    
    $(document).keydown(function(event){ 
        if (event.which == 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
            
        }

        letterIndex++;
        $('#next-letter').text(sentences[0].charAt(letterIndex));
        var letterSpacing = parseInt($('#word-container').css("letter-spacing"), 10);
        $('#block').css("margin-left", "calc(" + letterIndex + "ch + " + (letterSpacing * letterIndex) + "px");
    });
    
    $(document).keyup(function(event){ 
        if (event.which == 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
            
        }
        $('.key').css("background-color", "#f5f5f5");
    });
    
    $(document).keypress(function(event){ 
        console.log(String.fromCharCode(event.which));
        
        if ($("#" + event.which).length) {
            $("#" + event.which).css("background-color", "yellow");
        } else {
            $("#" + String.fromCharCode(event.which)).css("background-color", "yellow");
        }
    });
    
}



$(document).ready(main);