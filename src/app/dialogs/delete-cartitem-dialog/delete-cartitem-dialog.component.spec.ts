import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCartitemDialogComponent } from './delete-cartitem-dialog.component';

describe('DeleteCartitemDialogComponent', () => {
  let component: DeleteCartitemDialogComponent;
  let fixture: ComponentFixture<DeleteCartitemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCartitemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCartitemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
