import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Rooms from './Rooms';
import axios from 'axios';

const Feed = ({ darkMode, toggleDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('Rooms');
  const [rooms, setRooms] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://airbnb-listings.p.rapidapi.com/v2/listingstatus',
        params: {
          id: '619966061834034729',
          year: '2023',
          month: '1'
        },
        headers: {
          'X-RapidAPI-Key': '7d6b9f54bbmsh7b8d43aa8520697p14e477jsn818a9786fb82',
          'X-RapidAPI-Host': 'airbnb-listings.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setRooms(response.data.items);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }, background: darkMode ? '#333' : '#fff' }}>
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <Typography variant='body2' sx={{ mt: 1.5, color: '#eb5757' }}>
          Copyright © 2023 TED Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90v', flex: 2, background: darkMode ? '#333' : '#fff' }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: darkMode ? 'white' : '#eb5757' }}>
          {selectedCategory} 
        </Typography>

        <Rooms rooms={rooms} />
      </Box>
    </Stack>
  );
};

export default Feed;
