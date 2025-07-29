import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditModal } from './components/edit-modal/edit-modal';
import { HttpClientModule } from '@angular/common/http';
import { Button } from './components/button/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
    standalone: true,

  imports: [RouterOutlet,EditModal, Button,CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('product-editing-window');
  isShowModal = false;

  constructor(){
    
  }
  openModal() {
    this.isShowModal = true;
    document.body.classList.add('modal-open');
  }

    closeModal() {
    this.isShowModal = false;
    document.body.classList.remove('modal-open');
  }
}
