var express = require('express');
var app = express();

app.use(express.static('public'));

/* Configuration */
require('./config/configuration.js')(app);

/* Models */
Student = require('./models/studentDetails.js');
Event = require('./models/Events.js');
Admin = require('./models/Admin.js');

/* Routes for registration */

require('./routes/registration/studentRegister.js')(app);
require('./routes/registration/login.js')(app);
require('./routes/events/events.js')(app);

/* Routes for events */

require('./routes/events/events.js')(app);

app.listen(8000, function () {
    console.log('Server started at port 8000');
});
