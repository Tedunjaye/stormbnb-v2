import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory, darkMode }) => {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' }
      }}
    >
      {categories.map((category) => (
        <button
          className='category-btn'
          onClick={() => setSelectedCategory(category.name)}
          style={{
            backgroundColor: category.name === selectedCategory && '#FFF',
            color: darkMode ? '#eb5757' : '#eb5757',
          }}
        >
          <span
            style={{ color: category.name === selectedCategory ? '#eb5757' : darkMode ? '#eb5757' : 'whitesmoke', marginRight: '10px' }}
          >
            {category.icon}
          </span>
          <span style={{ opacity: category.name === selectedCategory ? '1' : '0.6' }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
