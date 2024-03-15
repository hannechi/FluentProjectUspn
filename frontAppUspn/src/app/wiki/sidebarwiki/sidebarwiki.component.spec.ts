import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarwikiComponent } from './sidebarwiki.component';

describe('SidebarwikiComponent', () => {
  let component: SidebarwikiComponent;
  let fixture: ComponentFixture<SidebarwikiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarwikiComponent]
    });
    fixture = TestBed.createComponent(SidebarwikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
