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
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          {/* <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} /> */}
        </Typography>
      </Link>
    </CardContent>

    </Card>
  )
}

export default VideoCard