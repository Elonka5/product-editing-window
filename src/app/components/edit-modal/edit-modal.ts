import { Component } from '@angular/core';
import { EditModalHeader } from '../edit-modal-header/edit-modal-header';
import { EditModalDataElements } from '../edit-modal-data-elements/edit-modal-data-elements';
import { EditModalLocationList } from '../edit-modal-location-list/edit-modal-location-list';
import { EditModalEbayListings } from '../edit-modal-ebay-listings/edit-modal-ebay-listings';
import { EditModalSimilarProducts } from '../edit-modal-similar-products/edit-modal-similar-products';

@Component({
  selector: 'app-edit-modal',
  imports: [EditModalHeader,EditModalDataElements, EditModalLocationList,EditModalEbayListings,EditModalSimilarProducts],
  templateUrl: './edit-modal.html',
  styleUrl: './edit-modal.scss'
})
export class EditModal {

}
