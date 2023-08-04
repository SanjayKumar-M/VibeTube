import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { FetchAPI } from '../Utils/FetchAPI';

const Feeds = () => {
  const [selected, setSelected] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchAPI(`search?part=snippet&q=${selected}`)
      .then((data) => setVideos(data.items))
      .catch((error) => {
        console.error('Error fetching videos:', error);
        setVideos([]); // Clear videos in case of an error
      });
  }, [selected]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box sx={{ height: { xs: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { xs: 0, md: 2 } }}>
        <Sidebar 
          selected={selected}
          setSelected={setSelected}
        />
        
        <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright © 2023 VibeTube
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selected} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feeds;
