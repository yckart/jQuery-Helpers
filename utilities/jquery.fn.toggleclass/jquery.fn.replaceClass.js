/*!
 @name: replaceClass
 @desc: Checking if an element exists or not
 @param: {oldClass} The old classname you are looking for,
 @param: {newClass} The new classname

 @see: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/replace
**/
jQuery.fn.replaceClass = function(oldClass, newClass) {
    return this.each(function(i, el) {
        $(el).attr('class', function(index, attr) {
            return attr.replace(oldClass, newClass);
        });
    });
};