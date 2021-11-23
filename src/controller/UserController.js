const express = require("express");

const User = require("../models/User");
const UserController = express.Router();
const sendMail = require("../config/sendMail");


UserController.post('/login', async (req, res) => {
    if (req.body.email == "" || req.body.password == "") {
        res.send(JSON.stringify({
            validateInputs: false,
            error: "Campos Vazios !"
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
                redirect: "http://localhost:3000/owner"
            },
        }));

    } else {
        console.log('nao existe')
    }
});

UserController.post('/mailer', async (req, res) => {
    const config = {
        from: process.env.ELASTIC_USER,
        to: "agnusnat@hotmail.com",
        replyTo: process.env.ELASTIC_USER,
        subject: "Musician -- Você solicitou reset de sua senha",
        html: `
            <div style="background-color:#1e1f1f; color:white; width:100%; height:500px">
                <h1>REFAÇA SUA SENHA</h1>
                
                <p>Copie o link em seu navegador : http://localhost:3000/novasenha <br>Você solicitou reset de sua senha, no app musician. caso não tenha sido você, desconsidere esse email.</p>
                <a href="http://localhost:3000/novasenha">NOVA SENHA</a>
            </div>
        `
    }
    sendMail(config);
})

UserController.put('/updatePass', async (req, res)=>{
    await User.update({ password:Buffer.from(req.body.password).toString('base64')}, {
        where: {
            id: req.body.id,
        }
    }); 
    res.json({
        next:true,
        redirect:"http://localhost:3000/response",
        message: "Você alterou sua senha. Realize login em sua conta. Essa pagina será redirecionada em alguns segundos",
    })
})
UserController.post('/controll/reset-password', async (req, res) => {

    const users = await User.findAll({
        where: {
            email: req.body.email
        }
    });

    if (users.length === 1) {
        const config = {
            from: process.env.ELASTIC_USER,
            to: users[0].dataValues.email,
            replyTo: process.env.ELASTIC_USER,
            subject: `Musician -- OLá ${users[0].dataValues.name}, vimos que solicitou renovação de sua senha`,
            html: `
                <div style="background-color:#1e1f1f; color:white; width:100%; height:500px; padding:50px;">
                    <h1>REFAÇA SUA SENHA</h1>
                    
                    <p>Copie o link em seu navegador : http://localhost:3000/checkbyreset/${Buffer.from(JSON.stringify(users[0].dataValues.id)).toString('base64')} <br>Você solicitou reset de sua senha, no app musician. caso não tenha sido você, desconsidere esse email.</p>
                </div>
            `
        }
        sendMail(config);
        res.status(200).send(JSON.stringify({
            mensagem: "Enviamos para seu email link para reset de senha !",
        }));
    } else {
        res.status(200).send(JSON.stringify({
            mensagem: "Enviamos para seu email link para reset de senha !!",
        }));
    }


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
        message: "Enviamos um email de confirmação para seu email. Por favor verifique sua caixa de email e confirme !",
    });
})

module.exports = UserController;