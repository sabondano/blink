// YOUR CODE GOES HERE
(function( $ ) {

  $.fn.blink = function(milliseconds) {

    this.each(function() {

      var target = this.className;

      setInterval(function() { $("." + target).toggle(); }, milliseconds);

    });

  };

}(jQuery));
