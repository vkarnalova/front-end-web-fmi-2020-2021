class Item {
    name;
    discount;

    constructor(name, discount) {
        this.name = name;
        this.discount = discount;
    }

    calculatePriceWithDiscount() {
        var price = Item.prototype.getPrice();
        return price - (this.discount / 100) * price;
    }
}

Item.prototype.getPrice = function () {
    return 1000;
};