import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { ErrorMessage } from '@hookform/error-message';
import { MainTitle } from 'src/app/components/Card/styles';
import CustomButton from 'src/app/components/CustomButton';
import { useForm } from 'react-hook-form';
import List from 'src/app/components/List';
import {
  setIsEdit,
  editUser,
  setRetryAction,
  tryAddUser,
} from './addNewReducer';
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
  const routerlocation = useSelector((state: any) => state.router.location);
  const isUserDetail = routerlocation.pathname.includes('/user_detail');
  const usersList = useSelector((state: any) => state.addNewSliceReducer.users);
  const failsCounter = useSelector((state: any) => state.addNewSliceReducer.failsCounter);
  const retryAction = useSelector((state: any) => state.addNewSliceReducer.retryAction);
  const userToAdd = useSelector((state: any) => state.addNewSliceReducer.userToAdd);
  const editAction = useSelector((state: any) => state.addNewSliceReducer.editAction);
  const { isEdit, userToEdit } = editAction;
  const dispatch = useDispatch();
  const editUserList = usersList.filter((user) => user.firstName !== routerlocation?.state?.user);
  console.log('🚀 ~ file: index.tsx ~ line 39 ~ AddNewUser ~ editUserList', editUserList);
  const border = isDarkTheme ? whiteBorder : blackBorder;
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    setError,
  } = useForm({});

  const onSubmit = (data) => {
    const userAlreadyExists = usersList.find((user) => user.firstName === data.firstName);
    if (userAlreadyExists && !isEdit) {
      setError('firstName', {
        type: 'userAlreadyExist',
        message: 'Sorry, the user already exists',
      });
      return;
    }
    if (isEdit) {
      const listUpdated = usersList.map((user) => {
        if (user.firstName === userToEdit) {
          return {
            firstName: data.firstName,
            image: data.image,
          };
        }
        return user;
      });
      dispatch(editUser(listUpdated));
      dispatch(setIsEdit({ isEdit: false }));
      setValue('firstName', '');
      setValue('image', '');
      return;
    }
    dispatch(tryAddUser(data));
    setValue('firstName', '');
    setValue('image', '');
  };

  useEffect(() => {
    if (isEdit || retryAction) {
      const value = isEdit ? userToEdit : '';
      const retriedName = retryAction ? userToAdd.firstName : '';
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

  const handleDelete = () => {
    dispatch(setIsEdit({ isEdit: false }));
    setValue('firstName', '');
    setValue('image', '');
  };

  const handleSetAddFriends = () => {
    const id = routerlocation.location?.state?.id ? routerlocation.location.state.i + 1 : 0;
    dispatch(push({
      pathname: `/modal_layer/${id}`,
      // eslint-disable-next-line no-restricted-globals
      state: {
        background: {
          hash: '',
          key: 'y2lpta',
          pathname: '/add_new',
          search: '',
          state: undefined,
        },
      },
    }));
  };

  return (
    <>
      {isUserDetail && (
        <h1 style={{ textAlign: 'center' }}>
          user selected:
          {routerlocation?.state?.user}
        </h1>
      )}
      <AddNewContentRow>
        <Column>
          <MainTitle isDarkTheme={isDarkTheme}>
            { isEdit ? t('editActionTitle') + userToEdit : string }
          </MainTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledFormContainer>
              <label htmlFor="firstName">{t('firstName')}</label>
              <input {...register('firstName', { required: 'The Field FirstName is requireds' })} />
              <ErrorMessage style={{ color: 'red' }} errors={errors} name="firstName" as="p" />
              <label htmlFor="image">{t('imageUrl')}</label>
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
                    onClick={handleDelete}
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
          <CustomButton
            text={t('addNewFriends')}
            border={border}
            bgColor="red"
            onClick={handleSetAddFriends}
            customFontSize="1rem"
          />
          <List list={isUserDetail ? editUserList : usersList} isRowList />
        </Column>
      </AddNewContentRow>
    </>
  );
};

export default AddNewUser;
