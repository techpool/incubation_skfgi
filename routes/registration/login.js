module.exports = function (app) {
    app.get('/dashboard', function (req, res) {
        res.send('Hey there!');
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
                        res.sendStatus(200);
                    } else {
                        res.sendStatus(401);
                    }
                }
        })
    })
};
