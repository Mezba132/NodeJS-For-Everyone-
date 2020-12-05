const fs = require("fs");
const path = require("path");
const rootDir = require("../helper/path");

const p = path.join(rootDir, 'Data', "item.json");

module.exports = class Item {
    constructor(title) {
        this.title = title;
    }

    save() {
        fs.readFile(p, (err, data) => {
            let items = [];
            if(!err) {
                items = JSON.parse(data);
            }
            items.push(this);
            fs.writeFile(p, JSON.stringify(items), err => {
                console.log(err);
            })
        })
    }

   static fetchAll(callback) {
       fs.readFile(p, (err, data) => {
            if(err)
            {
                callback([]);
            }
           callback(JSON.parse(data));
            console.log(callback(JSON.parse(data)));
        })
    }
}