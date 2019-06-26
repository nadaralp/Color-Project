import React from 'react';
import Palette from './Palette';
import seedColors from '../seedColor';
import generatePalette from '../utils/colorHelpers';
import SingleColorPalette from './SignelColorPalette';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';

function App() {

  const findPalette = id => seedColors.find(palette => palette.id === id)


  return (
    <Switch>
      <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
      <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />} />
      <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => <SingleColorPalette {...routeProps} palette={generatePalette(findPalette(routeProps.match.params.paletteId))} />} />
    </Switch>
    // <div >
    //   <Palette palette={generatePalette(seedColors[2])} />
    // </div>
  );
}

export default App;
