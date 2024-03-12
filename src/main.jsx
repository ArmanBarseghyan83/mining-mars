import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './pages/AboutPage';
import MusicPage from './pages/MusicPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import NewsPage from './pages/NewsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About/>
      },
      {
        path: '/music',
        element: <MusicPage/>
      },
      {
        path: '/signup',
        element: <SignUpPage/>
      },
      {
        path: '/news',
        element: <NewsPage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
