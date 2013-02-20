    $('#foo').animate({width: 200});

    $('#foo').on('animating', function (e, fx) {
        console.log(fx);
    });