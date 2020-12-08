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
    constructor(id,title, imgUrl, price, description) {
        this.id = id;
        this.title = title;
        this.imgUrl = imgUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        getItemFromFile( items => {
            if(this.id)
            {
                const existingItemIndex = items.findIndex( itemId => itemId.id === this.id);
                const updateItem = [...items];
                updateItem[existingItemIndex] = this;
                // console.log(updateItem)
                fs.writeFile(p, JSON.stringify(updateItem), err => {
                    console.log(err);
                })
            }
            else
            {
                this.id = Math.random().toString();
                items.push(this);
                fs.writeFile(p, JSON.stringify(items), err => {
                    console.log(err);
                })
            }
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

    static deleteById(id) {
        getItemFromFile( items => {
            // Only Delete Item
            const updateItem = items.filter( itemId => itemId.id !== id )
            console.log(updateItem);
            fs.writeFile(p, JSON.stringify(updateItem), err => {
                console.log(err);
            });
        })
    }
}