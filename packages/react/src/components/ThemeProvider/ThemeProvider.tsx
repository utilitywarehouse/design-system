import * as React from 'react';
import { ThemeProvider as MuiThemeProvider, Theme } from '@mui/material/styles';
import merge from 'lodash.merge';
import { theme as defaultTheme } from '../theme';

export interface ThemeProviderProps {
  theme?: Partial<Theme>;
  children?: React.ReactNode;
}

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const themeWithOverrides = merge(defaultTheme, theme) as Theme;
  return <MuiThemeProvider theme={themeWithOverrides}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
