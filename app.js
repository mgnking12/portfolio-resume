var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var port = process.env.PORT || 5000;
var ports = [{
    title: 'reAustin',
    subtitle: 'The Recycling App',
    photo: '/photos/portfolioImg/reAustin.png',
    description: 'An app that allows you to plot and find recycling bins around Austin. <a href="https://github.com/mgnking12/reATX-main/blob/master/README.md">Read More.</a>',
    link1: ['http://reaustin.herokuapp.com/',
        'Website'
    ],
    link2: ['https://github.com/mgnking12/reATX-main',
        'Github'
    ]
}, {
    title: 'Tim Clark Design',
    subtitle: 'Metal Work Portfolio',
    photo: '/photos/portfolioImg/timDesign.png',
    description: 'A website designed to display the metal works of Tim Clark. <a href="https://github.com/mgnking12/timclark/blob/master/README.md">Read More.</a>',
    link1: ['http://timclark.herokuapp.com/',
        'Website'
    ],
    link2: ['https://github.com/mgnking12/timclark',
        'Github'
    ]
}, {
    title: 'Adoptables',
    subtitle: 'Tinder styled UI for pets at local Austin animal shelters. ',
    photo: '/photos/portfolioImg/adoptable.png',
    description: 'A more accessable and engaging way to browse for your next fluffy life parter. <a href="https://github.com/adoptables/timclark/blob/master/README.md">Read More.</a>',
    link1: ['http://adoptables.herokuapp.com/',
        'Website'
    ],
    link2: ['https://github.com/mgnking12/adoptables',
        'Github'
    ]
}];
var nav = [{
    Link: '/Portfolio',
    Text: 'Portfolio'
}, {
    Link: '/Resume',
    Text: 'Resume'
}];
var workRouter = require('./src/routes/workRoutes.js')(nav);
var portRouter = require('./src/routes/portRoutes.js')(nav, ports);
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Work', workRouter);
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