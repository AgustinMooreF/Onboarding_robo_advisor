import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import logo from "../../assets/logos/azul-verde_Mesa de trabajo 1.png";
import { useNavigate, Link } from "react-router-dom";


export default function ButtonAppBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <img src={logo} alt="logo" style={{Width: 60, height: 50}}/>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
