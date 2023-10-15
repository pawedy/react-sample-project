import { SxProps, Theme } from '@mui/material/styles';

export const appStyles: SxProps<Theme> = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
};

export const contentStyles: SxProps<Theme> = {
  display: 'flex',
  flexGrow: 1,
  overflow: 'hidden',
};

export const mainStyles: SxProps<Theme> = {
  p: 2,
  overflowY: 'auto',
};
