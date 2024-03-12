import { Component, Input } from '@angular/core';
import { Questions } from '../dynamic-forms.interface';
import { ControlErrorModule } from './control-error.module';

@Component({
  selector: 'emma-control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.scss'],
  standalone: true,
  imports: [ControlErrorModule],
})
export class ControlErrorComponent {
  @Input() errors!: any[];
  @Input() question!: Questions;
}
