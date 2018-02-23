$('#navbar')
  .sticky({
    context: "#wrapper"
});

$(window).scroll(function() {
    var curr_offset = window.scrollY;
    var win_height = $(window).height();
    console.log(curr_offset);
    if (curr_offset < win_height - 90) {
        $('.home').addClass("active");
        $('.aboutme').removeClass("active");
    } else {
        $('.aboutme').addClass("active");
        $('.home').removeClass("active");
    }
});

$('a[href*="#"]').click(function(event) {
    var target = $(this.hash);
    console.log(this);
    event.preventDefault();
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 800);
});