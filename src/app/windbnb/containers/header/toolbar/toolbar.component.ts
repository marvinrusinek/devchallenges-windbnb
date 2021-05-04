import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter();
  @Input() location: string;
  searched: boolean;

  constructor() { }

  ngOnInit(): void {
    this.searched = false;
  }

  deleteComment(): void {
    this.searched = !this.searched;
    this.search.emit(this.searched);
  }
}
