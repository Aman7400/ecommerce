import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const navs = [
  { title: "About", link: "/about" },
  { title: "login", link: "/login" },
  { title: "Sign Up", link: "/register" },
];

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ px: 6 }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ color: "inherit", textDecoration: "none", flexGrow: 1 }}
          >
            Foody
          </Typography>

          {navs.map(({ title, link }, i) => (
            <Button
              size="large"
              color="inherit"
              key={i}
              component={Link}
              to={link}
            >
              {title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
