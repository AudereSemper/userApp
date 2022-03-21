import React from 'react';
import Card from '../Card';
import ListProps from './type';

const List = React.memo(({ list, isRowList }: ListProps) => (
  <>
    {list && list.map((user: any) => (
      <Card key={user.firstName} userInfo={user} isRowCard={isRowList} />
    ))}
  </>
));

export default List;
