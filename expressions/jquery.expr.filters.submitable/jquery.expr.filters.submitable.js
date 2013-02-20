/*!
 @name: submitable
 @desc: Form elements that are submitable based on these criteria

 @param: {object} e - The element to test for
 @param: {number} i - The index for each element
 @param: {array} m - Contains important parameters

 @see: http://www.malsup.com/jquery/expr/
**/
jQuery.expr.filters.submitable = function (e, i, m) {
    return !e.disabled && ( e.selected || e.checked || e.nodeName.toUpperCase() === 'TEXTAREA' || ( e.nodeName.toUpperCase() === 'INPUT' && {text:1, hidden:1, password:1}[e.type] ) );
};