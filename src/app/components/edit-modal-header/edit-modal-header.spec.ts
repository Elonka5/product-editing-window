import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalHeader } from './edit-modal-header';

describe('EditModalHeader', () => {
  let component: EditModalHeader;
  let fixture: ComponentFixture<EditModalHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditModalHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModalHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
