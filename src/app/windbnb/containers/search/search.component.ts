import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Guests } from './Guests';
import { Search } from '../../shared/models/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchCriteriaOut: EventEmitter<Search> = new EventEmitter<Search>();
  searching = false;
  searchValue: string;
  guestCalc = true;
  locationResults: boolean;
  Guest: Guests = new Guests();
  locations: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.searching = true;
    this.locations.push('Helsinki, Finland');
    this.locations.push('Turku, Finland');
    this.locations.push('Oulu, Finland');
    this.locations.push('Vassa, Finland');
  }

  selectLocationForSearch(value: number): void {
    this.searchValue = this.locations[value];
  }

  showLocation(): void {
    this.locationResults = true;
    this.guestCalc = false;
  }

  showGuests(): void {
    this.guestCalc = true;
    this.locationResults = false;
  }

  search(): void {
    this.searching = !this.searching;
    this.searchCriteriaOut.emit(
      {
        searchValue: this.searchValue,
        searchFlag: this.searching,
        adultsCount: this.Guest.adults,
        childrenCount: this.Guest.children
      }
    );
  }
}
