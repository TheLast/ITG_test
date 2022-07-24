import React from 'react';
import ReactDOM from 'react-dom';
import { CustomThemeProvider as ThemeProvider } from './styled-config/ThemeProvider';
import VehicleList from './components/VehicleList';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <VehicleList />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
