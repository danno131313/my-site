$('#navbar')
  .sticky({
    context: "#wrapper"
});

// Navbar active item logic
$(window).scroll(function() {
    var curr_offset = window.scrollY;
    var win_height = $(window).height();

    // If phone is sideways, add some buffer
    if (win_height < 400) {
        win_height += 200;
    }

    if (curr_offset < win_height - 90) {
        $('.home').addClass("active");
        $('.aboutme').removeClass("active");
    } else {
        $('.aboutme').addClass("active");
        $('.home').removeClass("active");
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