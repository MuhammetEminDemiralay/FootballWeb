import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubupdateComponent } from './clubupdate.component';

describe('ClubupdateComponent', () => {
  let component: ClubupdateComponent;
  let fixture: ComponentFixture<ClubupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
