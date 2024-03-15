import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvitrineComponent } from './allvitrine.component';

describe('AllvitrineComponent', () => {
  let component: AllvitrineComponent;
  let fixture: ComponentFixture<AllvitrineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllvitrineComponent]
    });
    fixture = TestBed.createComponent(AllvitrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
