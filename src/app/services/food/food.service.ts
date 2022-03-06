import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tags } from '../../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foodList: Array<Foods> = [
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
    },
    {
      id: 6,
      price: 60,
      name: 'Ice Cream',
      favorite: true,
      star: 5,
      tags: ['American', 'Ice Cream'],
      imageUrls: ['/assets/images/food-6.jpg'],
      cookTime: '5 minutes',
      origins: ['USA']
    }
  ]

  tags: Array<Tags> = [
    {
      name: 'all',
      count: this.foodList.length
    },
    {
      name: 'italian',
      count: 2
    },
    {
      name: 'american',
      count: 3
    },
    {
      name: 'japanese',
      count: 1
    },
    {
      name: 'pasta',
      count: 1
    },
    {
      name: 'burger',
      count: 1
    },
    {
      name: 'cake',
      count: 1
    },
    {
      name: 'sushi',
      count: 1
    },
    {
      name: 'ice cream',
      count: 1
    },
    {
      name: 'pizza',
      count: 1
    },
  ]

  constructor() { }

  getAll():Foods[] {
    return this.foodList;
  }

  getAllTags():Array<Tags> {
    return this.tags;
  }

  getByTag(tag: string): Foods[] {
    return tag.toLowerCase() === 'all' ? this.foodList : this.foodList.filter(food => food.tags!.find(t => t.toLowerCase() === tag.toLowerCase()));
  }
}
