import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import FieldHeader from './FieldHeader';
import { setTextFieldValue } from '../redux/actions';

type Props = {
  fieldId: string;
  fieldName: string;
  value: string;
};

const TextField: React.FC<Props> = ({ fieldId, fieldName, value }) => {
  const dispatch = useDispatch();

  const setValue = useCallback(e => {
    dispatch(setTextFieldValue({ fieldId, value: e.target.value }));
  }, []);

  return (
    <div className="fields-container">
      <FieldHeader name={fieldName} />
      <input className="field" onChange={setValue} value={value} />
    </div>
  );
};

export default TextField;
