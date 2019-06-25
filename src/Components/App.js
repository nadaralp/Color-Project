import React from 'react';
import Palette from './Palette';
import seedColors from '../seedColor';
import generatePalette from '../utils/colorHelpers';
import { Route, Switch } from 'react-router-dom';

function App() {

  const findPalette = id => seedColors.find(palette => palette.id === id)


  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette list goes here</h1>} />
      <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />} />
    </Switch>
    // <div >
    //   <Palette palette={generatePalette(seedColors[2])} />
    // </div>
  );
}

export default App;
