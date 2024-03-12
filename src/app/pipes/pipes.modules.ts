import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GetInputLengthPipe } from './get-input-length.pipe';

const pipes = [
  GetInputLengthPipe,
];

@NgModule({
  declarations: pipes,
  imports: [CommonModule],
  exports: pipes,
})
export class PipesModule {}
