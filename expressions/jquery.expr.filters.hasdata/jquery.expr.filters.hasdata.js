/*!
 @name: hasdata
 @desc: Checks if data has stored on an element

 @param: {object} e - The element to test for
 @param: {number} i - The index for each element
 @param: {array} m - Contains important parameters

 @see: https://github.com/cowboy/talks/blob/master/jquery-plugin-authoring.js#L567
**/
jQuery.expr.filters.hasdata = function(e, i, m) {
    var hasData = $.hasData(e);
    return !m[3] ? hasData : hasData && m[3] in $(e).data();
};
$("body").data("foo", "bar");
$("html").data("bar", "foo");

$(":hasdata"); // `<html>` & `<body>`
$(":hasdata(foo)"); // `<body>`