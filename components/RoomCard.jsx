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
        <img src="src/s4k6_pdjv_220810-removebg-preview.png" className="card--star" />
        <span>{item.rating}</span>
        <span className="gray">({item.city})</span>
      </div>
      <span className="gray">{item.type} . {item.beds} beds</span>
      <p className="card-title">{item.title}</p>
    </Stack>
  );
};

export default RoomCard;
