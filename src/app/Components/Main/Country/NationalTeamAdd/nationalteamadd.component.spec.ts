import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalteamaddComponent } from './nationalteamadd.component';

describe('NationalteamaddComponent', () => {
  let component: NationalteamaddComponent;
  let fixture: ComponentFixture<NationalteamaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalteamaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalteamaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
