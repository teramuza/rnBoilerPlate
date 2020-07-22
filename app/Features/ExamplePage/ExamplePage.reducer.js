import { defaultReducerState } from '../../Constants/DefaultObject';
import type { ActionDefaultProp } from '../../Constants/PropsType';

const initialState = {
  exampleState: defaultReducerState
};

export const example_store = (state = initialState, action: ActionDefaultProp) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
