import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { EditModalHeader } from '../edit-modal-header/edit-modal-header';
import { EditModalDataElements } from '../edit-modal-data-elements/edit-modal-data-elements';
import { EditModalLocationList } from '../edit-modal-location-list/edit-modal-location-list';
import { EditModalEbayListings } from '../edit-modal-ebay-listings/edit-modal-ebay-listings';
import { EditModalSimilarProducts } from '../edit-modal-similar-products/edit-modal-similar-products';
import { Product } from '../../services/product';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [
    CommonModule,
    EditModalHeader,
    EditModalDataElements,
    EditModalLocationList,
    EditModalEbayListings,
    EditModalSimilarProducts,
  ],
  templateUrl: './edit-modal.html',
  styleUrl: './edit-modal.scss',
})
export class EditModal implements OnInit {
  // @Input() onClose: () => void = () => {};
  @Output() close = new EventEmitter<void>();
  // constructor(private productService: Product) {}

  //   ngOnInit() {
  //     this.productService.loadProduct();
  //   }

  product: IProduct | null = null;
  private subscription: Subscription | undefined;

  constructor(
    private productService: Product,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscription = this.productService.product$.subscribe((data) => {
      console.log('EditModal received:', data);
      this.product = data;
      this.cdr.detectChanges();
    });
    this.productService.loadProduct();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  //   closeModal() {
  //   this.onClose();
  // }

  onBackdropClick(event: MouseEvent) {
    this.close.emit();
  }

  onModalClose() {
    this.close.emit();
  }

  @HostListener('document:keydown', ['$event'])
  onEscPress(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.close.emit();
    }
  }
}
