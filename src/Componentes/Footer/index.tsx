
import { AppBar, Box, Button, Container, IconButton, Link, Toolbar, Typography } from "@mui/material"

function Copyright() {
  return (
    <Container >
      <Typography
        sx={{ color: "#E4FEFA" }}
        variant="body2"
        color="textSecondary"
        align="left"
      >
        {"Copyright © "}
        <Link color="inherit" href="https://app-travel.com/">
          www.app-travel.com
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#41927F", justifyContent: "flexStart" }} >
          <Copyright />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#E4FEFA" }}>
            Created by  codiGo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Footer