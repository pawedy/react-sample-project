import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ReactNode } from 'react';
import Divider from '@mui/material/Divider';
import { dividerStyles } from './styles';

interface DetailsProps {
  name: string;
  children: ReactNode;
}

export function Details({ name, children }: DetailsProps) {
  return (
    <Box>
      <Typography variant="h5" component="p">
        {name}
      </Typography>
      <Divider sx={dividerStyles} />
      {children}
    </Box>
  );
}
