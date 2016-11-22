var express = require('express');

// Create our app
var app = express();
// For Heroku
const PORT = process.env.PORT || 3000;

// Redirect HTTPS to HTTP
// Express middleware: do something with every request
app.use(function (req, res, next){
    // https or http
    if (req.headers['x-forwarded-proto'] === 'http') {
        // Process as normal
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
});

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
});

