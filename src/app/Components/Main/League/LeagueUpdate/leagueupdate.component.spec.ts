import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueupdateComponent } from './leagueupdate.component';

describe('LeagueupdateComponent', () => {
  let component: LeagueupdateComponent;
  let fixture: ComponentFixture<LeagueupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
