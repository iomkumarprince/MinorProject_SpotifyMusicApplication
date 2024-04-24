import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsongtoplaylistComponent } from './addsongtoplaylist.component';

describe('AddsongtoplaylistComponent', () => {
  let component: AddsongtoplaylistComponent;
  let fixture: ComponentFixture<AddsongtoplaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsongtoplaylistComponent]
    });
    fixture = TestBed.createComponent(AddsongtoplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
