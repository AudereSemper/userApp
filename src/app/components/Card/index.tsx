import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import IUser from './type';
import MainInfo from './Subcomponents/MainInfo';
import CustomButton from '../CustomButton';
import {
  CardContainer,
  RowContainer,
  SmallImage,
  Name,
} from './styles';

const placeHolderAvatar = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';

const Card = ({ userInfo, isRowCard }: IUser) => {
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';
  const {
    image,
    firstName,
  } = userInfo;
  const { t } = useTranslation();
  const avatar = image.length <= 0 ? placeHolderAvatar : image;

  const editUser = (userToEdit) => {
    console.log('🚀 ~ file: index.tsx ~ line 26 ~ editUser ~ userToEdit', userToEdit);
  };

  return (
    <>
      {
        !isRowCard ? (
          <CardContainer key={firstName} isDarkTheme={isDarkTheme}>
            <MainInfo
              image={image}
              name={firstName}
            />
          </CardContainer>
        ) : (
          <RowContainer key={firstName} isDarkTheme={isDarkTheme}>
            <CustomButton
              text={t('edit')}
              // textColor={regexp.test(currentPath) ? 'white' : 'black'}
              onClick={() => editUser(firstName)}
            />
            <Name isDarkTheme={isDarkTheme}>
              {firstName}
            </Name>
            <SmallImage isDarkTheme={isDarkTheme} imageUrl={avatar} />
          </RowContainer>
        )
      }
    </>
  );
};

export default Card;
