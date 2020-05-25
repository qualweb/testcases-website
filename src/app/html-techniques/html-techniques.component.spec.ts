import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTechniquesComponent } from './html-techniques.component';

describe('HtmlTechniquesComponent', () => {
  let component: HtmlTechniquesComponent;
  let fixture: ComponentFixture<HtmlTechniquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlTechniquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
