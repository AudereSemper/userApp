import React from 'react';
import { useSelector } from 'react-redux';
import IUser from './type';
import MainInfo from './Subcomponents/MainInfo';
import { CardContainer } from './styles';

const Card = ({ userInfo }: IUser) => {
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';

  const {
    image,
    name,
  } = userInfo;

  return (
    <>
      <CardContainer isDarkTheme={isDarkTheme}>
        <MainInfo
          image={image}
          name={name}
        />
      </CardContainer>
    </>
  );
};

export default Card;
