var main = function() {
    $('#keyboard-upper-container').hide();
    
    var sentenceIndex = 0;
    var sentences = ['one two thre', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    var letterIndex = 0;
    var nextLetter = sentences[sentenceIndex].charAt(letterIndex);

    $('#words').text(sentences[sentenceIndex]);
    $('#next-letter').text(nextLetter);

    
    $(document).keydown(function(event){ 
        if (event.which == 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        }
    });
    
    $(document).keyup(function(event){ 
        if (event.which == 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
            
        }
        $('.key').css("background-color", "#f5f5f5");
    });
    
    $(document).keypress(function(event){ 
        
        if ($("#" + event.which).length) {
            $("#" + event.which).css("background-color", "yellow");
        } else {
            $("#" + String.fromCharCode(event.which)).css("background-color", "yellow");
        }
        
        var letter = String.fromCharCode(event.which);
        
        if (letter == nextLetter) {
            letterIndex++;
            
            if (letterIndex == sentences[sentenceIndex].length) {
                sentenceIndex++;
                letterIndex = 0;
                $('#words').text(sentences[sentenceIndex]);
            }
            
            nextLetter = sentences[sentenceIndex].charAt(letterIndex);
            $('#next-letter').text(sentences[sentenceIndex].charAt(letterIndex));
            
            var letterSpacing = parseInt($('#word-container').css("letter-spacing"), 10);
            $('#block').css("margin-left", "calc(" + letterIndex + "ch + " + (letterSpacing * letterIndex) + "px");
        }
        

    });
    
}



$(document).ready(main);