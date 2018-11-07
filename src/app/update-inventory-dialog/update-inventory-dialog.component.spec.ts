import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInventoryDialogComponent } from './update-inventory-dialog.component';

describe('UpdateInventoryDialogComponent', () => {
  let component: UpdateInventoryDialogComponent;
  let fixture: ComponentFixture<UpdateInventoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInventoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInventoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
