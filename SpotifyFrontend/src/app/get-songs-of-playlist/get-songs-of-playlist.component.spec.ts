import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSongsOfPlaylistComponent } from './get-songs-of-playlist.component';

describe('GetSongsOfPlaylistComponent', () => {
  let component: GetSongsOfPlaylistComponent;
  let fixture: ComponentFixture<GetSongsOfPlaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetSongsOfPlaylistComponent]
    });
    fixture = TestBed.createComponent(GetSongsOfPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
