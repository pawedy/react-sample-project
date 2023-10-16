import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './features/App';
import { PeopleList } from './features/People';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { PersonDetails } from './features/People/components/PersonDetails';
import { PlanetDetails, PlanetsList } from './features/Planets';
import { VehicleDetails, VehiclesList } from './features/Vehicles';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <div>Unexpected error</div>,
    children: [
      {
        path: '',
        element: <PeopleList />,
      },
      {
        path: ':personId',
        element: <PersonDetails />,
      },
      {
        path: 'planets',
        element: <PlanetsList />,
      },
      {
        path: 'planets/:planetId',
        element: <PlanetDetails />,
      },
      {
        path: 'vehicles',
        element: <VehiclesList />,
      },
      {
        path: 'vehicles/:vehicleId',
        element: <VehicleDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
