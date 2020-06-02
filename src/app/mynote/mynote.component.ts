import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-mynote',
  templateUrl: './mynote.component.html',
  styleUrls: ['./mynote.component.css']
})
export class MynoteComponent implements OnInit {
  AllNote: any;

  constructor(private dataStorageService: DataStorageService) {
    this.onFetchNote();
  }

  ngOnInit(): void {

  }

  OnAdd(textNote: string) {
      this.AllNote.push({note: textNote});
  }

  onFetchNote() {
      this.dataStorageService.fetchNote().subscribe(loadNote => {
        if (loadNote != null && loadNote !== undefined) {
          this.AllNote = loadNote;
        }
        if (loadNote == null){
          this.AllNote = [];
        }
      });
  }

}
