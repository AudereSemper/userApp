import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setIsEdit, setNewUserList } from 'src/app/pages/AddNewUser/addNewReducer';
import { push } from 'connected-react-router';
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
  const usersList = useSelector((state: any) => state.addNewSliceReducer.users);
  console.log('🚀 ~ file: index.tsx ~ line 21 ~ Card ~ usersList', usersList);
  const dispatch = useDispatch();
  const {
    image,
    firstName,
  } = userInfo;
  const { t } = useTranslation();
  const avatar = image.length <= 0 ? placeHolderAvatar : image;

  const editUser = (userToEdit) => {
    dispatch(setIsEdit({ isEdit: true, userToEdit }));
  };

  const goToUser = (name: string) => {
    // eslint-disable-next-line no-restricted-globals
    const route = location.pathname.includes('/user_detail') ? name : `user_detail/${name}`;
    dispatch(push({
      pathname: route,
      state: {
        user: name,
      },
    }));
  };

  const handleDelete = (name: string) => {
    const removeIndex = usersList.map((item) => item.firstName).indexOf(name);
    const result = [...usersList.slice(0, removeIndex), ...usersList.slice(removeIndex + 1)];
    console.log('🚀 ~ file: index.tsx ~ line 48 ~ handleDelete ~ newArray', result);
    dispatch(setNewUserList(result));
  };

  return (
    <>
      {
        !isRowCard ? (
          <CardContainer key={firstName} isDarkTheme={isDarkTheme}>
            <MainInfo
              image={avatar}
              name={firstName}
            />
          </CardContainer>
        ) : (
          <RowContainer key={firstName} isDarkTheme={isDarkTheme}>
            <CustomButton
              text={t('edit')}
              onClick={() => editUser(firstName)}
            />
            <CustomButton
              text={t('delete')}
              onClick={() => handleDelete(firstName)}
            />
            <Name isLink onClick={() => goToUser(firstName)} isDarkTheme={isDarkTheme}>
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
