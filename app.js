const express = require("express");
const bodyParsed = require("body-parser");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user")
const path = require("path");
const rootDir = require("./helper/path");
const app = express();
const errPage = require("./controller/404");
const db = require("./helper/db");

app.set('view engine', 'ejs');
app.set('views', 'views');

// 3rd Party Middleware
app.use(bodyParsed.urlencoded({extended : true}));
app.use(express.static(path.join(rootDir, 'public')));

// Our Middleware
app.use(userRoutes);
app.use('/admin', adminRoutes);

app.use(errPage);

app.listen(3000, () => {
    console.log("server is running on port 3000");
})