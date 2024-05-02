// App.js
import React from 'react';
import Canvas from './Components/Canvas';
import ShapeTools from './Components/ShapeTools';
import ColorPicker from './Components/ColorPicker';
import UndoRedo from './Components/UndoRedo';

function App() {
  return (
    <div className="App">
      <h1>Simple Graphics Program</h1>
      <Canvas />
      <ShapeTools />
      <ColorPicker />
      <UndoRedo />
    </div>
  );
}

export default App;
