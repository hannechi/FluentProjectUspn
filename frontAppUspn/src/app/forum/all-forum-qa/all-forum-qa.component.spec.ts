import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllForumQAComponent } from './all-forum-qa.component';

describe('AllForumQAComponent', () => {
  let component: AllForumQAComponent;
  let fixture: ComponentFixture<AllForumQAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllForumQAComponent]
    });
    fixture = TestBed.createComponent(AllForumQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
