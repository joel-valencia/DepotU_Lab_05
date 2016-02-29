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
    });
}

$(document).ready(main);