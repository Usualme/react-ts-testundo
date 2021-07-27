import { SET_UNDO_VALUE } from '../types';

function undoable(reducer) {
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
  };

  return function(state = initialState, action) {
    const { past, present } = state;

    switch (action.type) {
      case SET_UNDO_VALUE:
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);

        return {
          past: newPast,
          present: previous,
        };

      default:
        const newPresent = reducer(present, action);
        if (present === newPresent) {
          return state;
        }

        return {
          past: [...past, present],
          present: newPresent,
        };
    }
  };
}

export default undoable;
