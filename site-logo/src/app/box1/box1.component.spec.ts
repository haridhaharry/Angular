import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Box1Component } from './box1.component';

describe('Box1Component', () => {
  let component: Box1Component;
  let fixture: ComponentFixture<Box1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Box1Component]
    });
    fixture = TestBed.createComponent(Box1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
