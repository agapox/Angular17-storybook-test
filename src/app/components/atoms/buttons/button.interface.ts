export enum ButtonTypes {
  primary = 'primary',
  secondary = 'secondary',
  alternative = 'alternative',
  link = 'link',
}

export enum ButtonSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export interface ButtonInterface {
  type: ButtonTypes;
  size: ButtonSizes;
}
