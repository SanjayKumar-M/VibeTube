import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React from 'react'

const SearchBar = () => {
  return (
    <Paper component='form' onSubmit={() =>{}} sx={{borderRadius:30,border: '1px solid ', pl: 2,boxShadow: 'none',mr:{sm:5}}}>
        <input className='search-bar' placeholder='Search any videos...' value="" onChange={() =>{}} style={{borderColor:'transparent' }} />
        <IconButton type='submit' sx={{p:'10px' ,color:'burlywood'}}><Search /></IconButton>
        
    </Paper>
  )
}

export default SearchBar