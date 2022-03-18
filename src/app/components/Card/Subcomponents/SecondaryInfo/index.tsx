import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { startFetchingRickAndMortyEpisode, resetEpisodeReducer } from 'src/app/pages/Home/homeReducer';
import {
  SubTitle,
  StyledUnorderedList,
  StyledListItem,
  TextContainer,
} from '../../styles';

const SecondaryInfo = ({
  status,
  gender,
  origin,
  episode,
}) => {
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';
  const dispatch = useDispatch();
  const episodes = useSelector((state: any) => state.homeSliceReducer.episode);

  useEffect(() => {
    dispatch(resetEpisodeReducer());
    episode.forEach(
      (singleEpisode) => {
        const url = singleEpisode.substring(singleEpisode.lastIndexOf('/') + 1);
        dispatch(startFetchingRickAndMortyEpisode(url));
      },
    );
  }, [dispatch]);

  return (
    <>
      <TextContainer>
        <SubTitle isDarkTheme={isDarkTheme}>
          Status:
          {' '}
          {status}
        </SubTitle>
        <SubTitle isDarkTheme={isDarkTheme}>
          Gender:
          {' '}
          {gender}
        </SubTitle>
        <SubTitle isDarkTheme={isDarkTheme}>
          Origin:
          {' '}
          {origin.name}
        </SubTitle>
        <SubTitle isDarkTheme={isDarkTheme} data-tip data-for="registerTip" isBold>
          Hover here for episode
        </SubTitle>

        <ReactTooltip id="registerTip" place="top" effect="solid">
          <StyledUnorderedList>
            {episodes && episodes.map((episodeInfo) => <StyledListItem key={episodeInfo.id}>{episodeInfo.name}</StyledListItem>)}
          </StyledUnorderedList>
        </ReactTooltip>
      </TextContainer>
    </>
  );
};

export default SecondaryInfo;
