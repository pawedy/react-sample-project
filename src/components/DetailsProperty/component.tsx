import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

interface DetailsPropertyProps {
  name: string;
  value: string;
  onClick?: () => void;
}

export function DetailsProperty({
  name,
  value,
  onClick,
}: DetailsPropertyProps) {
  const valueElement = onClick ? (
    <Link component="button" variant="body1" onClick={() => onClick()}>
      {value}
    </Link>
  ) : (
    <span>{value}</span>
  );
  return (
    <Box>
      <Typography variant="body1" component="p">
        <span>{name}</span>: {valueElement}
      </Typography>
    </Box>
  );
}
