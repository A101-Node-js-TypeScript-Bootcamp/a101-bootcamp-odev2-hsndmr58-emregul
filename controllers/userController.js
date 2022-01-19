const jwt = require('jsonwebtoken');


exports.get = (req,res) => {
    let response = {
        status: true
    }
    res.status(200).send(response)
}
exports.login = (req,res) => {
    if(req.body.email === 'emre.hasan@gmail.com' && req.body.password === '123456'){
        const secret = 'emrehasan';
        const user = {
            id: 2,
            name: 'emrehasan',
            user_type : 'admin'
        }
        const token = jwt.sign(
            user,
            secret,
            { expiresIn : '7d' }
        );
        res.send({
            status:true,
            jwt: {
                token:token,
                expiresIn : '7d'
            },
            user
        });
    }else{
        let response = {
            status: false
        }
        res.status(200).send(response)
    }
}

exports.register  = (req,res) => {
    let response = {
        status: true
    }
    res.status(200).send(response)
}