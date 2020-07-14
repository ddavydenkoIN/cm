import { CmPlaygroundFormData } from '../../../../models/playground';

export interface CmPlaygroundDataConverter {
  convert(): CmPlaygroundFormData;
}
