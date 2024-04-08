import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarDashboradComponent } from './side-bar-dashborad.component';

describe('SideBarDashboradComponent', () => {
  let component: SideBarDashboradComponent;
  let fixture: ComponentFixture<SideBarDashboradComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarDashboradComponent]
    });
    fixture = TestBed.createComponent(SideBarDashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
