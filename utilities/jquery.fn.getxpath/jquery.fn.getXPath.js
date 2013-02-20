/*!
 @name: getXPath
 @desc: Gets the full XPath to a DOM-Node

 @see: http://stackoverflow.com/a/3454579/1250044
**/
jQuery.fn.getXPath = function () {
    var self = this[0],
        xpath = '';
    for (; self && self.nodeType === 1; self = self.parentNode) {
        var id = $(self.parentNode).children(self.tagName).index(self) + 1;
        id = id > 1 ? '[' + id + ']' : '';
        xpath = '>' + self.tagName.toLowerCase() + id + xpath;
    }
    return xpath;
};