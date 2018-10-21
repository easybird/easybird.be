function main() {
    var locale = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
    changeLocale(locale);
}

function changeLocale(locale) {
    if (!locale) {
        locale = 'en';
    }
    arb.setResourceSelector(locale);

    // JS localization
    var r$ = arb.getResource("translations");

    // This should appear after all the translatable HTML content
    arb.localizeHtml();
}

main();

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

      $(document).ready(function(){
          $('.scrollspy').scrollSpy();
      });

  }); // end of document ready
})(jQuery); // end of jQuery name space