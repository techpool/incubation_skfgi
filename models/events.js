var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var events = new Schema({
    type:{
        type:String,
        required: true
    },
    name:{
      type:String,
      required: true
    },
    details:{
      type: String,
      required: true,
    },
    caption:{
      type: String,
      required: true
    },
    department: {
      type:String,
      required: true
    },
    time:{
      type:Number,
      required: true
    }
});

module.exports = mongoose.model('events', events);