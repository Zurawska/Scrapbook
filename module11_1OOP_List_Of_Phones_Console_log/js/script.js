function Phone(brand, price, color, display, capacity) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.capacity = capacity; // Add new attributes
    this.display = display;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + ", price is " + this.price + ", display is " + this.display + " and capacity is " + this.capacity + "." );
}

Phone.min = function(listOfPhones) {
    return Math.min.apply(null, listOfPhones);
}

Phone.prototype.currencyStringRepresentation = function() {
    return this.price + "PLN";
}

Phone.prototype.recommendation = function() {
    if (this.color === "black") {
        return this.brand + " the best choice for man";
    } else if (this.color === "white") {
        return this.brand + " the best choice for woman";
    } else {
        return this.brand + " the best choice for everyone";
    }
}

var iPhone6S = new Phone("Apple", 2650, "silver", 5.5, "32GB");
var samsungGalaxyS6 = new Phone("Samsung", 1500, "black", 4.7, "32GB");
var onePlusOne = new Phone("One", 1000, "white", 4.7, "16GB");

var list = [iPhone6S.price, samsungGalaxyS6.price, onePlusOne.price];

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();

console.log(Phone.min(list) + " minimum price");

console.log(iPhone6S.currencyStringRepresentation(), samsungGalaxyS6.currencyStringRepresentation(), onePlusOne.currencyStringRepresentation());

console.log(iPhone6S.recommendation(), samsungGalaxyS6.recommendation(), onePlusOne.recommendation());
