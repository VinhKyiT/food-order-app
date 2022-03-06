import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {

  food!: Foods | undefined;

  constructor(private activatedRoute: ActivatedRoute, private fs: FoodService) {
    activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.food = this.fs.getById(params['id']);
      }
    })
  }

  ngOnInit(): void {
  }

}
