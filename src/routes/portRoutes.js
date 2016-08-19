var express = require('express');
var portRouter = express.Router();

var router = function(nav, ports) {
    portRouter.get('/', function(req, res) {
        res.render('portfolio', {
            title: 'Portfolio',
            nav: nav,
            ports: ports
        });
    });

    return portRouter;

};

module.exports = router;