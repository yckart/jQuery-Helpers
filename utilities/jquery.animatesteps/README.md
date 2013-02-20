    var animations = [{
        start: 0,
        animate: {
            left: 100
        },
        options: {
            duration: 1200
        }
    }, {
        start: 2200,
        animate: {
            top: 100
        },
        options: {}
    }];

    $('#foo').animateSteps(animations);