import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[] {
    return [
      {
        id: 1,
        price: 10,
        name: 'Pizza',
        favorite: true,
        star: 4,
        tags: ['Italian', 'Pizza'],
        imageUrls: ['/assets/images/food-1.jpg'],
        cookTime: '30 minutes',
        origins: ['Italy']
      },
      {
        id: 2,
        price: 20,
        name: 'Burger',
        favorite: true,
        star: 5,
        imageUrls: ['/assets/images/food-2.jpg'],
        tags: ['American', 'Burger'],
        cookTime: '20 minutes',
        origins: ['USA']
      },
      {
        id: 3,
        price: 30,
        name: 'Pasta',
        favorite: false,
        star: 3,
        tags: ['Italian', 'Pasta'],
        imageUrls: ['/assets/images/food-3.jpg'],

        cookTime: '40 minutes',
        origins: ['Italy']
      },
      {
        id: 4,
        price: 40,
        name: 'Sushi',
        favorite: true,
        star: 2,
        tags: ['Japanese', 'Sushi'],
        imageUrls: ['/assets/images/food-4.jpg'],
        cookTime: '50 minutes',
        origins: ['Japan']
      },
      {
        id: 5,
        price: 50,
        name: 'Cake',
        favorite: false,
        star: 1,
        tags: ['American', 'Cake'],
        imageUrls: ['/assets/images/food-5.jpg'],
        cookTime: '60 minutes',
        origins: ['USA']
      }
    ]
  }
}
