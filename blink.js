// YOUR CODE GOES HERE
(function( $ ) {

  $.fn.blink = function(milliseconds) {


    var target = this[0].nodeName.toLowerCase();

    setInterval(function() { $(target).toggle(); }, milliseconds);


  };

}(jQuery));
