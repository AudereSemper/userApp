import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import List from 'src/app/components/List';
import { replace } from 'connected-react-router';
import CustomButton from 'src/app/components/CustomButton';
import {
  StyledHomeContainer,
  StyledListContainer,
  StyledRow,
} from './styles';

const Home = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const usersList = [];
  const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));

  const GoToaddNewUser = () => {
    dispatch(replace('/add_new'));
  };

  const rowsWithContent: any = chunk(usersList, 3);

  return (
    <>
      <CustomButton
        text={t('homePage.new_user')}
        bgColor="white"
        border="1px solid black"
        onClick={GoToaddNewUser}
        customFontSize="1rem"
      />
      <StyledHomeContainer>
        <StyledListContainer>
          {
            rowsWithContent.map(
              (singleRow) => (
                <StyledRow key={singleRow[0].name}>
                  <List list={singleRow} />
                </StyledRow>
              ),
            )
          }
        </StyledListContainer>
      </StyledHomeContainer>
    </>
  );
};

export default Home;
