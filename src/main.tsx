import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './features/App';
import { People } from './features/People';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <div>Unexpected error</div>,
    children: [
      {
        path: '/',
        element: <People />,
      },
      {
        path: '/:id',
        element: <div>Person</div>,
      },
      {
        path: 'vehicles',
        element: <div>Vehicles</div>,
      },
      {
        path: 'planets',
        element: <div>Planets</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
