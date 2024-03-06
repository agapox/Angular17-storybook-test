import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonInterface, ButtonSizes, ButtonTypes } from './button.interface';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button (click)="onClick.emit($event)" [ngClass]="classes">
    {{ label }}
  </button>`,
  styleUrls: ['./button.scss'],
})
export class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input() button: ButtonInterface['type'] = ButtonTypes.primary;

  /**
   * How large should the button be?
   */
  @Input() size: ButtonInterface['size'] = ButtonSizes.medium;

  /**
   * Button contents
   *
   * @required
   */
  @Input() label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {

    return [
      'storybook-button',
      `storybook-button--${this.size}`,
      `storybook-button--${this.button}`,
    ];
  }
}
