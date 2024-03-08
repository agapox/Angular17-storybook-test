import { Component } from '@angular/core';
import { InputTextModule } from './input-text.module';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent {

}
