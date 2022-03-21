import React from 'react';
import { useSelector } from 'react-redux';
import IUser from './type';
import MainInfo from './Subcomponents/MainInfo';
import { CardContainer, RowContainer } from './styles';

const Card = ({ userInfo }: IUser) => {
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';

  const {
    image,
    name,
    isRowCard,
  } = userInfo;

  return (
    <>
      {
        !isRowCard ? (
          <CardContainer isDarkTheme={isDarkTheme}>
            <MainInfo
              image={image}
              name={name}
            />
          </CardContainer>
        ) : (
          <RowContainer isDarkTheme={isDarkTheme}>
            <div>editButton</div>
            <div>image</div>
            <div>name</div>
          </RowContainer>
        )
      }
    </>
  );
};

export default Card;
