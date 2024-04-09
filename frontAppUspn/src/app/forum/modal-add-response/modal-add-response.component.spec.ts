import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddResponseComponent } from './modal-add-response.component';

describe('ModalAddResponseComponent', () => {
  let component: ModalAddResponseComponent;
  let fixture: ComponentFixture<ModalAddResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddResponseComponent]
    });
    fixture = TestBed.createComponent(ModalAddResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
