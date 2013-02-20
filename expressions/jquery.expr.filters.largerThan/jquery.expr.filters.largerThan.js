/*!
 @name: largerThan
 @desc: Select all elements larger than the specified one.

 @param: {object} e - The element to test for
 @param: {number} i - The index for each element
 @param: {array} m - Contains important parameters

 @see: https://github.com/websanova/selectors/blob/master/wSelectors.js#L72
**/
$.expr.filters.largerThan = function(e, i, m) {
    return m[3] ? $(e).outerWidth() * $(e).outerHeight() > $(m[3]).outerWidth() * $(m[3]).outerHeight() : false;
};