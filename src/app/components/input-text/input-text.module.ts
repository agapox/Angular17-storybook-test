import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import this
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { PipesModule } from '../../pipes/pipes.modules';
import { ControlErrorComponent } from '../control-error/control-error.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, FormsModule,
    ReactiveFormsModule, NgxMaskDirective,
    NgxMaskPipe,PipesModule,ControlErrorComponent, CommonModule],
  exports: [MatFormFieldModule , MatInputModule, FormsModule,
    ReactiveFormsModule, NgxMaskDirective,
    NgxMaskPipe, PipesModule, ControlErrorComponent, CommonModule],
  providers: [provideNgxMask()],
})
export class InputTextModule {}