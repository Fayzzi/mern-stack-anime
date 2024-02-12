const nodemail = require("nodemailer");

const sendEmailtoAdmin = async (user) => {
  const transporter = nodemail.createTransport({
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
    to: process.env.SMPT_MAIL,
    text: user.message,
    subject: user.subject,
  });
};
module.exports = sendEmailtoAdmin;
