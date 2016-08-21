var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var port = process.env.PORT || 5000;

var nav = [{
    Link: '/Portfolio',
    Text: 'Portfolio'
}, {
    Link: '/Resume',
    Text: 'Resume'
}];
var resumeRouter = require('./src/routes/resumeRoutes.js')(nav);
var portRouter = require('./src/routes/portRoutes.js')(nav);
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Resume', resumeRouter);
app.use('/Portfolio', portRouter);

app.get('/', function(req, res) {
    res.render('index', {
        title: 'hello from render',
        nav: nav,
    });
});

app.listen(port, function(err) {
    console.log('running on port ' + port);
});