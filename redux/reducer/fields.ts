import {
  Action,
  SET_TEXT_FIELD_VALUE,
  SET_NUMBER_FIELD_VALUE,
  Field
} from '../types';

export type State = Field[];

export const initialState: State = [
  {
    type: 'text',
    id: 'title',
    name: 'Title',
    value: 'some title'
  },
  {
    type: 'text',
    id: 'description',
    name: 'Description',
    value: 'some description'
  },
  {
    type: 'text',
    id: 'notes',
    name: 'Notes',
    value: 'some notes'
  },
  {
    type: 'number',
    id: 'budget',
    name: 'Budget',
    value: 40
  }
];

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SET_NUMBER_FIELD_VALUE:
    case SET_TEXT_FIELD_VALUE: {
      return state.map(field => {
        if (field.id === action.payload.fieldId) {
          return {
            ...field,
            value: action.payload.value
          };
        }

        return field;
      });
    }

    default:
      return state;
  }
};

export default reducer;
