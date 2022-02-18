import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Icon } from "@iconify/react";
const navs = [
  { title: "About", link: "/about" },
  { title: "Login", link: "/login" },
  { title: "Sign Up", link: "/register" },
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary">
        <Toolbar sx={{ px: { xs: 3, md: 6 } }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ color: "inherit", textDecoration: "none", flexGrow: 1 }}
          >
            Foody
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
          </Box>
          {/* Mobile View Button */}
          <IconButton
            color="inherit"
            onClick={handleOpenUserMenu}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <Icon icon="eva:menu-fill" />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {navs.map(({ title, link }, i) => (
              <MenuItem component={Link} to={link}>
                {title}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
