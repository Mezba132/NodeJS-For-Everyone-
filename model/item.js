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
        callback(JSON.parse(data));
    })
}

module.exports = class Item {
    constructor(title) {
        this.title = title;
    }

    save() {
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
}