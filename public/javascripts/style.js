(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

        $(document).ready(function () {
            $('select').material_select();

            $('.scrollspy').scrollSpy();

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

            /**
             * JS: Progress bar
             */
            if ($("#progressbar").length) {
                var scrollTop = $(window).scrollTop(),
                    documentHeight = $(document).height(),
                    windowHeight = $(window).height(),
                    footerOffset = $('footer').height(),
                    discussHeight = $("#disqus_thread").height();

                var scrollPercent;
                if (windowHeight >= (documentHeight - footerOffset - discussHeight)) {
                    scrollPercent = 100;
                } else {
                    scrollPercent = 0;
                }

                $("#progressbar").css("width", scrollPercent + "%");
                $("#progressbar-value").html(scrollPercent + "%");
            }

            $(window).scroll(function () {
                if ($("#progressbar").length) {
                    var scrollTop = $(window).scrollTop(),
                        documentHeight = $(document).height(),
                        windowHeight = $(window).height(),
                        footerOffset = $('footer').height(),
                        discussHeight = $("#disqus_thread").height();

                    var scrollPercent = (scrollTop / (documentHeight - windowHeight - footerOffset - discussHeight)) * 100;
                    scrollPercent = Math.round(scrollPercent);

                    if (windowHeight >= (documentHeight - footerOffset - discussHeight)) {
                        scrollPercent = 100;
                    } else if (scrollPercent < 0) {
                        scrollPercent = 0;
                    } else if (scrollPercent > 100) {
                        scrollPercent = 100;
                    }

                    $("#progressbar").css("width", scrollPercent + "%");
                    $("#progressbar-value").html(scrollPercent + "%");
                }
            });

        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
