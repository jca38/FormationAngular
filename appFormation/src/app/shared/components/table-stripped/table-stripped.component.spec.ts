import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStrippedComponent } from './table-stripped.component';

describe('TableStrippedComponent', () => {
  let component: TableStrippedComponent;
  let fixture: ComponentFixture<TableStrippedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableStrippedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStrippedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
