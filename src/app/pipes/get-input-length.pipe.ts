import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getInputLength',
})
export class GetInputLengthPipe implements PipeTransform {
  transform(controlAttr: any, name: string): number | null {
    if (controlAttr[name]) {
      const length = Number(controlAttr[name]);
      // increase length to include thousands separators, point and decimal places
      if (
        controlAttr?.mask?.startsWith('separator') &&
        controlAttr?.maskSeparator
      ) {
        const arr = controlAttr?.mask.split('.');
        const dp = Number(arr[1]) || 0;
        return dp === 0
          ? length + Math.ceil(length / 3) - 1
          : length + Math.ceil(length / 3) + dp;
      } // increase length to include point and decimal places
      else if (controlAttr?.mask?.startsWith('separator')) {
        const arr = controlAttr.mask.split('.');
        const dp = Number(arr[1]) || 0;
        return dp === 0 ? length : length + 1 + dp;
      }

      // use length if question doesn't have mask
      if (!controlAttr?.mask) {
        return length;
      }
    }

    // return null (don't return length) if has mask and no thousands separator
    // to avoid conflict between mask and length validators
    return null;
  }
}
