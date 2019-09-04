const items = require("./fakedb")

class Item{
    constructor(name,price){
        this.name = name;
        this.price = price;
        
        global.items.push(this)
    }

    // toString(){
    //     return {name : this.name, price: this.price}
    // }
}

module.exports = Item;