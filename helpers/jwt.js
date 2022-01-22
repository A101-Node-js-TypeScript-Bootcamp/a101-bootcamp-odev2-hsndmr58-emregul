const expressJwt = require('express-jwt');
const secret = 'emrehasan';

function jwt (){
    return expressJwt({secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/api/user/login',
        ]
    });
}

module.exports = jwt;