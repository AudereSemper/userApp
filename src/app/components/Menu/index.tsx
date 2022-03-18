import React from 'react';
import CustomButton from 'src/app/components/CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { replace } from 'connected-react-router';
import MenuContainer from './styles';
import MenuVoices from './constants';
import Voice from './types';

const voices = [
  MenuVoices.home,
  MenuVoices.myCharacters,
  MenuVoices.about,
];

export default function Menu() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const location = useSelector((state: any) => state.router.location);

  const menuAction = (page: {}) => {
    dispatch(replace(`/${page}`));
  };

  const currentPath = location.pathname;

  return (
    <MenuContainer>
      {voices.map(({ text, value, regexp }: Voice) => (
        <CustomButton
          key={text}
          text={t(text)}
          // textColor={regexp.test(currentPath) ? 'white' : 'black'}
          selected={regexp.test(currentPath)}
          onClick={() => menuAction(value)}
        />
      ))}
    </MenuContainer>
  );
}
