import axios from "axios";

const baseURL = 'https://youtube-v31.p.rapidapi.com';

const headers = {
  'X-RapidAPI-Key': '1346969e88msh74ebf3189684698p14f3efjsn3a2de6cb2b4c',
  'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
};

export const FetchAPI = async (url, maxResults = 50) => {
  try {
    // Add the maxResults parameter to the URL query string
    const response = await axios.get(`${baseURL}/${url}&maxResults=${maxResults}`, { headers });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

