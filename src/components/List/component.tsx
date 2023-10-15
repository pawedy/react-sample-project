import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ListItem } from '../../api';
import { ListCard } from '../ListCard';

interface ListProps {
  items: ListItem[];
}

export function List({ items }: ListProps) {
  const gridItems = items.map(({ name, uid }) => (
    <Grid item xs={2} sm={4} md={4} key={uid}>
      <ListCard name={name} uid={uid} />
    </Grid>
  ));

  return (
    <Box>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {gridItems}
      </Grid>
    </Box>
  );
}
