import { Cart } from './../shared/models/cart';
import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';
import { CartItem } from '../shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Foods): void {
    let existingCart = this.cart.items.find(item => item.food.id === food.id);
    if (existingCart) {
      existingCart.quantity++;
    } else {
      this.cart.items.push(new CartItem(food, 1));
    }
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
  }

  changeQuantity(foodId: number, quantity: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    cartItem!.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
