import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage } from '@hookform/error-message';
import { MainTitle } from 'src/app/components/Card/styles';
import CustomButton from 'src/app/components/CustomButton';
import { useForm } from 'react-hook-form';
import List from 'src/app/components/List';
import { setIsEdit, setRetryAction, tryAddUser } from './addNewReducer';
import {
  StyledFormContainer,
  AddNewContentRow,
  Column,
  ButtonsContainer,
} from './style';

const string = 'Add new user';
const blackBorder = '1px solid black';
const whiteBorder = '1px solid white';

const AddNewUser = () => {
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';
  const usersList = useSelector((state: any) => state.addNewSliceReducer.users);
  const failsCounter = useSelector((state: any) => state.addNewSliceReducer.failsCounter);
  const retryAction = useSelector((state: any) => state.addNewSliceReducer.retryAction);
  const userToAdd = useSelector((state: any) => state.addNewSliceReducer.userToAdd);
  const editAction = useSelector((state: any) => state.addNewSliceReducer.editAction);
  const { isEdit, userToEdit } = editAction;
  const dispatch = useDispatch();
  const border = isDarkTheme ? whiteBorder : blackBorder;
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({});

  const onSubmit = (data) => {
    dispatch(tryAddUser(data));
    setValue('firstName', '');
  };

  const handleIsEdit = () => {
    dispatch(setIsEdit({ isEdit: false }));
    setValue('firstName', '');
  };

  useEffect(() => {
    if (isEdit || retryAction) {
      const value = isEdit ? userToEdit : '';
      const retriedName = retryAction ? userToAdd.firstName : '';
      console.log('🚀 ~ file: index.tsx ~ line 53 ~ useEffect ~ retriedName', retriedName);
      const retriedImage = retryAction ? userToAdd.image : '';
      setValue('firstName', value || retriedName);
      if (retryAction) {
        setValue('image', retriedImage);
      }
    }
  }, [userToEdit, retryAction, failsCounter]);

  useEffect(() => {
    if (failsCounter >= 2) {
      dispatch(setRetryAction(true));
    } else {
      dispatch(setRetryAction(false));
    }
  }, [failsCounter]);

  return (
    <>
      <AddNewContentRow>
        <Column>
          <MainTitle isDarkTheme={isDarkTheme}>
            { isEdit ? t('editActionTitle') + userToEdit : string }
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
              <ButtonsContainer>
                <CustomButton
                  text={t('save')}
                  border={border}
                  onClick={handleSubmit(onSubmit)}
                  customFontSize="1rem"
                />
                {
                  isEdit && (
                  <CustomButton
                    text={t('cancel')}
                    border={border}
                    onClick={handleIsEdit}
                    customFontSize="1rem"
                  />
                  )
                }
                {
                  retryAction && (
                    <>
                      <CustomButton
                        text={t('retry')}
                        border={border}
                        bgColor="red"
                        onClick={handleSubmit(onSubmit)}
                        customFontSize="1rem"
                      />
                    </>
                  )
                }
              </ButtonsContainer>
              {
                retryAction && (
                  <>
                    <p>Something went wrong.</p>
                    <p>By pressing retry you are going to try to insert again the last user:</p>
                    <p>{userToAdd.firstName}</p>
                  </>
                )
              }
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
