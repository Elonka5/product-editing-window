import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalSimilarProducts } from './edit-modal-similar-products';

describe('EditModalSimilarProducts', () => {
  let component: EditModalSimilarProducts;
  let fixture: ComponentFixture<EditModalSimilarProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditModalSimilarProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModalSimilarProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
