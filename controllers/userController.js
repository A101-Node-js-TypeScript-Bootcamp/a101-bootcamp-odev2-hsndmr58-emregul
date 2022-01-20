const jwt = require('jsonwebtoken');
const Joi = require('joi'); 


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

exports.register  = async (req, res, next) => { 
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });
    const { error, value } = schema.validate(req.body);

    if (error) {
        let response = {
            status: false,
            message: 'Email or password is wrong'
        }
        res.status(401).send(response)
    } else {
        let response = {
            status: true
        }
        res.status(200).send(response)
    }
}

