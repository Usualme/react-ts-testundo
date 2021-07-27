import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { render } from 'react-dom';

import FieldRenderer from './components/FieldRenderer';
import { setUndoValue } from './redux/actions';
import { useFields } from './redux/selectors';
import './style.css';

const App = () => {
  const dispatch = useDispatch();
  const { fields, pastFields } = useFields();

  const handleClickUndo = () => {
    dispatch(setUndoValue());
  };

  return (
    <>
      <div className="fields-container">
        {fields.map(field => (
          <FieldRenderer key={field.id} field={field} />
        ))}
      </div>
      <button
        className="fields-button"
        disabled={!pastFields.length}
        onClick={handleClickUndo}
      >
        Undo
      </button>
    </>
  );
};

export default App;
