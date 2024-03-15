import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllModificationWikiComponent } from './all-modification-wiki.component';

describe('AllModificationWikiComponent', () => {
  let component: AllModificationWikiComponent;
  let fixture: ComponentFixture<AllModificationWikiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllModificationWikiComponent]
    });
    fixture = TestBed.createComponent(AllModificationWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
