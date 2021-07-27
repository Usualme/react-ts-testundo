import {
  SET_TEXT_FIELD_VALUE,
  SET_NUMBER_FIELD_VALUE,
  SET_UNDO_VALUE,
  SetTextFieldValue,
  SetNumberFieldValue,
  SetUndoValue
} from './types';

export const setTextFieldValue = ({ fieldId, value }): SetTextFieldValue => ({
  type: SET_TEXT_FIELD_VALUE,
  payload: {
    fieldId,
    value
  }
});

export const setNumberFieldValue = ({
  fieldId,
  value
}): SetNumberFieldValue => ({
  type: SET_NUMBER_FIELD_VALUE,
  payload: {
    fieldId,
    value
  }
});

export const setUndoValue = (): SetUndoValue => ({
  type: SET_UNDO_VALUE
});
