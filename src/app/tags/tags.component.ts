import { Tags } from './../shared/models/tag';
import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags: Array<Tags> = [];

  constructor(private fs: FoodService) { }

  ngOnInit(): void {
    this.tags = this.fs.getAllTags();
  }

}
