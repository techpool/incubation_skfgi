module.exports = function(app) {

    app.post('/postevent', function (req, res) {
        var sendData = 'Thanks for registering with us';

        var evt = new Event({
            name: req.body.name,
            wbutRoll: req.body.roll,
            email: req.body.email,
            password: req.body.password,
            regYear: req.body.regYear,
            department: req.body.department
        });

        std.save(function (err) {
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
