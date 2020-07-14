import { CmFormFieldNodeType, CmInputType } from '../../enums/playground';
import { CmElementType } from '../elements';

export interface CmPlaygroundFormData {
  type: CmElementType;
  fields: CmPlaygroundFormField[];
}

export interface CmPlaygroundFormField {
  nodeType: CmFormFieldNodeType;
  inputType: CmInputType;
  name: string;
  children?: CmPlaygroundFormField[];
  parentNode?: string;
  value?: unknown;
}
