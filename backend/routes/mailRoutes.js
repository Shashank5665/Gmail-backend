let express = require("express");
let { sendMail, updatePassword } = require("../controllers/mailController.js");
const multer = require("multer");

let router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/sendmail", upload.single("file"), sendMail);
router.post("/updatedpasswordmail", updatePassword);

module.exports = router;
