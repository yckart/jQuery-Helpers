/*!
 @name: random
 @desc: Randomize an array
 @param: {arr} array | the array to randomize

 @see: http://blog.gabrieleromanato.com/jquery-randomize-and-shuffle-an-array/
**/
jQuery.random = function (arr) {
    for (var j, x, i = arr.length; i; j = parseFloat(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
};

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
$.random(arr); // [2, 3, 4, 7, 8, 1, 9, 6, 5, 0]