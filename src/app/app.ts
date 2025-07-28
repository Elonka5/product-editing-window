import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditModal } from './components/edit-modal/edit-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EditModal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('product-editing-window');
}
