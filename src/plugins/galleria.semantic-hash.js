/*!
 * [mjhoy]-Galleria SemanticHash Plugin v 0.1
 * http://github.com/mjhoy
 *
 * This plugin should only be used as an alternative to the History plugin.
 * As of now, only works with mjhoy's additions to galleria.js.
 *
 */
(function($) {
    
    var G = window.Galleria; 
    if (typeof G == 'undefined' || G.History) {
        return;
    }

    G.SemanticHash = (function () {
        
        return {
          change: function (value) {
          },
          value: function (value) {
              if (!(navigator.userAgent.match(/iPad/i))) {
                  window.location.replace('#' + value.match(/[^\/]+\.jpg/i))
              }
          },
          load: function(fn) {
              var src = window.location.hash.replace(/\#/,'');
              fn();
          }
        };
    })();
})(jQuery);