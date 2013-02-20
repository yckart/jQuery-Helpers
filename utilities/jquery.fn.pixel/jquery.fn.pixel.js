/*!
 @name: pixel
 @desc: Returns the numeric value of any css property
 @param: {String} The property to get the value from

 @see: http://stackoverflow.com/a/1901665/1250044
**/
jQuery.fn.pixel = function(){
    return parseFloat($.fn.css.apply(this,arguments));
};