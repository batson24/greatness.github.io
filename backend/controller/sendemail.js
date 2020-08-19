let express = require('express');
let email = express.Router();
let nodemailer = require('nodemailer');
let creds = require('../config/config');
let env = require('../.env')

let transport = {
    host: 'smtp.gmail.com.', // Don’t forget to replace with the SMTP host of your provider
    port: 465,
    auth: {
    user: chewy,
    pass: kindness
  }
}

let transporter = nodemailer.createTransport(transport)




transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

email.post('/send', (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  let message = req.body.message
  let content = `name: ${name} \n email: ${email} \n message: ${message} `

  let mail = {
    from: name,
    to: chewy,  
    subject: 'Inquiry Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})




module.exports= email