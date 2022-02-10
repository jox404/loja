import {
  Grid,
  Box,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { React, Component } from "react";
import { typography } from "@mui/system";

class Singup extends Component {
  constructor(props) {
    super(props);

    this.state = { firstName: "", lastName: "", email: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ firstName: event.target.firstName });
  }
  handleSubmit(event) {}
  render() {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 9,
          }}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#9c27b0",
              mb: 1,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component={"h1"} variant="h5">
            {"Sign up"}
          </Typography>
          <Grid container spacing={2} sx={{ maxWidth: 410, mt: 1 }}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <TextField name="firstName" label="First Name" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <TextField name="lastName" label="Last Name" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField name="email" label="Email Address" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField name="password" label="Password" fullWidth />
            </Grid>
            <Grid item>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sx={{ mt: 1 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                SIGN UP
              </Button>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}
export default Singup;
