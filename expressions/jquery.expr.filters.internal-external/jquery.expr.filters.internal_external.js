/*!
 @name: internal/external
 @desc: Test if an href refers to an external or internal source

 @param: {object} e - The element to test for

 @see: http://tjrus.com/blog/open-foreign-domain-links-in-a-new-window
**/
jQuery.extend($.expr.filters, {
    extern: function(e) {
        return RegExp('/' + location.host + '/').test(e.href);
    },
    intern: function(e) {
        return !RegExp('/' + location.host + '/').test(e.href);
    }
});
$("a:intern").css({color: "#f00"});
$("a:extern").css({color: "#baa"});