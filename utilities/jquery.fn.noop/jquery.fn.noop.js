/*!
 @name: noop
 @desc: An empty function, that does nothing to preserve chainability
 @param:

 @see: http://stackoverflow.com/q/14437973/1250044
 @depends: jQuery
**/
jQuery.fn.noop = function(){
    return this;
};