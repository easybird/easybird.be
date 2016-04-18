(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

        $(document).ready(function () {
            $('.scrollspy').scrollSpy();
        });

        // Floating-Fixed table of contents
        setTimeout(function () {
            var tocWrapperHeight = 0; // Max height of ads.
            var tocHeight = $('.toc-wrapper').length ? $('.toc-wrapper').height() : 0;
            var footerOffset = $('footer').first().length ? $('footer').first().offset().top : 0;
            var bottomOffset = footerOffset - tocHeight - tocWrapperHeight;
            $('.toc-wrapper').pushpin({
                top: $('nav').height() + $('#index-banner').height(),
                bottom: bottomOffset
            });
        }, 100);
    }); // end of document ready
})(jQuery); // end of jQuery name space
