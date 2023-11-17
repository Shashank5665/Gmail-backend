const express = require("express");
const dotenv = require("dotenv");
const mailRoutes = require("./routes/mailRoutes.js");
const cors = require("cors");

dotenv.config({ path: "../.env" });

let app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/mail", mailRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
