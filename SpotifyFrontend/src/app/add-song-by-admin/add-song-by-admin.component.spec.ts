import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSongByAdminComponent } from './add-song-by-admin.component';

describe('AddSongByAdminComponent', () => {
  let component: AddSongByAdminComponent;
  let fixture: ComponentFixture<AddSongByAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSongByAdminComponent]
    });
    fixture = TestBed.createComponent(AddSongByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
