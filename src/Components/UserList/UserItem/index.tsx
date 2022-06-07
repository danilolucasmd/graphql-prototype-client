import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import { UserData } from '../../../Interfaces/user';
import { gql, useApolloClient } from '@apollo/client';

interface UserItemProps {
  user: UserData;
}

const UserItem = ({ user }: UserItemProps) => {
  const client = useApolloClient();

  const handleClick = async () => {
    const remoteUser = await client.query({
      query: gql`
        query GetUser($userId: String!) {
          user(id: $userId) {
            name
            bio
          }
        }
      `,
      variables: {
        userId: user.id,
      },
    });

    console.log(remoteUser.data.user);
  };

  return (
    <ListItem alignItems="flex-start" button onClick={handleClick}>
      <ListItemAvatar>
        <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={user.name}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {user.name}
            </Typography>
            {' - '} {user.bio}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default UserItem;
