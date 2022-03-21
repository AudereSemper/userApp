import React from 'react';
import Card from '../Card';
import ListProps from './type';

const List = React.memo(({ list }: ListProps) => (
  <>
    {list && list.map((user: any) => (
      <Card key={user.id} userInfo={user} />
    ))}
  </>
));

export default List;
