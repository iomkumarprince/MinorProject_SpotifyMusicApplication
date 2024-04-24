import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesongbyadminComponent } from './deletesongbyadmin.component';

describe('DeletesongbyadminComponent', () => {
  let component: DeletesongbyadminComponent;
  let fixture: ComponentFixture<DeletesongbyadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletesongbyadminComponent]
    });
    fixture = TestBed.createComponent(DeletesongbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
