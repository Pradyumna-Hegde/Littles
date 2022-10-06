import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Links = ["Home", "Products", "Careers"];

class Navbar extends Component {
  state = {};
  render() {
    return (
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#6d4c41" }}>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "inline-flex", alignItems: "center" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Medical Central
              </Typography>
            </Box>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {Links.map((link, index) => (
                <Button key={index} size="small" sx={{ color: "white", mx: 1 }}>
                  {link}
                </Button>
              ))}
              <Divider
                orientation="vertical"
                flexItem
                sx={{ backgroundColor: "white", mx: 1 }}
              />
              <Button
                variant="contained"
                disableElevation
                size="small"
                sx={{ backgroundColor: "#8d6e63", mx: 1 }}
                startIcon={<ShoppingCartIcon />}
              >
                Cart
              </Button>
              <Button
                variant="contained"
                disableElevation
                size="small"
                sx={{ backgroundColor: "#8d6e63", mx: 1 }}
                startIcon={<AccountCircleIcon />}
              >
                SignIn
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
