module.exports = function(app) {

    //route for rendering homepage
    app.get('/', function(req, res) {
        res.render('index');
    });

    //route to logout for any user
    app.get('/logout', function(req, res) {
        //remove session details from database
        req.session.destroy(function(err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        });
    });

    //route to render the dashboard, only for students
    app.get('/dashboard', function(req, res) {
        Student.findOne({
            email: req.session.email
        }).exec(function(err, studentData) {
            if (studentData) {

                //setting up the variables to pass on to JADE template
                var jsonToSend = {
                    username: studentData.name,
                    email: studentData.email,
                    department: studentData.department,
                    regYear: studentData.regYear,
                    roll: studentData.roll
                };
                res.locals.studentData = jsonToSend;
                res.render('dashboard');
            } else {
                //if the user's session does not exists then redirect to the login page
                res.redirect('/');
            }
        });
    });

    //route for signing in(only for students)
    app.post('/login', function(req, res) {
        var credential = req.body;
        console.log(credential.email);
        Student.findOne({

            'email': credential.email

        }, function(err, studentData) {
            if (err) {
                res.sendStatus(400);
            } else {
                if (studentData.password == credential.password) {
                    req.session.email = studentData.email;
                    res.sendStatus(200);
                } else {
                    res.sendStatus(401);
                }
            }
        });
    });

    //route for signing in(only for admins)
    app.post('/login', function(req, res) {
        var credential = req.body;
        console.log(credential.email);
        Admin.findOne({

            'email': credential.email

        }, function(err, studentData) {
            if (err) {
                res.sendStatus(400);
            } else {
                if (studentData.password == credential.password) {
                    req.session.email = studentData.email;
                    res.sendStatus(200);
                } else {
                    res.sendStatus(401);
                }
            }
        });
    });
};
