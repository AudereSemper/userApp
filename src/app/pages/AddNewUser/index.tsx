import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage } from '@hookform/error-message';
import { MainTitle } from 'src/app/components/Card/styles';
import CustomButton from 'src/app/components/CustomButton';
import { useForm } from 'react-hook-form';
import List from 'src/app/components/List';
import { useModals } from '@mattjennings/react-modal-stack';
import { push } from 'connected-react-router';

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
import Modal from '../../components/Modal';

const string = 'Add new user';
const blackBorder = '1px solid black';
const whiteBorder = '1px solid white';

type AddNewUserProps = {
    open?: boolean,
    close?: () => void
}

const AddNewUser = (props: AddNewUserProps) => {
  const { open } = props;
  const {
    openModal, closeAllModals, closeModal, stack,
  } = useModals();
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';
  const routerlocation = useSelector((state: any) => state.router.location);
  const depth: string | '0' = routerlocation.query.depth || '0';
  const isUserDetail = routerlocation.pathname.includes('/user_detail');
  const usersList = useSelector((state: any) => state.addNewSliceReducer.users);
  const failsCounter = useSelector((state: any) => state.addNewSliceReducer.failsCounter);
  const retryAction = useSelector((state: any) => state.addNewSliceReducer.retryAction);
  const userToAdd = useSelector((state: any) => state.addNewSliceReducer.userToAdd);
  const editAction = useSelector((state: any) => state.addNewSliceReducer.editAction);
  const { isEdit: isEditing, userToEdit } = editAction;
  const dispatch = useDispatch();
  const editUserList = usersList.filter((user) => user.firstName !== routerlocation?.state?.user);
  const border = isDarkTheme ? whiteBorder : blackBorder;
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    setError,
  } = useForm({});

  const isModal = open !== undefined;

  const isEdit = !isModal && isEditing;

  const openOneModal = () => {
    let depthNumber = parseInt(depth || '0', 10);
    dispatch(push(`/add_new?depth=${depthNumber += 1}`));
    openModal(AddNewUser);
  };

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
    if (isModal) openOneModal();
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

  const fetchStackInformation = () => {
    let str = '';
    for (let i = 0; i < stack.length; i += 1) {
      str += 'create new user > ';
    }
    return str.substring(0, str.length - 3);
  };

  const formContent = (
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
            onClick={() => openOneModal()}
            customFontSize="1rem"
          />
          <List list={isUserDetail ? editUserList : usersList} isRowList />
        </Column>
      </AddNewContentRow>
    </>

  );

  useEffect(() => {
    if (!isModal && stack?.length !== parseInt(depth, 10)) {
      const depthNumber = parseInt(depth, 10);
      closeAllModals();
      for (let i = 0; i < depthNumber; i += 1) {
        openModal(AddNewUser);
      }
    }
  }, [closeAllModals, depth, isModal, openModal, stack?.length]);

  const closeOneModal = () => {
    let depthNumber = parseInt(depth || '0', 10);
    dispatch(push(`/add_new?depth=${depthNumber -= 1}`));
    closeModal();
  };

  if (open === false) {
    return null;
  }

  if (isModal) {
    return (
      <Modal
        onClose={() => closeOneModal()}
        stackInformation={fetchStackInformation()}
      >
        {formContent}
      </Modal>
    );
  }
  return formContent;
};

export default AddNewUser;
