import { CmName } from "./name.model";
import { CmId } from "./id.model";

export interface CmNameId<N = string, I = string> extends CmName<N>, CmId<I> {
}
