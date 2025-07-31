import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProduct, ISameProduct } from '../../models/product.model';
import { Button } from '../button/button';

@Component({
  selector: 'app-edit-modal-similar-products',
  standalone:true,
  imports: [CommonModule, Button],
  templateUrl: './edit-modal-similar-products.html',
  styleUrl: './edit-modal-similar-products.scss'
})
export class EditModalSimilarProducts {
@Input() product: IProduct | null = null;

  repeatFour = Array(4);

  columns: { key: keyof ISameProduct; label: string }[] = [
    { key: 'original_id', label: 'Original_id' },
    { key: 'same_id', label: 'Same_id' },
    { key: 'fk_edit_employee', label: 'fk_edit_employee' }
  ];

  getValue(loc: ISameProduct, key: keyof ISameProduct): string | number | undefined {
  return loc[key];
}
}
