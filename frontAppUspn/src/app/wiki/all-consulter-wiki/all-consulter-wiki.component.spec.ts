import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllConsulterWikiComponent } from './all-consulter-wiki.component';

describe('AllConsulterWikiComponent', () => {
  let component: AllConsulterWikiComponent;
  let fixture: ComponentFixture<AllConsulterWikiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllConsulterWikiComponent]
    });
    fixture = TestBed.createComponent(AllConsulterWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
