var main = function() {
    $('#keyboard-upper-container').hide();
    
    var sentenceIndex = 0;
    var sentences = ['one two three', 'four five six', 'seven'];
    var letterIndex = 0;
    var words = 0;
    var mistakes = 0;
    var seconds = 0;
    var started = false;
    var nextLetter = sentences[sentenceIndex].charAt(letterIndex);

    $('#words').text(sentences[sentenceIndex]);
    $('#next-letter').text(nextLetter);
    if (nextLetter == " ") {
        $('#next-letter').text("[space]");
    }

    function addSecond() {
        seconds++;
    }
    
    function endPrompt() {
        var response = prompt("Play again?").toLowerCase();
        if (response == "yes") {
            location.reload();
        }
    }
    
    $(document).keydown(function(event){ 
        if (event.which == 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        } else {
            if (started == false) {
                started = true;
                var timer = setInterval(addSecond, 1000);
            }
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
                if (sentenceIndex == sentences.length) {
                    words++;
                    clearInterval(timer);
                    var wpm = Math.floor(((60 / seconds) * words) - (mistakes * 2));
                    $('#next-letter').text(wpm + " wpm")
                    var timer = setTimeout(endPrompt, 2000);
                } else {
                    $('#words').text(sentences[sentenceIndex]);
                    $('#words-typed').empty();
                    words++;
                }
            }
            
            nextLetter = sentences[sentenceIndex].charAt(letterIndex);
            $('#next-letter').text(sentences[sentenceIndex].charAt(letterIndex));
            if (nextLetter == " ") {
                words++;
                $('#next-letter').text("[space]");
            }
            
            var letterSpacing = parseInt($('#word-container').css("letter-spacing"), 10);
            $('#block').css("margin-left", "calc(" + letterIndex + "ch + " + (letterSpacing * letterIndex) + "px");
        } else {
            $('#words-typed').append('<div class="glyphicon glyphicon-remove"></div>');
            mistakes++;
        }
        

    });
    
}



$(document).ready(main);