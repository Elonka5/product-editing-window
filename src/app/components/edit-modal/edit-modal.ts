import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
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
import { Button } from '../button/button';

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
    Button,
  ],
  templateUrl: './edit-modal.html',
  styleUrl: './edit-modal.scss',
})
export class EditModal implements OnInit {
  @Output() close = new EventEmitter<void>();

  product: IProduct | null = null;
  isLoading: boolean = true;
  errorMessage: string = '';

  private subscription: Subscription | undefined;

  constructor(
    private productService: Product,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadProductData();
  }

  loadProductData() {
    this.isLoading = true;
    this.product = null;
    this.errorMessage = '';
    this.subscription = this.productService.product$.subscribe({
      next: (data) => {
       setTimeout(() => {
          this.product = data;
          this.isLoading = false;
          this.cdr.detectChanges();
        }, 2000);
      },
      error: (error) => {
        console.error('Error loading product:', error);
        this.isLoading = false;
        this.errorMessage = 'Ooops... something went wrong';
        this.cdr.detectChanges();
      }
    });
    this.productService.loadProduct();
  }

  retryLoad() {
    this.loadProductData();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  

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
