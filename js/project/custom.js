
// jQuery for page scrolling feature - requires jQuery Easing plugin
$('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

// Handle collapsing of navigation bar on scroll
var docElem = document.documentElement,
        didScroll = false,
        changeHeaderOn = 100;

window.addEventListener('scroll', function (event) {
    if (!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 250);
    }
}, false);

function scrollPage() {
    var sy = scrollY();
    if (sy >= changeHeaderOn) {
        $('.navbar-default').addClass('navbar-shrink');
    }
    else {
        $('.navbar-default').removeClass('navbar-shrink');
    }
    didScroll = false;
}

function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
}

// On page load start by setting the bar
scrollPage();
