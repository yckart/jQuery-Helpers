/*!
 @name: swap
 @desc: Swap elements within the DOM
 @param: {Object} b | The element to change with

 @see: https://github.com/brandonaaron/jquery-swap
**/
jQuery.fn.swap = function(b) {
    b = jQuery(b)[0];
    var a = this[0],
        a2 = a.cloneNode(true),
        b2 = b.cloneNode(true),
        stack = this;

    a.parentNode.replaceChild(b2, a);
    b.parentNode.replaceChild(a2, b);

    stack[0] = a2;
    return this.pushStack(stack);
};