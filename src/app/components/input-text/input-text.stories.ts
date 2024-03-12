import { moduleMetadata } from '@storybook/angular';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextComponent } from './input-text.component';

export default {
  title: 'Input Text',
  decorators: [
    moduleMetadata({
      //declarations: [InputTextComponent],
      imports: [MatInputModule, BrowserAnimationsModule],
    }),
  ],
};

export const Default = () => ({
  component: InputTextComponent,
  props: {},
});
