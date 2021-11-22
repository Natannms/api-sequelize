const express = require("express");

const User = require("../models/User");
const UserController = express.Router();

UserController.post('/login', async (req, res) => {
    if (req.body.email == "" || req.body.password == "") {
        res.send(JSON.stringify({
            validateInputs: false,
            error: "Campos Vazios",
        }));
    }

    const users = await User.findAll({
        where: {
            email: req.body.email,
            password: Buffer.from(req.body.password).toString('base64'),
        }
    });

    if (users.length != 0) {
        res.status(200).send(JSON.stringify({
            mensagem: "Autenticado com sucesso !",
            user: {
                id: users[0].dataValues.id,
            },
        }));

    } else {
        console.log('nao existe')
    }
});

UserController.get('/controll/access', async (req, res) => {

})

UserController.post('/controll/reset-password', async (req, res) => {

    const users = await User.findAll({
        where: {
            email: req.body.email
        }
    });
    if (users.length === 1) {
        console.log('trabalhar metodo de envio de email !!!')
    }

    res.status(200).send(JSON.stringify({
        mensagem: "Enviamos para seu email link para reset de senha !",
    }));
})

UserController.post('/register', async (req, res) => {
    // criando Usuário
    const NewUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: Buffer.from(req.body.password).toString('base64'),
        firstAccess: true
    });

    res.json({
        message:"Enviamos um email de confirmação para seu email. Por favor verifique sua caixa de email e confirme !",
    });
})

module.exports = UserController;