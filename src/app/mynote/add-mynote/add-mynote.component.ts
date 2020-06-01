import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-add-mynote',
  templateUrl: './add-mynote.component.html',
  styleUrls: ['./add-mynote.component.css']
})
export class AddMynoteComponent implements OnInit {
  noteText = '';
  noteCreationStatus = '';
  noteCreated = false;
  @Output() addNote = new EventEmitter<string>();
  @Input() dataAllNote = [];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  onCreateNote() {
    this.addNote.emit(this.noteText);
    this.noteCreated = true;
    this.noteCreationStatus = 'Your note has add!';
    this.dataStorageService.storeNote(this.dataAllNote);
  }

  onClear() {
    if (this.noteText === '') {
      this.noteCreated = false;
      return true;
    }
  }
}
