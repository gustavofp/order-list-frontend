import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';

import Header from './components/Header';
import Filters from './containers/Filters';
import ResultGrid from './containers/ResultGrid';

class App extends Component {


  render() {
    const theme = createMuiTheme({
      palette: {
        primary: red,
        secondary: amber
      },
    });

    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Header />
          <Filters />
          <ResultGrid />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
