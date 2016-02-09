module.exports = function(app) {

    //route to render the dashboard, only for students
    app.get('/dashboard', function(req, res) {
        var page = req.query.page;
        if (page == undefined || page == 0) {
            page = 1
        }
        console.log(page);
        Student.findOne({
            email: req.session.email
        }).exec(function(err, studentData) {
            if (studentData) {

                //setting up the variables to pass on to JADE template
                var studentInfo = {
                    username: studentData.name,
                    email: studentData.email,
                    department: studentData.department,
                    regYear: studentData.regYear,
                    roll: studentData.roll
                };
                res.locals.studentData = studentInfo;

                Events.find({}).sort({
                    time: -1
                }).skip((page - 1) * 5).limit(5).exec(function (err, events) {
                    res.locals.events = events;
                    res.render('dashboard');
                })
            } else {
                //if the user's session does not exists then redirect to the login page
                res.redirect('/');
            }
        });
    });
};
