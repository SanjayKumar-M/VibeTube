import axios from "axios";


const baseURL = 'https://youtube-v31.p.rapidapi.com';


const options = {
    method: 'GET',
    params: {
      relatedToVideoId: '7ghhRHRP6t4',
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '1346969e88msh74ebf3189684698p14f3efjsn3a2de6cb2b4c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
export const FetchAPI = async(url) =>{
   const {data}= await axios.get(`${baseURL}/${url}`,options);
   return data;
}