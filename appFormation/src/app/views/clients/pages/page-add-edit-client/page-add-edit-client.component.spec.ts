import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddEditClientComponent } from './page-add-edit-client.component';

describe('PageAddEditClientComponent', () => {
  let component: PageAddEditClientComponent;
  let fixture: ComponentFixture<PageAddEditClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddEditClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddEditClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
