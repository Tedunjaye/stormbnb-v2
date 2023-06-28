import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const RoomCard = ({ room }) => {
  const { name, description } = room;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
