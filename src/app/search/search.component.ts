import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: string = '';

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if (params['searchItem']) {
        this.searchTerm = params['searchItem'];
      }
    })
  }

}
