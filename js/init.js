(function($) {
    $(function() {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();

        $('#resume-button').click(function() {
            $("#resume-section").removeClass("hide");
            $("#home-section").addClass("hide");
        });
        $('#portfolio-button').click(function() {
            $("#portfolio-section").removeClass("hide");
            $("#home-section").addClass("hide");
        });
        $('#back-home-p').click(function() {
            $("#portfolio-section").addClass("hide");
            $("#home-section").removeClass("hide");
        });
        $('#back-home-r').click(function() {
            $("#resume-section").addClass("hide");
            $("#home-section").removeClass("hide");
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space