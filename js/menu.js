// MENU TOGGLE
$(".menu-toggle a").click(function (e) {
    e.preventDefault();

    // Toggle Main Menu
    $("nav.main-menu ul").slideToggle();
});

// MENU RESIZE
$(window).resize(function () {
    var w = $(window).width();
    if (w > 800) {
        $("nav.main-menu ul").removeAttr('style');
    }
});