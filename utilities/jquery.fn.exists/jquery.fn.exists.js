/*!
 @name: exists
 @desc: Checking if an element exists or not
 @see: http://binarykitten.com/js/131-jquery-plugin-element-existence.html
**/
jQuery.fn.exists = function() {
    return (this.length > 0);
};