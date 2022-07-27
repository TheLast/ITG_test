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

  #root *, #root *:before, #root *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
    font-size: 16px;
    color: ${theme.colors.gray};
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
