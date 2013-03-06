/*!
 * @see https://gist.github.com/laktek/758269/#comment-784188
 */
jQuery.isBlank = function (obj) {
    if (!obj || $.trim(obj) === "") return true;
    if (obj.length && obj.length > 0) return false;

    for (var prop in obj) if (obj[prop]) return false;
    return true;
};

console.log(
    $.isBlank(0), // true
    $.isBlank(""), // true
    $.isBlank(null), // true
    $.isBlank(false), // true
    $.isBlank(undefined), // true

    $.isBlank([]), // true
    $.isBlank([null]), // true
    $.isBlank([undefined]), // true

    $.isBlank({}), // true
    $.isBlank({foo: 0}), // true
    $.isBlank({foo: null}), // true
    $.isBlank({foo: false}), // true
    $.isBlank({foo: undefined}), // true

    $.isBlank("Hello"), // false
    $.isBlank([1,2,3]), // false
    $.isBlank({foo: 1}), // false
    $.isBlank({foo: 3, bar: [1,2,3]}), // false

    "incorrect:",
    $.isBlank(1), // true
    $.isBlank(true), // true

    $.isBlank([0]), // false
    $.isBlank([false]), // false
    $.isBlank("0"), // false
    $.isBlank(["0"]), // false
    $.isBlank({foo: "0"}) // false
);