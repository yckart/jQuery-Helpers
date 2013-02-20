/*!
 @name: wait
 @desc: Calls a function with delay
 @param: {function} fn | The function to call
 @param: {string/number} delay | The delay timeout

 @see: http://james.padolsey.com/javascript/jquery-delay-plugin/
**/
(function($){
    $.wait = $.fn.wait = function(fn, delay) {
        jQuery.fx.step.delay = $.noop;
        return (this instanceof $ ? this : $({delay:0})).animate({delay:1}, parseFloat(delay || fn), isNaN(Number(fn)) ? fn : delay);
    };
}(jQuery));

$.wait(function(){
    console.log(true);
}, 2000);

$('#first').wait(function() {
    $(this).animate({
        height: 180
    }, 1000);
}, 2000);

$('#second').wait(2000).animate({
    height: 180
}, 1000);