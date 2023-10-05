const { sendEmail } = require("../utils/emailUtils");

const sendMail = async (req, res) => {
  try {
    const { from_email, to_email, name, phone, subject, message } = JSON.parse(
      req.body.json
    );
    const files = req.files;

    const result = await sendEmail({
      from_email,
      to_email,
      name,
      phone,
      subject,
      message,
      files,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  sendMail,
};
