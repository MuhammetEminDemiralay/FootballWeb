import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubaddComponent } from './clubadd.component';

describe('ClubaddComponent', () => {
  let component: ClubaddComponent;
  let fixture: ComponentFixture<ClubaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
