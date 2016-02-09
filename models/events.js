var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var events = new Schema({
    type: {
        type:String,
        required: true
    },
    name: {
        type:String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    fullImage: {
        type: String,
        required: true
    },
    department: {
        type:String,
        required: true
    },
    dates:{
        type: [Number],
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('events', events);
