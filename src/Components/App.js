import React from 'react';
import Palette from './Palette';
import seedColors from '../seedColor';
import generatePalette from '../utils/colorHelpers';
import SingleColorPalette from './SignelColorPalette';
import NewPaletteForm from './NewPaletteForm';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.state = {
      palettes: seedColors
    }
  }

  findPalette = id => this.state.palettes.find(palette => palette.id === id);

  savePalette(newPalette) {
    this.setState(state => ({
      ...state,
      palettes: [
        ...state.palettes,
        newPalette
      ]
    }))
  }
  // savePallete = (newPalette) => {
  //   console.log(newPalette);
  // }

  render() {
    const { palettes } = this.state;
    return (
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={palettes} />} />
        <Route exact path="/palette/new" render={(routeProps) => <NewPaletteForm {...routeProps} savePalette={this.savePalette} />} />
        <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
        <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => <SingleColorPalette {...routeProps} palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} />} />
      </Switch>
      // <div >
      //   <Palette palette={generatePalette(seedColors[2])} />
      // </div>
    );
  }
}
export default App;
