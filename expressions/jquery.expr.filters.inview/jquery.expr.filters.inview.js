/*!
 @name: inview
 @desc: Checks if an element is in viewport

 @param: {object} e - The element to test for
 @param: {number} i - The index for each element
 @param: {array} m - Contains important parameters
**/
$.expr.filters.inview = function(e, i, m) {
    var el = $(e),
        win = $(window),
        params = (m[3] || '').split(","),
        width = el.outerWidth() + ~~params[0],
        height = el.outerHeight() + ~~params[1],
        offset = el.offset(),

        viewport = {
            width: win.width() + ~~params[0],
            height: win.height() + ~~params[1]
        },

        scrollY = win.scrollTop(),
        scrollX = win.scrollLeft();
    return (
    offset.top < (scrollY + viewport.height) && offset.left < (scrollX + viewport.width) && (offset.top + height) > scrollY && (offset.left + width) > scrollX);
};