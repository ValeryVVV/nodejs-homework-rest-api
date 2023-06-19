require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async(data) => {
    const email = {...data, from: "larinalera969@gmail.com"};
    await sgMail.send(email);
    return true;
}

module.exports = sendEmail;

// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const {META_PASSWORD} = process.env;

// const nodemailerConfig = {
//     host: "smtp.meta.ua",
//     port: 465,
//     secure: true,
//     auth: {
//         user: "voloshina.valery@meta.ua",
//         pass: META_PASSWORD
//     }
// };

// const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//     to: "pekiy72183@aramask.com",
//     from: "voloshina.valery@meta.ua",
//     subject: "Test email",
//     html: "<p><strong>Test email</strong>from localhost: 3000</p>"
// };

// transport.sendMail(email)
// .then(() => console.log("Email send success"))
// .catch(error => console.log(error.message));

