
const db = require("../helper/db");

module.exports = class cart {

    static addItem(id, price) {
        const cartId = id;
        const cartPrice = price;

        db.execute("select * from cart where id = ?",  [cartId])
            .then(([rows, filedata]) => {
                const pId = rows[0].id;
            if(cartId === pId)
            {
                let pQty = rows[0].qty;
                let totalCost = rows[0].tcost;
                 pQty += 1;
                 totalCost += cartPrice;
                console.log(pQty);
                console.log(totalCost);
                return db.execute("update cart set qty = ?, tcost = ? where id = ?",  [pQty , totalCost, pId]);
            }
                const quantity = 1;
                return db.execute("insert into cart (qty,tcost) values(?,?)", [quantity,cartPrice]);
        })
    }

    static deleteCartItem(id, itemPrice) {
        fs.readFile(p, (err, fileContent) => {
            if(err)
            {
                console.log(err);
            }
            const updateCard = {...JSON.parse(fileContent)};
            const item = updateCard.item.find( itemId => itemId.id === id);
            const itemQty = item.quantity;
            updateCard.item = updateCard.item.filter( itemId => itemId.id !== id );
            updateCard.totalPrice = updateCard.totalPrice - itemPrice * itemQty;
            fs.writeFile(p, JSON.stringify(updateCard), err => {
                console.log(err);
            });
        })
    }

    static getCart() {
        return db.execute("select * from cart");
    }
}