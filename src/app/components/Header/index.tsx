import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalStyles, lightTheme, darkTheme } from 'src/assets/theme';
import { switchTheme } from 'src/assets/themeReducer';
import LanguageSelector from '../LanguageSelector';
import CustomSwitch from '../CustomSwitch/index';
import { NavbarContainer, SwitchContainer } from './styles';
import Navbar from '../Menu';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: any) => state.themeSliceReducer.theme);
  const [isToggled, setIsToggled] = useState(false);
  const themeSelected = currentTheme === 'light' ? lightTheme : darkTheme;
  const themeToggler = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  const handleThemeToggler = useCallback((e) => {
    const switchedTheme = currentTheme === 'light' ? 'dark' : 'light';
    dispatch(switchTheme(switchedTheme));
    setIsToggled(e.target.checked);
  },
  [themeToggler]);

  return (
    <ThemeProvider theme={themeSelected}>
      <GlobalStyles />
      <NavbarContainer>
        <Navbar />
        <SwitchContainer>
          <LanguageSelector />
          <CustomSwitch
            id="test-switch"
            toggled={isToggled}
            onChange={handleThemeToggler}
          />
        </SwitchContainer>
      </NavbarContainer>
    </ThemeProvider>
  );
};

export default Header;
