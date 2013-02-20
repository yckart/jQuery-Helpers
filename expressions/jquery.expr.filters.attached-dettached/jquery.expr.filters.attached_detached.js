/*!
 @name: attached/detached
 @desc: Test if an element is in the DOM

 @param: {object} e - The element to test for

 @see: https://github.com/cowboy/talks/blob/master/jquery-plugin-authoring.js#L557
**/
jQuery.extend($.expr.filters, {
    attached: function(e) {
        return $.contains(document.documentElement, e);
    },
    detached: function(e) {
        return !$.expr.filters.attached(e);
    }
});
$("div").is(":detached"); // false
$("div").detach().is(":detached"); // true
$("<div/>").is(":detached"); // true
$("div").is(":attached"); // true
$("div").detach().is(":attached"); // false
$("<div/>").is(":attached"); // false