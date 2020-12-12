
const db = require("../helper/db");
const Cart = require("./cartScema");

module.exports = class products {
    constructor(id,title, imgUrl, price, description) {
        this.id = id;
        this.title = title;
        this.imgUrl = imgUrl;
        this.price = price;
        this.description = description;
    }

    // save data on file
    save() {
        db.execute( "insert into products (title, imgUrl, price, description) values(?,?,?,?)", [this.title,this.imgUrl,this.price,this.description]);
    }

    // Get all Data
   static fetchAll() {
       return db.execute("select * from products");
    }

    // get data by Id
    static fetchItemById(id) {
        return db.execute("select * from products where id = ?",  [id]);
    }


    update(){
        return db.execute("update products set title = ?, price = ?, description = ?, imgUrl = ? where id = ?", [this.title, this.price, this.description, this.imgUrl, this.id]);
    }

    // Delete Item and Cart Together
    static deleteById(id) {
        return db.execute("delete from products where id = ?", [id]);
    }
}