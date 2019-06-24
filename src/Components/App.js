import React from 'react';
import Palette from './Palette';
import seedColors from '../seedColor';
import generatePalette from '../utils/colorHelpers';

function App() {
  console.log(generatePalette(seedColors[2]))
  return (
    <div >
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
