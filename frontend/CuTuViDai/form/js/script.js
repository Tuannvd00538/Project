  $("#login-button").click(function(event){
       event.preventDefault();
    
    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
});

window.console = window.console || function(t) {};

if (document.location.search.match(/type=embed/gi)) {
 window.parent.postMessage("resize", "*");
}