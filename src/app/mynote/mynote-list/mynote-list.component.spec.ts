import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MynoteListComponent } from './mynote-list.component';

describe('MynoteListComponent', () => {
  let component: MynoteListComponent;
  let fixture: ComponentFixture<MynoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MynoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
