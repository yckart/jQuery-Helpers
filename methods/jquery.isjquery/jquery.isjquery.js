/*!
 @name: isjQuery
 @desc: Determine if an object reference is a jQuery object.
 @param: {Object} obj | The object to test for

 @see: http://benalman.com/projects/jquery-misc-plugins/#isjquery
**/
jQuery.isjQuery = function(obj) {
    return obj && obj.hasOwnProperty && obj instanceof jQuery;
};