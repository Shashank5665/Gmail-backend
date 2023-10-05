const nodemailer = require("nodemailer");

const sendEmail = async ({
  from_email,
  to_email,
  name,
  phone,
  subject,
  message,
  files,
}) => {
  const attachmentsArray = Object.entries(files);
  const attachments = attachmentsArray.map((attachment) => {
    return {
      filename: attachment[1][0].originalname,
      path: attachment[1][0].path,
    };
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "email_config",
      pass: "password_config",
    },
  });

  const mailOptions = {
    from: from_email,
    to: to_email,
    name,
    phone,
    subject,
    text: message,
    attachments,
  };

  try {
    const data = await transporter.sendMail(mailOptions);
    return "Email sent successfully";
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

module.exports = {
  sendEmail,
};
