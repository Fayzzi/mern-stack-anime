const nodmailer = require("nodemailer");
const sendMail = async (options) => {
  const transporter = nodmailer.createTransport({
    port: process.env.SMPT_PORT,
    host: process.env.SMPT_HOST,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });
  await transporter.sendMail({
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.text,
  });
};
module.exports = sendMail;
