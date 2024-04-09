import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateResponseComponent } from './modal-update-response.component';

describe('ModalUpdateResponseComponent', () => {
  let component: ModalUpdateResponseComponent;
  let fixture: ComponentFixture<ModalUpdateResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalUpdateResponseComponent]
    });
    fixture = TestBed.createComponent(ModalUpdateResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
