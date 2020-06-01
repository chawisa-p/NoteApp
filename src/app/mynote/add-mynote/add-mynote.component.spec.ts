import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMynoteComponent } from './add-mynote.component';

describe('AddMynoteComponent', () => {
  let component: AddMynoteComponent;
  let fixture: ComponentFixture<AddMynoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMynoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMynoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
