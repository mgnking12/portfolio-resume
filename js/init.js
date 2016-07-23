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
        })
    }); // end of document ready
})(jQuery); // end of jQuery name space