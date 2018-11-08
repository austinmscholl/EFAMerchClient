import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartstockDialogComponent } from './cartstock-dialog.component';

describe('CartstockDialogComponent', () => {
  let component: CartstockDialogComponent;
  let fixture: ComponentFixture<CartstockDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartstockDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartstockDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
