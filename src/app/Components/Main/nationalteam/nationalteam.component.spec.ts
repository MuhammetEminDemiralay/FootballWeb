import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalteamComponent } from './nationalteam.component';

describe('NationalteamComponent', () => {
  let component: NationalteamComponent;
  let fixture: ComponentFixture<NationalteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
