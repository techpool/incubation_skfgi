module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/logout', function (req, res) {
        req.session.destroy(function (err) {
            if (err) {
                console.log(err);
            }else {
                res.send('You have been logged out');
            }
        })
    })

    app.get('/dashboard', function (req, res) {
        console.log(req.session);
        // res.cookie('email', 'suryadeep10@gmail.com', { maxAge: 900000, httpOnly: true });
        // console.log(req.session);
        res.render('dashboard');
    });

    app.post('/login', function (req, res) {
        var credential = req.body;
        console.log(credential.email);
        Student.findOne({

            'email': credential.email

          }, function (err, studentData) {
                console.log(studentData);
                if (err){
                    res.sendStatus(400);
                } else {
                    if (studentData.password == credential.password) {
                        req.session.email = studentData.email;
                        res.sendStatus(200);
                    } else {
                        res.sendStatus(401);
                    }
                }
        })
    })
};
