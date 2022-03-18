import React from 'react';
import { useSelector } from 'react-redux';
import {
  MainContainer,
  MainTitle,
  Paragraph,
} from './styles';

const Curiosity = () => {
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';

  return (
    <MainContainer>
      <MainTitle isDarkTheme={isDarkTheme}>
        1. Dov’è Wally?
      </MainTitle>
      <Paragraph isDarkTheme={isDarkTheme}>
        Nell’episodio “Total Rickall“, la scena con tutti i personaggi creati dai
        parassiti alieni è un omaggio alla  serie di libri per bambini Dov’è Wally?,
        popolarissimo personaggio nei Paesi anglofoni.
      </Paragraph>
      <MainTitle isDarkTheme={isDarkTheme}>
        2. Adventure Time
      </MainTitle>
      <Paragraph isDarkTheme={isDarkTheme}>
        Il negozio di Mr. Needful è una citazione al romanzo “Cose Preziose” di Stephen King.
        All’interno del negozio, troviamo anche il Guantone dell’Eroe utilizzato da Finn,
        protagonista del cartone Adventure Time.
      </Paragraph>
      <MainTitle isDarkTheme={isDarkTheme}>
        3. Simpon crossover
      </MainTitle>
      <Paragraph isDarkTheme={isDarkTheme}>
        Nonno e nipote sono  stati ospiti dell’apertura della sigla dei
        Simposon nell’ultimo episodio della 26ma stagione. II siparietto ha
        il primato di essere la più lunga “couch gag” della storia dello show.
      </Paragraph>
      <MainTitle isDarkTheme={isDarkTheme}>
        4. Footloose
      </MainTitle>
      <Paragraph isDarkTheme={isDarkTheme}>
        Morty Jr., il figlio di Morty, nella sua “fase adolescenziale” si esibisce
        in un ballo stile Footloose, l’iconico film degli anni Ottanta con protagonista
        Kevin Bacon.
      </Paragraph>
      <MainTitle isDarkTheme={isDarkTheme}>
        5. Thriller
      </MainTitle>
      <Paragraph isDarkTheme={isDarkTheme}>
        Nell’ottavo episodio della prima stagione “Vite alternative”,
        durante lo zapping vediamo un balletto di “telefonini morti viventi”
        ispirato a Thriller di Michael Jackson.
      </Paragraph>
    </MainContainer>
  );
};

export default Curiosity;
