import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalteamplayerupdateComponent } from './nationalteamplayerupdate.component';

describe('NationalteamplayerupdateComponent', () => {
  let component: NationalteamplayerupdateComponent;
  let fixture: ComponentFixture<NationalteamplayerupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalteamplayerupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalteamplayerupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
