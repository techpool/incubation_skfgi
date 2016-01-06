module.exports = function(app) {

    app.post('/events', function (req, res) {
        Admin.findOne({
            email: req.session.email
        }).exec(function (err, adminData) {
            if (adminData) {
                var sendData = 'The event has been added to the database';

                var newEvent = new Events({
                    name: req.body.name,
                    type: req.body.type,
                    details: req.body.details,
                    caption: req.body.caption,
                    department: req.body.department,
                    time: req.body.time
                });

                newEvent.save(function (err) {
                    if (err) {
                        if (err.code == 11000) {
                            sendData = 'An event is already registered on this date';
                            res.send(sendData)
                        }
                        console.log(err);
                    } else {
                        res.send(sendData);
                    }
                });
            } else {
                res.send('You naughty geek! Don\'t mess with me!');
            }
        });
    });
};
