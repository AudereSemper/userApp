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

  startFetchingRickAndMortyCharacter,
  setIsLoadingStatus,
} from './homeReducer';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.homeSliceReducer.loading);
  const rickAndMortyCharacterData = useSelector((state: any) => state.homeSliceReducer.data);
  const { results } = rickAndMortyCharacterData;
  const resultsReady = results !== undefined;
  const Loading = isLoading && rickAndMortyCharacterData.info && rickAndMortyCharacterData.results;

  const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));

  useEffect(() => {
    dispatch(setIsLoadingStatus(true));
    dispatch(startFetchingRickAndMortyCharacter());
  }, []);

  const rowsWithContent: any = resultsReady && chunk(results, 3);

  return (
    <>
      {
        Loading ? <Loader />
          : (
            <StyledHomeContainer>
              <StyledListContainer>
                {
                  resultsReady ? rowsWithContent.map(
                    (singleRow) => (
                      <StyledRow key={singleRow[0].name}>
                        <List list={singleRow} />
                      </StyledRow>
                    ),
                  ) : <Loader />
                }
              </StyledListContainer>
            </StyledHomeContainer>
          )
      }
    </>
  );
};

export default Home;
