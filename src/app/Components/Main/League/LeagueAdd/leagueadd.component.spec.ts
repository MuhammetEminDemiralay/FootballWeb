import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueaddComponent } from './leagueadd.component';

describe('LeagueaddComponent', () => {
  let component: LeagueaddComponent;
  let fixture: ComponentFixture<LeagueaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
