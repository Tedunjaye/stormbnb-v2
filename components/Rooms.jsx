import { Box, Stack } from '@mui/material'
import React from 'react'
import ApartmentCard from './ApartmentCard'
import RoomCard from './RoomCard'
import data from '../src/data'

const Rooms = ({ rooms, direction }) => {
   //temporary data, since i can't fetch data properly.
   const roomCards = data.map(item => {
    return (
      <RoomCard
        key={item.id}
        item={item}
        
      />
    )
  })

  // if(!rooms?.length) return 'Loading...'
  
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={9} ml={4}>
      {roomCards}
    </Stack>
  )
}

export default Rooms