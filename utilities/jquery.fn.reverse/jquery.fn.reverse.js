/*!
 @name: reverse
 @desc: Select all elements in the the reverse order
 @param: {fn} The callback to work with

 @see: http://stackoverflow.com/a/4500054
**/
jQuery.fn.reverse = function(fn) {
    var i = this.length;

    while (i) {
        i--;
        fn.call(this[i], i, this[i]);
    }
};