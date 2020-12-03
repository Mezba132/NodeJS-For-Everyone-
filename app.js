const express = require("express");
const bodyParsed = require("body-parser");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user")
const path = require("path");
const app = express();

// 3rd Party Middleware
app.use(bodyParsed.urlencoded({extended : true}));

// Our Middleware
app.use('/user',userRoutes);
app.use('/admin', adminRoutes);
app.use( (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname ,'views', '404.html'));
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})