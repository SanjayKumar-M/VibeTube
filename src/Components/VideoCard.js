import React from 'react'
import { Link } from 'react-router-dom'
import { Card,Typography,CardContent,CardMedia } from '@mui/material'
import { demoThumbnailUrl, demoChannelTitle,demoVideoTitle,demoVideoUrl,demoChannelUrl } from '../Utils/Constants'
const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card>
      <Link to={videoId ? `/vidoe/${videoId}` : demoVideoUrl}>
      <CardMedia image={snippet?.thumbnails?.high?.url}  alt={snippet?.title} 
        sx={{width:360, height:180}}  
      />
      </Link>
    </Card>
  )
}

export default VideoCard