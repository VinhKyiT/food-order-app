import { CartItem } from "./cartItem";

export class Cart {
  items: Array<CartItem> = [];

  get totalPrice(): number {
    let sum = 0;
    for (let item of this.items) {
      sum += item.totalPrice;
    }
    return sum;
  }
}
