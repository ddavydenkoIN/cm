import { CmId } from './id.model';

export interface CmIdType<T, I = string> extends CmId<I> {
  type: T;
}
