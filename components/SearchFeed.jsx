import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';
import Rooms from './Rooms';

const SearchFeed = () => {
  const [rooms, setRooms] = useState([]);
  const { searchTerm } = useParams();
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          params: {
            maxResults: '50',
            place: searchTerm,
          },
          headers: {
            'X-RapidAPI-Key': '7d6b9f54bbmsh7b8d43aa8520697p14e477jsn818a9786fb82',
            'X-RapidAPI-Host': 'airbnb-listings.p.rapidapi.com',
          },
        };

        const data = await fetchFromAPI('v2/listingsByGeoRef', options);
        setRooms(data.items);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90v', flex: 2, background: darkMode ? '#333' : '#fff' }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'gray' }}>
        Showing Results for: rooms in <span style={{ color: '#F31503' }}>{searchTerm}</span> 
      </Typography>
      <Rooms rooms={rooms} />
    </Box>
  );
};

export default SearchFeed;
