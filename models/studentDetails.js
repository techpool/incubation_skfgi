var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentDetails = new Schema({
    name: {
        type: 'String',
        required: true
    },
    wbutRoll: {
        type: Number,
        required: true,
        unique: true
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
    regYear: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    sessions: {
        type: [String]
    }
});

module.exports = mongoose.model('studentDetails', studentDetails);
