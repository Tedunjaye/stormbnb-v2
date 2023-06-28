import React, { useState } from 'react';
import { Box, Stack, Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Navbar({ darkMode, toggleDarkMode}) {

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background: darkMode ? '#333' : '#fff',
        top: 0,
        justifyContent: 'space-between',
        border: '1px solid #e3e3e3',
      }}
    >
      <Box>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }} className="logo-heading">
          <img src="https://o.remove.bg/downloads/1739ad32-de3c-4ef1-b568-c9d3a09c3a58/s4k6_pdjv_220810-removebg-preview.png" alt="logo" height={75} className="logo" />
          <span className="link-text">stormbnb</span>
        </Link>
      </Box>

      <SearchBar />

      <Box style={{ display: 'flex', alignItems: 'center' }} sx={{ color: darkMode ? 'white' : '#eb5757' }}>
        <h6>Light</h6>
        <Switch checked={darkMode} onChange={toggleDarkMode} color="primary" />
        <h6>Dark</h6>
      </Box>
    </Stack>
  );
}

export default Navbar;
