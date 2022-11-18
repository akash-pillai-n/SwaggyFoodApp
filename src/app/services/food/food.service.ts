import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getfoodById(id: number) : Foods{
    return this.getAll().find((food) => food.id == id)!;
  }

  getAllFoodsByTag(tag: string): Foods[] {
    if (tag == 'All') return this.getAll();
    else return this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 6 },
      { name: 'FastFood', count: 4 },
      { name: 'Lunch', count: 4 },
      { name: 'Spicy', count: 2 },
      { name: 'Cheesy', count: 2 },
      { name: 'QuickBites', count: 2 },
    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Chicken Biryani',
        price: 320,
        cookTime: '40-50',
        favorite: true,
        origins: ['Hyderabad'],
        stars: 4.7,
        imageUrl: '/assets/food1.jpg',
        tags: ['Lunch', 'Spicy'],
      },
      {
        id: 2,
        name: 'Chicken Spicy Burger',
        price: 140,
        cookTime: '10-15',
        favorite: true,
        origins: ['America'],
        stars: 4.0,
        imageUrl: '/assets/food2.jpg',
        tags: ['FastFood', 'QuickBites','Spicy'],
      },
      {
        id: 3,
        name: 'Schezwan fried noodles',
        price: 120,
        cookTime: '10-15',
        favorite: false,
        origins: ['Chinese'],
        stars: 3.2,
        imageUrl: '/assets/food3.jpg',
        tags: ['FastFood', 'Lunch'],
      },
      {
        id: 4,
        name: 'Pasta Bologanesh',
        price: 180,
        cookTime: '20-30',
        favorite: true,
        origins: ['Italy'],
        stars: 4.2,
        imageUrl: '/assets/food4.jpg',
        tags: ['Lunch', 'Cheesy'],
      },
      {
        id: 5,
        name: 'Cheese Burst Pizza',
        price: 440,
        cookTime: '20-25',
        favorite: true,
        origins: ['Italy'],
        stars: 4.2,
        imageUrl: '/assets/food5.jpg',
        tags: ['FastFood', 'Lunch', 'Cheesy'],
      },
      {
        id: 6,
        name: 'Chicken Shawarma',
        price: 140,
        cookTime: '10-15',
        favorite: false,
        origins: ['Lebanon'],
        stars: 4.3,
        imageUrl: '/assets/food6.jpg',
        tags: ['FastFood', 'QuickBites'],
      },
    ];
  }
}
