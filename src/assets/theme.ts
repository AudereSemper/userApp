import { createGlobalStyle } from 'styled-components';
import IThemeProps from './types';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: IThemeProps) => theme.body};
    color: ${({ theme }: IThemeProps) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }`;

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
};

export const darkTheme = {
  body: '#000',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
};
