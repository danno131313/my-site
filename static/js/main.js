$(function($){
   console.log("TEST!!");
   switch(window.location.pathname){
      case "/aboutme":  $(".aboutme").addClass("active"); console.log("ABOUT"); break;
      case "/":  $(".home").addClass("active"); break;
   }
});

$('#projectmenu').dropdown({action: 'nothing'});
$('.dashboardlink').click(function() {
    location.hash = 'dashboardproject';
});
$('#hamburgermenu').click(function() {
    $('.ui.sidebar').sidebar('toggle');
});