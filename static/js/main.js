$('#navbar')
  .sticky({
    context: "#wrapper"
});

// Navbar active item logic
$(window).scroll(function() {
    var curr_offset = window.scrollY;
    var home = 0;
    var about_me = $('#about_me').position().top;
    var projects = $('#projects').position().top;
    var contact = $('#contact').position().top;
    var height = $(window).height();

    var homeBreak = about_me / 2;
    var aboutBreak = ((projects - about_me) / 2) + about_me;
    var projectsBreak = ((contact - projects) / 2) + projects;

    if (curr_offset < homeBreak) {
        $('#navbar .item').removeClass("active");
        $('.home').addClass("active");
    } else if (curr_offset >= homeBreak && curr_offset < aboutBreak) {
        $('#navbar .item').removeClass("active");
        $('.aboutme').addClass("active");
    } else if (curr_offset >= aboutBreak && curr_offset < projectsBreak) {
        $('#navbar .item').removeClass("active");
        $('.projects-nav').addClass("active");
    } else {
        $('#navbar .item').removeClass("active");
        $('.contact-nav').addClass("active");
    }
});

// Smooth scrolling for a tags to hash locations
$('a[href*="#"]').click(function(event) {
    var target = $(this.hash);
    event.preventDefault();
    this.blur();
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 800);
});

//Popup functionality
$('a.popup').popup();

$('.parallax-window').parallax({imageSrc: 'code_blurred.jpg'});

$('.blurring.dimmable.image').dimmer({on: 'hover'});