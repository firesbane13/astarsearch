'use strict';

module.exports = function(app) {
    var aStar = require('../controllers/astarController');

    app.route('/')
       .get(aStar.home);
};
