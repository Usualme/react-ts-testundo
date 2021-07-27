export const SET_TEXT_FIELD_VALUE = 'SET_TEXT_FIELD_VALUE' as const;
export const SET_NUMBER_FIELD_VALUE = 'SET_NUMBER_FIELD_VALUE' as const;
export const SET_UNDO_VALUE = 'SET_UNDO_VALUE' as const;

export type SetTextFieldValue = {
  type: typeof SET_TEXT_FIELD_VALUE;
  payload: {
    fieldId: string;
    value: string;
  };
};

export type SetNumberFieldValue = {
  type: typeof SET_NUMBER_FIELD_VALUE;
  payload: {
    fieldId: string;
    value: number;
  };
};

export type SetUndoValue = {
  type: typeof SET_UNDO_VALUE;
};

export type UndoableState = {
  present: Field[];
  past: Field[];
};

export type Action = SetTextFieldValue | SetNumberFieldValue | SetUndoValue;

export type Field =
  | {
      type: 'text';
      id: string;
      name: string;
      value: string;
    }
  | {
      type: 'number';
      id: string;
      name: string;
      value: number;
    };
