import Box from '@mui/material/Box';
import { useState } from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import { appStyles, contentStyles, mainStyles } from './styles';
import { Outlet } from 'react-router-dom';

export function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={appStyles}>
      <Header onMenuToggle={handleDrawerToggle}></Header>
      <Box sx={contentStyles}>
        <SideMenu
          open={drawerOpen}
          onDrawerToggle={handleDrawerToggle}
        ></SideMenu>
        <Box component="main" sx={mainStyles}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
