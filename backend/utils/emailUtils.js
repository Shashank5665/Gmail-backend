const nodemailer = require("nodemailer");
const to_email = "shashucr567@gmail.com";

const sendEmail = async ({
  from_email,
  name,
  phone,
  subject,
  message,
  files,
}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: from_email,
    to: to_email,
    name,
    phone,
    subject,
    text: message,
  };

  if (files)
    mailOptions.attachments = [
      {
        filename: files.originalname,
        content: files.buffer,
      },
    ];

  try {
    const data = await transporter.sendMail(mailOptions);
    return "Email sent successfully";
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const updatedPasswordMail = async (data) => {
  const { email, name, password } = data;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: to_email,
    to: email,
    name,
    subject: "Password Updated",
    html: `<h3>Hi ${name},</h3>
    <p>Your password has been updated successfully.</p>
    <p>Your new password is <b>${password}</b>. 
    <hr>
    <p>Regards,</p>
    <p>Advanced Micro Services Pvt. Ltd.<br> Email: patil@amsindia.net <br> Phone: +91 96632 12777</p>
    `,
  };

  try {
    const data = await transporter.sendMail(mailOptions);
    return "Email sent successfully";
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  sendEmail,
  updatedPasswordMail,
};
