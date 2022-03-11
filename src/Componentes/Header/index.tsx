import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#E4FEFA" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ color: "#41927F" }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#41927F" }}>
            App travel
          </Typography>
          <Button sx={{ color: "#41927F" }} onClick={() => { navigate(`/login`) }} >Iniciar sesión</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;