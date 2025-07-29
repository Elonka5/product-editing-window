import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Button } from '../button/button';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-modal-header',
  imports: [CommonModule, Button],
  templateUrl: './edit-modal-header.html',
  styleUrl: './edit-modal-header.scss',
})
export class EditModalHeader {
  @Input() product: IProduct | null = null;
  @Output() closeModal = new EventEmitter<void>();

  onCloseClick() {
    this.closeModal.emit();
  }
}
