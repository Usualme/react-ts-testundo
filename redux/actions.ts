import {
  SET_TEXT_FIELD_VALUE,
  SET_NUMBER_FIELD_VALUE,
  SET_UNDO_VALUE,
  SetTextFieldValue,
  SetNumberFieldValue,
  SetUndoValue
} from './types';

export const setTextFieldValue = (
  payload: SetTextFieldValue['payload']
): SetTextFieldValue => ({
  type: SET_TEXT_FIELD_VALUE,
  payload
});

export const setNumberFieldValue = (
  payload: SetNumberFieldValue['payload']
): SetNumberFieldValue => ({
  type: SET_NUMBER_FIELD_VALUE,
  payload
});

export const setUndoValue = (): SetUndoValue => ({
  type: SET_UNDO_VALUE
});
