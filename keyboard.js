var main = function() {
    $('#keyboard-upper-container').hide();
    
    var sentenceIndex = 0;
    var sentences = ['one two three', 'four five six', 'seven'];
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
            $('#words-typed').append('<div class="glyphicon glyphicon-ok"></div>');
            
            if (letterIndex == sentences[sentenceIndex].length) {
                sentenceIndex++;
                letterIndex = 0;
                $('#words').text(sentences[sentenceIndex]);
                $('#words-typed').empty();
            }
            
            nextLetter = sentences[sentenceIndex].charAt(letterIndex);
            $('#next-letter').text(sentences[sentenceIndex].charAt(letterIndex));
            
            var letterSpacing = parseInt($('#word-container').css("letter-spacing"), 10);
            $('#block').css("margin-left", "calc(" + letterIndex + "ch + " + (letterSpacing * letterIndex) + "px");
        } else {
            $('#words-typed').append('<div class="glyphicon glyphicon-remove"></div>');
        }
        

    });
    
}



$(document).ready(main);