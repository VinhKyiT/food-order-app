import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cart!: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantity: number) {
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

}
