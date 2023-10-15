import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

interface ListCardProps {
  name: string;
  uid: string;
}

export function ListCard({ name, uid }: ListCardProps) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate(uid, { relative: 'route' })}
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
