const fs = require("fs");
const path = require("path");
const rootDir = require("../helper/path");

const p = path.join(rootDir, 'Data', "item.json");

const getItemFromFile = callback => {
    fs.readFile(p, (err, data) => {
        if(err)
        {
            callback([]);
        }
        // console.log(JSON.parse(data));
        callback(JSON.parse(data));
    })
}

module.exports = class Item {
    constructor(title, imgUrl, price, description) {
        this.title = title;
        this.imgUrl = imgUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id = Math.random().toString();
        getItemFromFile( items => {
            items.push(this);
            fs.writeFile(p, JSON.stringify(items), err => {
                console.log(err);
            })
        })
    }

   static fetchAll(cb) {
       getItemFromFile(cb);
    }

    static fetchItemById(id, cb) {
        getItemFromFile( items => {
            const item = items.find( i => i.id === id);
            cb(item);
        })
    }
}