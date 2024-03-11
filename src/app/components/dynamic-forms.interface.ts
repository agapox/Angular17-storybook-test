export interface IFormStep {
  informationType: string;
  nameStep: string;
  nextButton: string;
  backButton: string;
  questions: Questions[];
  showConfirmationModal?: string;
}

export interface Questions {
  active: boolean;
  questionDependents: any;
  identifier: string;
  aditionalValidation: string;
  operation: string;
  question: string;
  required: boolean;
  controlType: string;
  editCurrentData: boolean;
  showOrder: number;
  controlAttribute: ControlAttributes | null;
  responseValue: null | string;
  dependsOn: string | null;
  listValuesURLTemplate: null | string;
  options: OptionInterface[] | [];
  questionDependence: string;
  defaultValue: string | null | Date;
  hidden: boolean;
  disabled?: boolean;
  clases?: string[];
  document: any;
  documentTemp?: any;
  typeDocument?: string;
  catalogCode?: string;
  dependent?: boolean;
  questionTitle?: QuestionTitle;
  loading?: boolean;
  deleteFileId?: string | null;
}

interface QuestionTitle {
  title: string;
  classes: string[];
}

export interface OptionInterface {
  slug: string;
  value: string;
  additionalField?: string;
}

export interface ControlAttributes {
  id?: number;
  charReplace?: string;
  placeHolder?: string | undefined;
  pattern?: string;
  prefix?: string;
  mask?: string | undefined;
  maxLength?: string | number | undefined;
  minLength?: string | number | undefined;
  minDate?: string | Date | null;
  maxDate?: string | Date | null;
  inputMode?: string | null;
  keyBoardType?: string | null;
  maskSeparator?: string | null;
}

export enum QuestionType {
  TEXT = 'TEXT',
  SELECT = 'SELECT',
  DATE = 'DATE',
  FILE = 'FILE',
  RICHTEXT = 'RICHTEXT',
}
