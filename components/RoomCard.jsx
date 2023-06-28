import React from 'react';
import { Card, CardContent, Stack, Typography } from '@mui/material';

const RoomCard = ({ item, selectedCategory }) => {
  let badgeText;
  if (item.superHost === true) {
    badgeText = 'Super Host';
  } else {
    badgeText = 'SOLD Out';
  }

  return (
    <Stack className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={item.photo} className="card--image" />
      <div className="card--stats">
        <img src="https://www.freepik.com/free-vector/3d-metal-star-isolated_31747695.html" className="card--star" />
        <span>{item.rating}</span>
        <span className="gray">({item.city})</span>
      </div>
      <span className="gray">{item.type} . {item.beds} beds</span>
      <p className="card-title">{item.title}</p>
    </Stack>
  );
};

export default RoomCard;
