/*!
 @name: scrollBottom
 @desc: Return distance to window bottom

 @see: http://stackoverflow.com/q/8988697/1250044
**/
jQuery.fn.scrollBottom = function () {
  return $(document).height() - this.scrollTop() - this.height();
};