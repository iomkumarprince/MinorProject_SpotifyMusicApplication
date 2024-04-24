import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteplaylistComponent } from './deleteplaylist.component';

describe('DeleteplaylistComponent', () => {
  let component: DeleteplaylistComponent;
  let fixture: ComponentFixture<DeleteplaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteplaylistComponent]
    });
    fixture = TestBed.createComponent(DeleteplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
