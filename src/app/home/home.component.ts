import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loadNote: any;
  loadNoteTop5 = [];
  length: number;

  constructor(private dataStorageService: DataStorageService) {
    this.loadTop5Note();
  }

  ngOnInit(): void {
  }

  loadTop5Note() {
    this.dataStorageService.fetchNote().subscribe(loadNote => {
      if (loadNote != null){
        this.loadNote = loadNote;
        const data = JSON.parse(JSON.stringify(loadNote));
        const i = data.length;
        let j = i - 5;
        while (j < i) {
          this.loadNoteTop5.push({
            key : j + 1,
            value: loadNote[j]
          });
          j++;
        }
      }
    });
  }

}
