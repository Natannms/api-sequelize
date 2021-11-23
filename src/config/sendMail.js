const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host:process.env.ELASTIC_HOST,
    port:process.env.SEDNBLUE_PORT,
    auth:{
       user:process.env.ELASTIC_USER,
       pass:process.env.ELASTIC_PASSWORD,
    }
})

function sendMail(config) {
    transporter.sendMail(config)
    .then(info=>{
      if(info.rejected.length > 0) {
          return "Erro com sua solicitação. por favor tente mais tarde !"
      }else{
          console.log('function returned true');
         return info.messageId;
      }

      
    }).catch(error=>{
        return error;
    })
}

module.exports = sendMail;