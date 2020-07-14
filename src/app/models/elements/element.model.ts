import { CmNameId } from '../common';
import { CmElementType } from './type.model';

export interface CmElement extends CmNameId {
  type: CmElementType;
  fields: unknown;
  component?: unknown;
}
