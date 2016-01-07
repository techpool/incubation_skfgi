var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var admin = new Schema({
    name: {
        type: 'String',
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sessions: {
        type: [ String ]
    }
});

module.exports = mongoose.model('admin', admin);
