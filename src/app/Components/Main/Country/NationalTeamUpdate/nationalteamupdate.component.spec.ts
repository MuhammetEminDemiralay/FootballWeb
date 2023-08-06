import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalteamupdateComponent } from './nationalteamupdate.component';

describe('NationalteamupdateComponent', () => {
  let component: NationalteamupdateComponent;
  let fixture: ComponentFixture<NationalteamupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalteamupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalteamupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
