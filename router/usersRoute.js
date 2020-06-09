const express= require('express');
const userRoute = express();

const userNames = [];
userRoute.post('/users', (req, res, next) => {
    userNames.push(req.body.userName);
    res.render('users', {pageTitle: 'Users List', usersNameList: userNames});
})

module.exports = userRoute;