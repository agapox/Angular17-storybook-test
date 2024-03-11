import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import this
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [MatFormFieldModule , MatInputModule, FormsModule,
    ReactiveFormsModule, CommonModule],
})
export class ControlErrorModule {}