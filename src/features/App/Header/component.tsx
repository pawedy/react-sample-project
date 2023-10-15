import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { menuButtonStyles, titleStyles } from './styles';

interface HeaderProps {
  onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open menu"
          edge="start"
          onClick={onMenuToggle}
          sx={menuButtonStyles}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={titleStyles}>
          Star Wars Catalogue
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
