/*!
 @name: exists
 @desc: Checking if an element exists or not
 @see: http://binarykitten.com/js/131-jquery-plugin-element-existence.html
 @depends: jQuery
**/
jQuery.fn.exists = function() {
    return (this.length > 0);
};
$("#box").exists(); // true



/*!
 @name: replaceClass
 @desc: Checking if an element exists or not
 @param: {oldClass} The old classname you are looking for,
 @param: {newClass} The new classname

 @see: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/replace
 @depends: jQuery
**/
jQuery.fn.replaceClass = function(oldClass, newClass) {
    return this.each(function(i, el) {
        $(el).attr('class', function(index, attr) {
            return attr.replace(oldClass, newClass);
        });
    });
};
$(".foo").replaceClass("foo", "bar"); // [<a href="#foo" id="box" class="bar">bar</a>]



/*!
 @name: href
 @desc: Returns the first href or an element with given href
 @param:
         {href} The href to return its element

 @see: https://github.com/cowboy/talks/blob/master/jquery-plugin-authoring.js#L347
 @depends: jQuery
**/
jQuery.fn.href = function(href) {
    return !arguments.length ? this.get(0).href : this.each(function() {
        this.href = href;
    });
};
$("a").href(); // #foo



/*!
 @name: hasdata
 @desc: Checks if data has stored on an element
 @param:
         {elem}  The element to test for,
         {i}     Selector parameter to check for an exact data set
         {match} Data set to test for

 @see: https://github.com/cowboy/talks/blob/master/jquery-plugin-authoring.js#L567
 @depends: jQuery
**/
jQuery.expr.filters.hasdata = function(elem, i, match) {
    var hasData = $.hasData(elem);
    return !match[3] ? hasData : hasData && match[3] in $(elem).data();
};
$("body").data("foo", "bar");
$("html").data("bar", "foo");

$(":hasdata"); // `<html>` & `<body>`
$(":hasdata(foo)"); // `<body>`



/*!
 @name: attached/detached
 @desc: Test if an element is in the DOM
 @param:
        {elem} The element to test for

 @see: https://github.com/cowboy/talks/blob/master/jquery-plugin-authoring.js#L557
 @depends: jQuery
**/
jQuery.extend($.expr.filters, {
    attached: function(elem) {
        return $.contains(document.documentElement, elem);
    },
    detached: function(elem) {
        return !$.expr.filters.attached(elem);
    }
});
$("div").is(":detached"); // false
$("div").detach().is(":detached"); // true
$("<div/>").is(":detached"); // true
$("div").is(":attached"); // true
$("div").detach().is(":attached"); // false
$("<div/>").is(":attached"); // false



/*!
 @name: reverse
 @desc: Select all elements in the the reverse order
 @param:
        {fn} The callback to work with

 @see: http://stackoverflow.com/a/4500054
 @depends: jQuery
**/
jQuery.fn.reverse = function(fn) {
    var i = this.length;

    while (i) {
        i--;
        fn.call(this[i], i, this[i]);
    }
};

$('li').reverse(function(i, e) {
    console.log(i); // 2, 1, 0
    console.log(e); // <li>Item 3</li>, <li>Item 2</li>, <li>Item 1</li>
});



/*!
 @name: swap
 @desc: Swap elements within the DOM
 @param:
        {b} The element to change with

 @see: https://github.com/brandonaaron/jquery-swap
 @depends: jQuery
**/
jQuery.fn.swap = function(b) {
    b = jQuery(b)[0];
    var a = this[0],
        a2 = a.cloneNode(true),
        b2 = b.cloneNode(true),
        stack = this;

    a.parentNode.replaceChild(b2, a);
    b.parentNode.replaceChild(a2, b);

    stack[0] = a2;
    return this.pushStack(stack);
};
$('li:first').swap('li:last');



/*!
 @name: pixel
 @desc: Return the numeric value of any css property
 @param:
        {} The property to get the value from

 @see: http://stackoverflow.com/a/1901665/1250044
 @depends: jQuery
**/
jQuery.fn.pixel = function(){
    return parseFloat($.fn.css.apply(this,arguments));
};
$('li').pixel('paddingTop'); // 5



/*!
 @name: scrollBottom
 @desc: Return distance to window bottom
 @param:

 @see: http://stackoverflow.com/q/8988697/1250044
 @depends: jQuery
**/
jQuery.fn.scrollBottom = function () {
  return $(document).height() - this.scrollTop() - this.height();
};



/*!
 @name: scrollRight
 @desc: Return distance to window right
 @param:

 @see: http://stackoverflow.com/q/8988697/1250044
 @depends: jQuery
**/
jQuery.fn.scrollRight = function () {
  return $(document).width() - this.scrollLeft() - this.width();
};



/*!
 @name: chain
 @desc: Calls a function within the chain
 @param: {func} function | the function to call

 @see: http://stackoverflow.com/q/2061501/1250044
 @depends: jQuery
**/
jQuery.fn.chain = function(func) {
    return func.apply(this, Array.prototype.slice.call(arguments, 1));
};

var foo = function(){
    console.log(this.selector);
};
$('#list').chain(foo); // #list



/*!
 @name: random
 @desc: Randomize an array
 @param: {arr} array | the array to randomize

 @see: http://blog.gabrieleromanato.com/jquery-randomize-and-shuffle-an-array/
 @depends: jQuery
**/
jQuery.random = function (arr) {
    for (var j, x, i = arr.length; i; j = parseFloat(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
};

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
$.random(arr); // [2, 3, 4, 7, 8, 1, 9, 6, 5, 0]



/*!
 @name: noop
 @desc: An empty function, that does nothing to preserve chainability
 @param:

 @see: http://stackoverflow.com/q/14437973/1250044
 @depends: jQuery
**/
jQuery.fn.noop = function(){ return this; };

$(document.body).noop();