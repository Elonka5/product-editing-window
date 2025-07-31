import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IEbayListing, IProduct, IProductLocation } from '../../models/product.model';

@Component({
  selector: 'app-edit-modal-ebay-listings',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './edit-modal-ebay-listings.html',
  styleUrl: './edit-modal-ebay-listings.scss'
})
export class EditModalEbayListings {
@Input() product: IProduct | null = null;

  repeatFour = Array(4);

  columns: { key: keyof IEbayListing; label: string }[] = [
    { key: 'listing_id', label: 'Listing_id' },
    { key: 'sku', label: 'SKU' },
    { key: 'condition_id', label: 'Condition_id' },
    { key: 'product_id', label: 'Product_id' },
    { key: 'title', label: 'Title' },
    { key: 'price', label: 'Price' },
    { key: 'listing_qty', label: 'Listing_qty' },
    { key: 'inventory_qty', label: 'Inventory' },
  ];

  getValue(loc: IEbayListing, key: keyof IEbayListing): string | number | undefined {
  return loc[key];
}
}
