import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conoceme } from './conoceme';

describe('Conoceme', () => {
  let component: Conoceme;
  let fixture: ComponentFixture<Conoceme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conoceme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conoceme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
