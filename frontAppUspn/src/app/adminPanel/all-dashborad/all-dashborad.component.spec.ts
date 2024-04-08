import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDashboradComponent } from './all-dashborad.component';

describe('AllDashboradComponent', () => {
  let component: AllDashboradComponent;
  let fixture: ComponentFixture<AllDashboradComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDashboradComponent]
    });
    fixture = TestBed.createComponent(AllDashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
