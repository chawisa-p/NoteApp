import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top5add',
  templateUrl: './top5add.component.html',
})
export class Top5addComponent implements OnInit {
  @Input() element: string;
  @Input() index: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
