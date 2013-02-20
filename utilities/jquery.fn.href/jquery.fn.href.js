/*!
 @name: href
 @desc: Returns the first href or an element with given href
 @param: {href} The href to return its element

 @see: https://github.com/cowboy/talks/blob/master/jquery-plugin-authoring.js#L347
**/
jQuery.fn.href = function(href) {
    return !arguments.length ? this.get(0).href : this.each(function() {
        this.href = href;
    });
};