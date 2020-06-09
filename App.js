

const express = require('express');
const path = require('path');


const homeRoute = require('./router/homeRoute');
const userRoute = require('./router/usersRoute');

const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use(userRoute);
app.use(homeRoute);

app.listen(3000);