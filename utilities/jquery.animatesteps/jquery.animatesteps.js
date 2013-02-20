$.fn.animateSteps = function (arr) {
    return this.each(function () {
        var self = $(this);

        (function loop(i) {
            var next = arr[i];
            if (!next) return;

            setTimeout(function () {
                self.animate(next.animate, next.options);
                loop(i+1);
            }, next.start);
        })(0);
    });
};