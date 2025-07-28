import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalLocationList } from './edit-modal-location-list';

describe('EditModalLocationList', () => {
  let component: EditModalLocationList;
  let fixture: ComponentFixture<EditModalLocationList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditModalLocationList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModalLocationList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
