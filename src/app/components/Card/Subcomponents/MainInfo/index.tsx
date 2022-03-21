import React from 'react';
import { useSelector } from 'react-redux';
import {
  Shape,
  Image,
  MainTitle,
} from '../../styles';

const MainInfo = ({
  image,
  name,
}) => {
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';
  return (
    <>
      <Shape isDarkTheme={isDarkTheme}>
        <Image isDarkTheme={isDarkTheme} imageUrl={image} />
      </Shape>
      <MainTitle isDarkTheme={isDarkTheme}>
        {name}
      </MainTitle>
    </>
  );
};

export default MainInfo;
