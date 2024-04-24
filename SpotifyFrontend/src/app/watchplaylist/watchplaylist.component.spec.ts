import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchplaylistComponent } from './watchplaylist.component';

describe('WatchplaylistComponent', () => {
  let component: WatchplaylistComponent;
  let fixture: ComponentFixture<WatchplaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchplaylistComponent]
    });
    fixture = TestBed.createComponent(WatchplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
