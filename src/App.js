import { Link } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import Navbar from './Components/Navbar';
import Feeds from './Components/Feeds';
const App = () => {
  return (
    <Box sx={{backgroundColor:"black"}} >
      <Navbar />
      <Feeds />
      <Link to='/videos'>Videos</Link>
      <Link to='/channel'>Channels</Link>
      <Link to='/search'>Search</Link>
    </Box>
  );
}

export default App;
