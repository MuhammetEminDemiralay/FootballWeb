import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballeraddComponent } from './footballeradd.component';

describe('FootballeraddComponent', () => {
  let component: FootballeraddComponent;
  let fixture: ComponentFixture<FootballeraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballeraddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballeraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
