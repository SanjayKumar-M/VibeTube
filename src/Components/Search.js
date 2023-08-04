import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { FetchAPI } from "../Utils/FetchAPI";
import Videos from "./Videos";

const Search = () => {
  const [videos, setVideos] = useState([]); // Initialize with an empty array
  const { searchTerm } = useParams();

  useEffect(() => {
    if (searchTerm) { // Check if searchTerm exists before making the API call
      FetchAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
        .catch((error) => {
          console.error("Error fetching videos:", error);
          setVideos([]); // Clear videos in case of an error
        });
    }
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px" }}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} /> {/* Render Videos component only when videos exist */}
      </Box>
    </Box>
  );
};

export default Search;
