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
    const schema = Joi.object({   //There is making the schema for register validations
        email: Joi.string().email().required(),  // Email parameter must be an email
        password: Joi.string().min(6).required(), // Password parameter must be higher than 6 character
    });
    const { error, value } = schema.validate(req.body);

    if (error) { //If validations are not correct then we are giving this status and message
        let response = {
            status: false,
            message: 'Email or password is wrong'
        }
        res.status(401).send(response)
    } else { // If validations are correct then status true
        let response = {
            status: true
        }
        res.status(200).send(response)
    }
}

