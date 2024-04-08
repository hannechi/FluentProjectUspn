import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInformationVersionWikiComponent } from './more-information-version-wiki.component';

describe('MoreInformationVersionWikiComponent', () => {
  let component: MoreInformationVersionWikiComponent;
  let fixture: ComponentFixture<MoreInformationVersionWikiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreInformationVersionWikiComponent]
    });
    fixture = TestBed.createComponent(MoreInformationVersionWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
