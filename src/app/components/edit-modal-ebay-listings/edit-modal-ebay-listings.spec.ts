import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalEbayListings } from './edit-modal-ebay-listings';

describe('EditModalEbayListings', () => {
  let component: EditModalEbayListings;
  let fixture: ComponentFixture<EditModalEbayListings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditModalEbayListings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModalEbayListings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
