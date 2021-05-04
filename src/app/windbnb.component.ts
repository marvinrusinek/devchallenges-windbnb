import { Component, OnInit } from '@angular/core';

import { Search } from './windbnb/shared/models/search.model';
import { SearchCriteria } from './windbnb/shared/models/search-criteria.model';

@Component({
  selector: 'app-root',
  templateUrl: './windbnb.component.html',
  styleUrls: ['./windbnb.component.scss']
})
export class WindbnbComponent implements OnInit {
  searchCriteria: SearchCriteria;
  searching: boolean;

  ngOnInit(): void {
    this.searchCriteria = { searchedValue: ' ', adultCount: 0, childrenCount: 0 };
  }

  setSearching(value: Search): void {
    this.searching = value.searchFlag;
    this.searchCriteria = { searchedValue: ' ', adultCount: 0, childrenCount: 0 };
    this.searchCriteria.searchedValue = value.searchValue;
    this.searchCriteria.adultCount = value.adultsCount;
    this.searchCriteria.childrenCount = value.childrenCount;
  }

  switch(value): void {
    this.searching = value;
  }
}
