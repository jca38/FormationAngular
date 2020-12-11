import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddEditClientComponent } from './form-add-edit-client.component';

describe('FormAddEditClientComponent', () => {
  let component: FormAddEditClientComponent;
  let fixture: ComponentFixture<FormAddEditClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddEditClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddEditClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
