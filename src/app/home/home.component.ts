import { Foods } from './../shared/models/food';
import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods:Foods[] = [];

  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    this.foods = this.fs.getAll();
  }
}
