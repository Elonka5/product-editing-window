import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
    standalone: true,

  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() variant: 'primary' |"primary--wide"| 'secondary' = 'primary';
  @Input() label: string = '';
  @Input() icon?: string;
}
