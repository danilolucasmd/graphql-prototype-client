import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import { UserData } from '../../../Interfaces/user';

interface UserItemProps {
  user: UserData;
}

const UserItem = ({ user }: UserItemProps) => {
  return (
    <ListItem alignItems="flex-start">
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
