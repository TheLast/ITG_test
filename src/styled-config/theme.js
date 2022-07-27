/* eslint-disable prefer-destructuring */
const breakpoints = ['40em', '52em', '64em', '80em'];
const space = [0, 4, 8, 16, 20, 32, 64, 128];
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];
const colors = {
  dark: '#0d121c',
  gray: '#4b5055',
  light: '#eef1f1'
};

[breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl] = breakpoints;

export const theme = {
  breakpoints,
  space,
  fontSizes,
  colors
};
