import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserRoleComponent } from './list-user-role.component';

describe('ListUserRoleComponent', () => {
  let component: ListUserRoleComponent;
  let fixture: ComponentFixture<ListUserRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUserRoleComponent]
    });
    fixture = TestBed.createComponent(ListUserRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
