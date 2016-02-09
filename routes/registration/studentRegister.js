module.exports = function(app) {
    app.get('/register', function(req, res) {
        res.render('register');
    });

    app.post('/register', function(req, res) {
        console.log(req.body);
        var sendData = 'Thanks for registering with us';

        var dateObj = new Date();
        var currentYear = dateObj.getFullYear();
        var regYear = currentYear - req.body.year;

        var std = new Student({
            name: req.body.name,
            roll: req.body.roll,
            email: req.body.email,
            password: req.body.password,
            regYear: regYear,
            department: req.body.dept
        });

        std.save(function(err) {
            if (err) {
                if (err.code == 11000) {
                    sendData = 'You are already registered';
                    res.send(sendData)
                }
                console.log(err);
            } else {
                res.send(sendData);
            }
        });

    });

};
