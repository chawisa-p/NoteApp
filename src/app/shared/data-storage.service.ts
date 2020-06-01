import {Injectable, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient) {

  }

  storeNote(note: any[]) {
    this.http.put('https://note-app-a0d31.firebaseio.com/note.json', note)
      .subscribe(response => console.log(response));
  }

  fetchNote() {
    return this.http.get('https://note-app-a0d31.firebaseio.com/note.json');
    // .subscribe(loadnote => console.log(loadnote));
  }

}
