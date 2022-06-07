import React, { Fragment } from 'react';
import { List, Divider } from '@mui/material';
import UserItem from './UserItem';
import { gql, useQuery } from '@apollo/client';
import { UserData } from '../../Interfaces/user';

const USERS = gql`
  query GetUsers {
    users {
      id
      name
      bio
    }
  }
`;

const UserList = () => {
  const { data } = useQuery<{users: UserData[]}>(USERS);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {data?.users.map((user, index) =>
        <Fragment key={index}>
          <UserItem key={index} user={user} />
          <Divider variant="inset" component="li" />
        </Fragment>
      )}
    </List>
  );
};

export default UserList;
