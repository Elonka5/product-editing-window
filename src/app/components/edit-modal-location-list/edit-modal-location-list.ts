import { Component, Input } from '@angular/core';
import { IProduct, IProductLocation } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-modal-location-list',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './edit-modal-location-list.html',
  styleUrl: './edit-modal-location-list.scss'
})
export class EditModalLocationList {
@Input() product: IProduct | null = null;

  repeatFour = Array(4);

  columns: { key: keyof IProductLocation; label: string }[] = [
    { key: 'id', label: 'ID' },
    { key: 'brand', label: 'Brand' },
    { key: 'category', label: 'Category' },
    { key: 'device_pn', label: 'Device P/N' },
    { key: 'qty', label: 'Gty' },
    { key: 'condition', label: 'Condition' },
    { key: 'edit_user', label: 'Edit User' },
    { key: 'notes', label: 'Notes' },
  ];

  getValue(loc: IProductLocation, key: keyof IProductLocation): string | number | undefined {
  return loc[key];
}
}
