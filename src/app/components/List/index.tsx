import React from 'react';
import Card from '../Card';
import ListProps from './type';

const List = React.memo(({ list }: ListProps) => (
  <>
    {list && list.map((character: any) => (
      <Card key={character.id} characterInfo={character} />
    ))}
  </>
));

export default List;
