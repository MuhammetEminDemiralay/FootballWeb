import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryupdateComponent } from './leagueupdate.component';

describe('CountryupdateComponent', () => {
  let component: CountryupdateComponent;
  let fixture: ComponentFixture<CountryupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
