const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail')


const sendEmailEthereal = async(req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'lisa.feil39@ethereal.email',
            pass: 'uWvC5eB1WCU4gMAc5n'
        }
    });

    let info = await transporter.sendMail({
        from: '"Cation-Coder" <backchodikeliyebanaya@gmail.com>',
        to: "2005916@gmail.com",
        subject: "Hello from the other side",
        html: "<h2>Sending emails automatically</h2>",
    })
    res.json(info);
}

const sendEmail = async(req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'adityaganguly0601@gmail.com', // Change to your recipient
        from: 'backchodikeliyebanaya@gmail.com', // Change to your verified sender
        subject: 'Hello from the other side',
        text: 'I am Sending An Email Automatically',
        html: '<strong>using Node.js</strong>',
    };
    const info = await sgMail.send(msg);
    res.json(info);
}


module.exports = sendEmail;