// UndoRedo.js
import React from 'react';

function UndoRedo({ undo, redo }) {
  return (
    <div className="UndoRedo">
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
    </div>
  );
}

export default UndoRedo;
