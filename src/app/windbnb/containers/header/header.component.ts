import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter<any>();
  @Input() searchedValue: string;
  searchActive: boolean;

  constructor() { }

  ngOnInit(): void {
    this.searchActive = false;
    this.searchedValue = 'Add location';
  }

  logger(value): void {
    this.searchActive = value;
    this.search.emit(value);
  }
}
