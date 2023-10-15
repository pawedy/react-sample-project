import { SxProps, Theme } from '@mui/material/styles';

const drawerWidth = '240px';

export const drawerStyles: SxProps<Theme> = {
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    borderRight: 'none',
    position: 'static',
  },
};

export const contentStyles: SxProps<Theme> = {
  flexGrow: 1,
  width: drawerWidth,
  backgroundColor: (theme) => theme.palette.primary.light,
};
