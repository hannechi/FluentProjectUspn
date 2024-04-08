import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemLogComponent } from './list-item-log.component';

describe('ListItemLogComponent', () => {
  let component: ListItemLogComponent;
  let fixture: ComponentFixture<ListItemLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemLogComponent]
    });
    fixture = TestBed.createComponent(ListItemLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
