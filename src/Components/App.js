import React from 'react';
import Palette from './Palette';
import seedColors from '../seedColor';
import generatePalette from '../utils/colorHelpers';

function App() {
  return (
    <div >
      <Palette palette={generatePalette(seedColors[2])} />
    </div>
  );
}

export default App;
