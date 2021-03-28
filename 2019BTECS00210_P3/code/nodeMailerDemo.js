var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kiran.raut@walchandsangli.ac.in',
    pass: 'Kir@n#123'
  }
});

var mailOptions = {
  from: 'kiran.raut@walchandsangli.ac.in',
  to: 'yashhoke0602@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hi i am kiran and this is a test email' 
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});