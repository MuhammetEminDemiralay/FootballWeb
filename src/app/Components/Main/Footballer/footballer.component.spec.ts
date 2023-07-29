import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballerComponent } from './footballer.component';

describe('FootballerComponent', () => {
  let component: FootballerComponent;
  let fixture: ComponentFixture<FootballerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
