import { CmName } from "./name.model";

export interface CmNameValue<N = string, V = string> extends CmName <N> {
  value: V;
}
