import { Link } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box>
     <Link to='/navbar'>Navbar</Link> 
      <Link to='/feed'>Feeds</Link>
      <Link to='/videos'>Videos</Link>
      <Link to='/channel'>Channels</Link>
      <Link to='/search'>Search</Link>
    </Box>
  );
}

export default App;
