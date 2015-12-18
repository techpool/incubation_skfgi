var bodyParser = require('body-parser');
var mongoose = require('mongoose');

module.exports = function (app) {
    app.use( bodyParser.json() );         // to support JSON-encoded bodies
    app.use( bodyParser.urlencoded({      // to support URL-encoded bodies
        extended: true
    }));

    app.set('db', 'mongodb://localhost/incubation')

    mongoose.connect(app.get('db'));

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
        console.log('DB Connected');
    });
}
