import { Box, Stack } from '@mui/material'
import React from 'react'
import ApartmentCard from './ApartmentCard'
import RoomCard from './RoomCard'

const Rooms = ({ rooms, direction }) => {
  if(!rooms?.length) return 'Loading...'
  
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
      {Rooms?.map((item, id) => (
        <Box key={id}>
          {item.id.roomId && <RoomCard room={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Rooms