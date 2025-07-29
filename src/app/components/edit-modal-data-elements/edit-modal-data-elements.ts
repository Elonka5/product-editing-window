import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-edit-modal-data-elements',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './edit-modal-data-elements.html',
  styleUrl: './edit-modal-data-elements.scss'
})
export class EditModalDataElements {
@Input() product: IProduct | null = null;
}
