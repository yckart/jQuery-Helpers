/*!
 @name: utf8Encode/utf8Decode
 @desc: Encodes or decodes a string
 @param: {String} str | Encoded or decoded string
**/
jQuery.utf8 = {
    encode: function (str) { return unescape( encodeURIComponent(str) ); },
    decode: function (str) { return decodeURIComponent( escape(str) ); }
};

console.log($.utf8.encode('♥')); // â¥
console.log($.utf8.decode('â¥')); // ♥