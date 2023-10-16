import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { loaderStyles } from './styles';

export function Loader() {
  return (
    <Box sx={loaderStyles}>
      <CircularProgress />
    </Box>
  );
}
