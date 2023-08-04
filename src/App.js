import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import Navbar from './Components/Navbar';
import Feeds from './Components/Feeds';
import Channels from './Components/Channels';
import Videos from './Components/Videos';
import Search from './Components/Search';

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feeds />} />
          <Route path="/video/:id" element={<Videos />} />
          <Route path="/channel/:id" element={<Channels />} />
          <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
