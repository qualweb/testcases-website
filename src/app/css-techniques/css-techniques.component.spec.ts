import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTechniquesComponent } from './css-techniques.component';

describe('CssTechniquesComponent', () => {
  let component: CssTechniquesComponent;
  let fixture: ComponentFixture<CssTechniquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssTechniquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
