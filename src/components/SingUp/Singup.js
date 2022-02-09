import {
  Grid,
  Box,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Avatar,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { React, Component } from "react";
import { typography } from "@mui/system";

class Singup extends Component {
  render() {
    return (
      <>
        <Box>
          <Grid container>
            <Grid item lg={4} sm={0} xs={0}></Grid>
            <Grid
              item
              lg={4}
              sm={12}
              xs={12}
              justifyContent="center"
              sx={{ display: "flex" }}
              justifyItems="center"
            >
              <Box>
                <Grid>
                  <Avatar>
                    <LockIcon />
                  </Avatar>
                  <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
                    Sing up
                  </Typography>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={12}>
                    <TextField name="firstName" label="First Name" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="lastName" label="Last Name" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="email" label="Email Adress" fullWidth />
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
                </Grid>
              </Box>
            </Grid>
            <Grid item lg={4} sm={0} xs={0}></Grid>
          </Grid>
        </Box>
      </>
    );
  }
}
export default Singup;
