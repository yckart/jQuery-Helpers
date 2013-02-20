/*!
 @name: unselectable
 @desc: Prevents default text selection behavior

 @see: https://github.com/jaz303/jquery-grab-bag/blob/master/javascripts/jquery.unselectable.js
**/
(function($) {
    $.fn.unselectable = function() {
        return this.each(function() {
            this.onselectstart = function() { return false; };
            this.unselectable = 'on';
            this.style.MozUserSelect = 'none';
        });
    };
}(jQuery));