(function ($) {
    var oldStep = $.Tween.propHooks._default.set;
    $.event.special.animating = {};
    $.Tween.propHooks._default.set = function (fx) {
        $(fx.elem).trigger('animating', fx);
        oldStep.apply(this, arguments);
    };
}(jQuery));