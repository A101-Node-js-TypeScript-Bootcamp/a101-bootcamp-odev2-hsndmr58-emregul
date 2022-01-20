const expressJwt = require('express-jwt');
const secret = 'emrehasan';

function jwt (){
    return expressJwt({secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/api/user/login',
            '/api/brand',
            '/api/categories',
            '/api/categories/368',
            '/api/brand/1213465'
        ]
    });
}

module.exports = jwt;