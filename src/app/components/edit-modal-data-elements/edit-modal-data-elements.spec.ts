import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalDataElements } from './edit-modal-data-elements';

describe('EditModalDataElements', () => {
  let component: EditModalDataElements;
  let fixture: ComponentFixture<EditModalDataElements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditModalDataElements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModalDataElements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
