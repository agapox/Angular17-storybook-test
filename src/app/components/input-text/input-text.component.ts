import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

import { Questions, QuestionType } from '../dynamic-forms.interface';
import { InputTextModule } from './input-text.module';

interface QuesValidationInterface {
  value?: string | null;
  mask?: string | null;
  minLength?: string | number;
  maxLength?: string | number;
  maskSeparator?: string;
}

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent implements OnInit {
  @Input() question!: Questions;

  formGroup: FormGroup;
  control: FormControl | undefined;

  questionType = QuestionType;
  quesValidation: QuesValidationInterface | undefined;

  constructor(private controlContainer: ControlContainer) {
    this.formGroup = this.controlContainer.control as FormGroup;
  }

  ngOnInit() {
    this.control = this.formGroup.get(this.question.identifier) as FormControl;
    this.question.options = [];
    this.quesValidation = {
      value: null,
      mask: this.question.controlAttribute?.mask || '',
      minLength: this.question.controlAttribute?.minLength || '',
      maxLength: this.question.controlAttribute?.maxLength || '',
      maskSeparator: this.question.controlAttribute?.maskSeparator || '',
    };
  }

  onPaste() {
    return !this.question.controlAttribute?.mask?.includes('separator');
  }

  inputChange(ev: any) {
    const mask = this.question.controlAttribute?.mask;
    const controlAttributes = this.question.controlAttribute;
    const maxLength = Number(controlAttributes?.maxLength);
    const value = ev.target.value;
    let valueTemp = value.replaceAll(
      this.question.controlAttribute?.maskSeparator,
      '',
    );
    let backSpaceVal =
      ev.key === 'Backspace'
        ? value.substring(ev.target.selectionStart, ev.target.selectionEnd)
        : null;

    backSpaceVal =
      ev.key === 'Delete' && !backSpaceVal
        ? value[ev.target.selectionStart]
        : backSpaceVal;

    const keysVal = '0123456789';
    const quesValidation: QuesValidationInterface = {
      mask: mask,
      maxLength: maxLength,
    };

    if (controlAttributes && mask?.includes('separator')) {
      if (
        valueTemp.length >= maxLength &&
        keysVal.includes(ev.key) &&
        !value.includes('.')
      ) {
        quesValidation.maxLength = maxLength;
        quesValidation.mask = 'separator.0';
      } else if (
        valueTemp.length >= maxLength &&
        (ev.key === 'Backspace' || ev.key === 'Delete') &&
        backSpaceVal === '.'
      ) {
        quesValidation.maxLength = maxLength;
        quesValidation.mask =
          ev.key === 'Backspace' ? 'separator.1' : 'separator.0';
      }
    }

    if (
      this.quesValidation!.mask !== quesValidation.mask ||
      this.quesValidation!.maxLength !== quesValidation.maxLength
    ) {
      this.quesValidation = { ...this.quesValidation, ...quesValidation };
    }

    //set value to be use in keyup to format value with leading zeros
    this.quesValidation!.value = ev.target.value;
  }

  formatInput(ev: any) {
    const controlAttributes = this.question.controlAttribute;
    const maxLength = Number(controlAttributes?.maxLength);
    const value = ev.target.value;
    let valueTemp: string = value.replaceAll(
      this.question.controlAttribute?.maskSeparator,
      '',
    );
    const mask = this.question.controlAttribute?.mask;
    const dp = Number(mask?.split('.')[1] || 0);

    if (mask?.includes('separator')) {
      if (valueTemp.split('.')[0].length > maxLength) {
        //adjust values greater than allowed limit, shift decimal to the left and fixed to required decimal place without rounding
        const rightShift = parseFloat(valueTemp) / 10;
        const newVal = this.toFixedFloor(rightShift, dp);
        this.control?.patchValue(Number(newVal));
      } else if (valueTemp.at(0) === '0') {
        //parse leading zeros'
        valueTemp =
          this.quesValidation!.value?.replaceAll(
            this.question.controlAttribute?.maskSeparator?.toString() || ',',
            '',
          ) || valueTemp;
        const newVal = parseFloat(valueTemp).toFixed(dp);
        this.control?.patchValue(Number(newVal));
      }

      this.formGroup?.updateValueAndValidity();
    }
  }

  toFixedFloor(val: number, dp: number) {
    const shiftVal = Math.pow(10, dp);
    //shift decimal by nummber of required dp, then floor to retain only whole number (removing excess dp) then shift decimal point to right to obtain original value less the excess decimal value without rounding
    return (Math.floor(val * shiftVal) / shiftVal).toString();
  }

}
