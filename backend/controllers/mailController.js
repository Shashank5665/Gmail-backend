const { sendEmail, updatedPasswordMail } = require("../utils/emailUtils");

const sendMail = async (req, res) => {
  try {
    const { from_email, name, phone, subject, message } = JSON.parse(
      req.body.json
    );
    const files = req.file;
    var sendMailData = {
      from_email,
      name,
      phone,
      subject,
      message,
    };
    if (files) {
      sendMailData.files = files;
    }

    const result = await sendEmail(sendMailData);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = {
      email,
      name: "Shashank",
      password,
    };
    const result = await updatedPasswordMail(data);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  sendMail,
  updatePassword,
};
