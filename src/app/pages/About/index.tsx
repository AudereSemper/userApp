import React from 'react';
import { useSelector } from 'react-redux';
import {
  MainContainer,
  Paragraph,
} from '../Curiosity/styles';

const About = () => {
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';

  return (
    <MainContainer>
      <Paragraph isDarkTheme={isDarkTheme}>
        Ciao!
        Nice to meet you, my name is Federico. I&apos;m a passionate developer
        who love everything about software development.
        i started playing with computer in early times
        ( when i was pretty young i was playing with my father&apos;s computer),
        i can still remember clearly the happiness when i setup my first mame to emulate the old arcade games.
        i&apos;m a big fan of the open source community, i&apos;m always trying to learn new things
        and i&apos;m always trying to improve
        my skills.
      </Paragraph>
    </MainContainer>
  );
};

export default About;
