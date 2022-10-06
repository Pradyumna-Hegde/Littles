import React, { Component } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import Copyright from "../Tiny_Components/Copyright";
import Dropdown from "../Tiny_Components/Dropdown";

class Sell extends Component {
  state = {
    element: "",
  };

  handleUnitChange = (event) => {
    this.setState({ element: event.target.value });
    console.log(this.state.element);
  };

  render() {
    const units = ["kgs", "grams", "mls"];

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            LOGO
          </Typography>

          <Typography component="h1" variant="h5">
            Sell
          </Typography>
          <Box
            component="form"
            noValidate
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-medicine-name"
                  name="medicineName"
                  required
                  fullWidth
                  id="medicineName"
                  label="Medicine Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="quantity"
                  label="Quantity"
                  name="quantity"
                  autoComplete="quantity-entered"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Dropdown
                  onElementChange={this.handleElementChange}
                  value={this.state.element}
                  elements={units}
                  label="Units *"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Here Dropdown will come!"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sell
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Go back to Products
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    );
  }
}

export default Sell;
