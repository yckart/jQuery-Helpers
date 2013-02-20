/*!
 @name: hasid
 @desc: Checks if data has any/or given id applied

 @param: {object} e - The element to test for
 @param: {number} i - The index for each element
 @param: {array} m - Contains important parameters
**/
jQuery.expr.filters.hasid = function(e, i, m) {
    return m[3] ? e.id === m[3] : !!e.id;
};