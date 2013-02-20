/*!
 @name: chain
 @desc: Calls a function within the chain
 @param: {func} function | the function to call

 @see: http://stackoverflow.com/q/2061501/1250044
**/
jQuery.fn.chain = function(func) {
    return func.apply(this, Array.prototype.slice.call(arguments, 1));
};