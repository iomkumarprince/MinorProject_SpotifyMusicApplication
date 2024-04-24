import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesongfromplaylistComponent } from './deletesongfromplaylist.component';

describe('DeletesongfromplaylistComponent', () => {
  let component: DeletesongfromplaylistComponent;
  let fixture: ComponentFixture<DeletesongfromplaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletesongfromplaylistComponent]
    });
    fixture = TestBed.createComponent(DeletesongfromplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
