import { Foods } from "./food";

export class CartItem {
  food: Foods;
  quantity: number = 1;
  totalPrice: number;

  constructor(food: Foods, quantity: number) {
    this.food = food;
    this.quantity = quantity;
    this.totalPrice = food.price * quantity;
  }
  get Price(): number {
    return this.totalPrice;
  }
}
