import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Feeds from './Components/Feeds';
import Videos from './Components/Videos';
import Channels from './Components/Channels';
import { Search } from '@mui/icons-material';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {

    path: '/navbar',
    element: <Navbar />
  },
  {
    path: '/feed',
    element: <Feeds />
  },
  {
    path: '/videos',
    element: <Videos />
  },
  {
    path: '/channel',
    element: <Channels />
  },
  {
    path: '/search',
    element: <Search />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}/>)


