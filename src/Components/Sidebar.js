import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../Utils/Constants'

const selected = 'New'

const Sidebar = () => {
  return (
    <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button className="category-btn" style={{background:category.name === selected && 'red',color: 'white'}} key={category.name}>
        <span style={{marginRight: 15}}>
          {category.icon}
        </span>
        <span style={{opacity: category.name === selected ? '1' : '0.9'}}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
  )
}

export default Sidebar