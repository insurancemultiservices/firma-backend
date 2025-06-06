const nodemailer = require('nodemailer');

async function sendEmail(to, documentName) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: `"Insurance Multiservices" <${process.env.SMTP_USER}>`,
    to,
    subject: 'Documento para firma',
    text: `Has recibido un documento para firmar: ${documentName}`,
    html: `<p>Haz recibido un documento para firmar: <strong>${documentName}</strong></p>`
  });
}

module.exports = sendEmail;
