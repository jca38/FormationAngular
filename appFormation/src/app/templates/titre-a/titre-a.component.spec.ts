import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreAComponent } from './titre-a.component';

describe('TitreAComponent', () => {
  let component: TitreAComponent;
  let fixture: ComponentFixture<TitreAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitreAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitreAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
