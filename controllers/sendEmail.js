const nodemailer = require('nodemailer');

const sendEmail = async(req, res) => {
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


module.exports = sendEmail;