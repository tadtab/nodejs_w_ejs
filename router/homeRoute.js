const express = require('express');

const route = express();

route.get('/', (req, res, next) => {
    res.render('home', {pageTitle: 'Home'})
});

module.exports = route;