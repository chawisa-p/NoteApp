import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mynote-list',
  templateUrl: './mynote-list.component.html',
  styleUrls: ['./mynote-list.component.css']
})
export class MynoteListComponent implements OnInit {
  @Input() element: string;
  @Input() index: number;
  toDoText = 'PENDING';
  isclick: boolean;

  constructor() {}

  ngOnInit(): void {

  }

  onChange() {
    if (this.isclick === true){
      this.toDoText = 'DONE';
    }
    else {
      this.toDoText = 'PENDING';
    }
  }

}
