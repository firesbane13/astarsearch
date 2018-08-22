var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// To handle when a route doesn't exist
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

var routes = require('./api/routes/astarRoutes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

