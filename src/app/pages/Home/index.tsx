import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from 'src/app/components/List';
import Loader from '../../components/Loader/index';
import {
  StyledHomeContainer,
  StyledListContainer,
  StyledRow,
} from './styles';
import {
  startFetchingUser,
  setIsLoadingStatus,
} from './homeReducer';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.homeSliceReducer.loading);
  const Loading = isLoading;
  const results = [];
  const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));

  useEffect(() => {
    dispatch(setIsLoadingStatus(true));
    dispatch(startFetchingUser());
  }, []);

  const rowsWithContent: any = chunk(results, 3);

  return (
    <>
      {
        Loading ? <Loader />
          : (
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
          )
      }
    </>
  );
};

export default Home;
