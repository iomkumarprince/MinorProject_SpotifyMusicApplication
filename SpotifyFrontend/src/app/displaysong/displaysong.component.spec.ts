import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysongComponent } from './displaysong.component';

describe('DisplaysongComponent', () => {
  let component: DisplaysongComponent;
  let fixture: ComponentFixture<DisplaysongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaysongComponent]
    });
    fixture = TestBed.createComponent(DisplaysongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
