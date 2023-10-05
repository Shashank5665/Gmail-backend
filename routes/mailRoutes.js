let express = require("express");
let { sendMail } = require("../controllers/mailController.js");
const multer = require("multer");
var uploadFields = [{ name: "file1" }];

let router = express.Router();

const upload = multer({
  dest: "uploads/", // Define a destination folder for uploaded files
});

router.post("/sendmail", upload.fields(uploadFields), sendMail);

module.exports = router;
