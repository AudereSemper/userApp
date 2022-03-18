import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { changeLanguage } from 'src/i18n';
import { LanguageSelectorContainer, countryFlagsStyle } from './styles';
import languages from './constants';

const LanguageSelector = () => {
  const handleChangeLanguage = (languageCode) => {
    changeLanguage(languageCode.toLowerCase());
  };

  return (
    <LanguageSelectorContainer>
      {
        languages.map(({
          languageCode,
        }) => (
          <button type="submit" key={languageCode} onClick={() => handleChangeLanguage(languageCode)}>
            <ReactCountryFlag
              countryCode={languageCode}
              svg
              style={countryFlagsStyle}
            />
          </button>
        ))
      }
    </LanguageSelectorContainer>
  );
};

export default LanguageSelector;
