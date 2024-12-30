export default class CartItem{
    amount = 1;
    constructor(name,price){
      this.name = name;
      this.price = price;
    }
    count(){
      this.amount++;
    }
  }