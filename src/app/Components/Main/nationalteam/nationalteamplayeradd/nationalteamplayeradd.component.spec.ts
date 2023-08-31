import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalteamplayeraddComponent } from './nationalteamplayeradd.component';

describe('NationalteamplayeraddComponent', () => {
  let component: NationalteamplayeraddComponent;
  let fixture: ComponentFixture<NationalteamplayeraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalteamplayeraddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalteamplayeraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
