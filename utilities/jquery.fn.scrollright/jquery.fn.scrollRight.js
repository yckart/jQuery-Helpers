/*!
 @name: scrollRight
 @desc: Return distance to window right

 @see: http://stackoverflow.com/q/8988697/1250044
 @depends: jQuery
**/
jQuery.fn.scrollRight = function () {
  return $(document).width() - this.scrollLeft() - this.width();
};