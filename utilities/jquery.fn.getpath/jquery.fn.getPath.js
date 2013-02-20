/*!
 @name: getPath
 @desc: Gets the full path to a DOM-Node
 @param {Boolean} asArr | Return the path as a string or an array
 @see: http://stackoverflow.com/a/4459500/1250044
**/
jQuery.fn.getPath = function (asArr) {
    var path = this.parents().andSelf().map(function () {
        var $this = $(this),
            tagName = this.nodeName.toLowerCase();
        if ($this.siblings(tagName).length > 0) {
            tagName += ":eq(" + $this.prevAll(tagName).length + ")";
        }
        return tagName;
    }).get();
    return asArr ? path : path.join(">");
};