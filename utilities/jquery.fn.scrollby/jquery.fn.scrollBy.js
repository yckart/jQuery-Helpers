/*!
 @name: scrollBy
 @desc: Calls a function within the chain
 @param: {Number} x | the horizontal offset
 @param: {Number} y | the vertical offset

 @see: http://stackoverflow.com/a/14818022/1250044
**/
jQuery.fn.scrollBy = function(x, y) {
    return this.animate({
        scrollLeft: '+=' + x,
        scrollTop: '+=' + y
    });
};