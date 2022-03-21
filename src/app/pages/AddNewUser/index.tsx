import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage } from '@hookform/error-message';
import { MainTitle } from 'src/app/components/Card/styles';
import CustomButton from 'src/app/components/CustomButton';
import { useForm } from 'react-hook-form';
import List from 'src/app/components/List';
import { addUser } from './addNewReducer';
import { StyledFormContainer, AddNewContentRow, Column } from './style';

const string = 'Add new user';
const blackBorder = '1px solid black';
const whiteBorder = '1px solid white';

const AddNewUser = () => {
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';
  const usersList = useSelector((state: any) => state.addNewSliceReducer.users);
  const dispatch = useDispatch();
  const border = isDarkTheme ? blackBorder : whiteBorder;
  const { t } = useTranslation();
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch(addUser(data));
  };

  return (
    <>
      <AddNewContentRow>
        <Column>
          <MainTitle isDarkTheme={isDarkTheme}>
            {string}
          </MainTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledFormContainer>
              <label htmlFor="firstName">{t('firstName')}</label>
              <input {...register('firstName', { required: true })} />
              <label htmlFor="image">{t('imageUrl')}</label>

              <ErrorMessage
                errors={errors}
                name="singleErrorInput"
                render={() => <p>errore</p>}
              />
              <input {...register('image')} />
              <CustomButton
                text={t('save')}
                border={border}
                onClick={handleSubmit(onSubmit)}
                customFontSize="1rem"
              />
            </StyledFormContainer>
          </form>
        </Column>
        <Column>
          <MainTitle isDarkTheme={isDarkTheme}>
            {t('friends')}
          </MainTitle>
          <List list={usersList} isRowList />
        </Column>
      </AddNewContentRow>
    </>
  );
};

export default AddNewUser;
