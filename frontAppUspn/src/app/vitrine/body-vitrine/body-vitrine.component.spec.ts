import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyVitrineComponent } from './body-vitrine.component';

describe('BodyVitrineComponent', () => {
  let component: BodyVitrineComponent;
  let fixture: ComponentFixture<BodyVitrineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyVitrineComponent]
    });
    fixture = TestBed.createComponent(BodyVitrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
