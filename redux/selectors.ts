import { useSelector } from 'react-redux';

import { UndoableState, Field } from './types';

export const useFields = (): { fields: Field[]; pastFields: Field[] } => {
  const { present: fields, past: pastFields } = useSelector(
    (state: UndoableState) => state
  );

  return { fields, pastFields };
};
