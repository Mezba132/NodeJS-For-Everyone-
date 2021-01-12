const express = require("express");
const bodyParsed = require("body-parser");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user")
const path = require("path");
const rootDir = require("./helper/path");
const app = express();
const errPage = require("./controller/404");
const sequelize = require("./helper/db");
const Product = require('./model/product');
const User = require('./model/users');
const Cart = require('./model/cart');
const CartItem = require('./model/cart-item');

app.set('view engine', 'ejs');
app.set('views', 'views');

// 3rd Party Middleware
app.use(bodyParsed.urlencoded({extended : true}));
app.use(express.static(path.join(rootDir, 'public')));

app.use((req, res, next) => {
    User.findByPk(1)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});

// Our Middleware
app.use(userRoutes);
app.use('/admin', adminRoutes);

Product.belongsTo(User, { constraints:true, onDelete : 'CASCADE'});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, {through : CartItem});
Product.belongsToMany(Cart, {through : CartItem});

app.use(errPage);

sequelize
    // .sync({ force: true })
    .sync()
    .then(result => {
        return User.findByPk(1);
         console.log(result);
    })
    .then(user => {
        if (!user) {
            return User.create({ name: 'Max', email: 'test@test.com' });
        }
        return user;
    })
    .then(user => {
       // return  user.createCart();
    })
    .then(user => {
        // console.log(user);
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });

// sequelize
//     .sync()
//     .then( results => {
//         app.listen(3000, () => {
//             console.log("server is running on port 3000");
//         })
//     })
//     .catch( err => {
//         console.log(err);
//     })