import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import stays from '../../../../assets/data/stays.json';

import { Stays } from '../../shared/models/stays.model';
import { SearchCriteria } from '../../shared/models/search-criteria.model';

@Component({
  selector: 'app-stay-list',
  templateUrl: './stay-list.component.html',
  styleUrls: ['./stay-list.component.scss']
})
export class StayListComponent implements OnInit, OnChanges {
  @Input() searchCriteria: SearchCriteria;
  stays: number;
  staysArr: Stays[] = [];
  location: string[];
  single = false;

  constructor() { }

  ngOnInit(): void {
    this.searchCriteria = { searchedValue: '', childrenCount: 0, adultCount: 0 };
    this.staysArr = stays;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.staysArr = [];
    this.location = [];

    if (this.searchCriteria !== undefined) {
      if (this.searchCriteria.searchedValue.includes(', ')) {
        this.location = this.searchCriteria.searchedValue.split(', ');
        this.single = false;
      } else {
        this.single = true;
      }

      for (let i = 0; i < stays.length; i++) {
        if (this.single) {
          if (stays[i].country.toUpperCase() === this.searchCriteria.searchedValue.toUpperCase()) {
            if ((this.searchCriteria.childrenCount + this.searchCriteria.adultCount) < stays[i].maxGuests) {
              this.staysArr.push(stays[i]);
            }
          }
        } else {
          if (
            stays[i].country.toUpperCase() === this.location[1].toUpperCase() &&
            stays[i].city.toUpperCase() === this.location[0].toUpperCase()
          ) {
            if ((this.searchCriteria.childrenCount + this.searchCriteria.adultCount) < stays[i].maxGuests) {
              this.staysArr.push(stays[i]);
            }
          }
        }
      }
      this.stays = this.staysArr.length;
    }
  }
}
