var express = require("express");
let PORT = 3030;
const mailRoutes = require("./routes/mailRoutes.js");

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/mail", mailRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
