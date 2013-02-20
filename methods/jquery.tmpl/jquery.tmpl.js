/*!
 * @author Yannick Albert
 * @desc Probably the simplest jquery template engine.
 *
 * @param {string} str | the string to search/replace in
 * @param {object} obj | the map which holds the placeholder tags
 *
 * @see: http://blog.gabrieleromanato.com/jquery-randomize-and-shuffle-an-array/
**/
;(function ($) {
    $.tmpl = function (str, obj) {
        return str = str.replace(/#{\s*([a-z0-9\-_]+)\s*}/ig, function (match, key) {
            return obj[key] === undefined ? match : obj[key];
        });
    };
}(jQuery));