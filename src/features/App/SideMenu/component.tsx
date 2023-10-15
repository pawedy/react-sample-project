import { contentStyles, drawerStyles } from './styles';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface SideMenuProps {
  open: boolean;
  onDrawerToggle: () => void;
}

export function SideMenu({ open = false, onDrawerToggle }: SideMenuProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Drawer
      variant={isDesktop ? 'permanent' : 'temporary'}
      open={open}
      onClose={onDrawerToggle}
      anchor="left"
      sx={drawerStyles}
    >
      <Box sx={contentStyles}>Menu</Box>
    </Drawer>
  );
}
