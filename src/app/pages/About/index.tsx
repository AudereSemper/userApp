import React from 'react';
import { useSelector } from 'react-redux';
import {
  MainContainer,
  MainTitle,
  Paragraph,
} from '../Curiosity/styles';

const About = () => {
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';

  return (
    <MainContainer>
      <MainTitle isDarkTheme={isDarkTheme}>
        About
      </MainTitle>
      <Paragraph isDarkTheme={isDarkTheme}>
        Rick and Morty è una serie animata statunitense, creata da Justin Roiland e Dan Harmon, per Adult Swim.
        La serie, considerata di genere cosmic horror, ha le sue origini in una parodia animata di Ritorno al futuro,
        creata da Roiland per il festival dei cortometraggi Channel 101
        Rick è uno scienziato che si è trasferito dalla famiglia di sua figlia Beth,
        una cardiochirurga per cavalli. Passa la maggior parte del suo tempo inventando
        vari gadget high-tech e portando con sé il giovane nipote Morty - e successivamente
        anche la nipote Summer - in pericolose e fantastiche avventure attraverso il loro e altri
        universi paralleli, alla scoperta degli orrori e delle meraviglie che li popolano.
      </Paragraph>
    </MainContainer>
  );
};

export default About;
