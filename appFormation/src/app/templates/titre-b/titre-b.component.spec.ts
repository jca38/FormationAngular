import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreBComponent } from './titre-b.component';

describe('TitreBComponent', () => {
  let component: TitreBComponent;
  let fixture: ComponentFixture<TitreBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitreBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitreBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
