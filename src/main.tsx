import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './features/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <div>Unexpected error</div>,
    children: [
      {
        path: '/',
        element: <div>Main</div>,
      },
      {
        path: 'characters',
        element: <div>Characters</div>,
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
