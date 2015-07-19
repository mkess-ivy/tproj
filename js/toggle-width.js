$(document).ready( function(){
    $('#toggle-button').click( function() {
        var toggleWidth = $("#toggle").width() == 800 ? "0px" : "800px";
        $('#toggle').animate({ width: toggleWidth });
    });
});