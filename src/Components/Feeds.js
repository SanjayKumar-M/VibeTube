import React from 'react'
import { useState,useEffect } from 'react'
import { Box,Typography,Stack } from '@mui/material'
const Feeds = () => {
  return (
    <Stack sx={{sx:'column', md:'row'}}>
      <Box sx={{height:{sx: 'auto', md:'92vh'},borderRight: '1px solid blue',px:{sx:0,md:2}}}>
        <Typography className='copyright' variant='body2' sx={{mt:1.5, color:'white'}}>
          This is Sidebar
        </Typography>

      </Box>

    </Stack>
  )
}

export default Feeds