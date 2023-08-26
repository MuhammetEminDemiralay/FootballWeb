import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballerupdateComponent } from './footballerupdate.component';

describe('FootballerupdateComponent', () => {
  let component: FootballerupdateComponent;
  let fixture: ComponentFixture<FootballerupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballerupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballerupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
