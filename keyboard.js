var main = function() {
    
    $('#keyboard-upper-container').hide();
    
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
        console.log(String.fromCharCode(event.which));
        
        if ($("#" + event.which).length) {
            $("#" + event.which).css("background-color", "yellow");
        } else {
            $("#" + String.fromCharCode(event.which)).css("background-color", "yellow");
        }
    });
    
}

$(document).ready(main);