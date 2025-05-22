//EFEITO DE ANCORA NA NAVEGAÇÃO EM LANDPAGES
  
            
            
// <![CDATA[
    $(document).ready(function() {
      function filterPath(string) {
        return string
          .replace(/^\//,'')
          .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
          .replace(/\/$/,'');
      }
      $('a[href*=#]').each(function() {
        if ( filterPath(location.pathname) == filterPath(this.pathname)
        && location.hostname == this.hostname
        && this.hash.replace(/#/,'') ) {
          var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
          var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
           if ($target) {
             var targetOffset = $target.offset().top-80;
             $(this).click(function() {
               $('html, body').animate({scrollTop: targetOffset}, 1000);
               return false;
             });
          }
        }
      });
    });
 // ]]>