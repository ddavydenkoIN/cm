import { CmElementsState, initialState } from './elements.state';
import { Action, createReducer, on } from '@ngrx/store';
import { selectElementToEdit } from './elements.actions';


const _bannersReducer = createReducer(initialState,
  on(selectElementToEdit, (state, action) => ({
        ...state,
        selected: {
          id: action.id,
          type: action.elementType,
        }
      })
  ),
);

export function elementsReducer(state: CmElementsState | undefined,
                               action: Action) {
  return _bannersReducer(state, action);
}
