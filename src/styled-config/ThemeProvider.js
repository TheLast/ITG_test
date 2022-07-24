import React from 'react';
import {
  withTheme,
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components';
import { theme } from './theme';

const GlobalStyle = withTheme(createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
    font-size: 16px;
    font-family: Montserrat, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`);

export const CustomThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);
