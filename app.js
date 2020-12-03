const express = require("express");
const bodyParsed = require("body-parser");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const app = express();

app.use(bodyParsed.urlencoded({extended : true}));

app.use(userRoutes);
app.use(adminRoutes);

app.listen(3000, () => {
    console.log("server is running on port 3000");
})