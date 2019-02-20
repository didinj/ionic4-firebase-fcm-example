import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPage } from './second.page';

describe('SecondPage', () => {
  let component: SecondPage;
  let fixture: ComponentFixture<SecondPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
