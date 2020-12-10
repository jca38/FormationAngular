import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTextComponent } from './global-text.component';

describe('GlobalTextComponent', () => {
  let component: GlobalTextComponent;
  let fixture: ComponentFixture<GlobalTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
