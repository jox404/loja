import { React, Component } from "react";
import {
  Avatar,
  Grid,
  Paper,
  Typography,
  Box,
  CssBaseline,
  TextField,
} from "@mui/material";

import imagens from "../home/img";
import { LockOutlined } from "@mui/icons-material";
import { bgcolor } from "@mui/system";

const xicaras = imagens.xicara[0];
console.log(xicaras);
class Singin extends Component {
  render() {
    return (
      <>
        <Grid
          container
          component="main"
          sx={{ height: "100vh", backgroundColor: "#303030" }}
          spacing={2}
        >
          <Grid
            item
            xs={0}
            sm={0}
            md={7}
            lg={7}
            xl={7}
            sx={{
              backgroundImage:
                "url(https://images.pexels.com/photos/8697430/pexels-photo-8697430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
            }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            xl={5}
            sx={{ backgroundColor: "#fff" }}
            justifyContent={"center"}
          >
            <Box componet="form" sx={{ mt: 10, mx: 2 }}>
              <Typography
                variant="h5"
                sx={{ color: "#2666CF" }}
                alignContent={"center"}
              >
                <Avatar
                  sx={{ width: 40, height: 40, bgcolor: "#8A39E1" }}
                  aling
                >
                  <LockOutlined />
                </Avatar>
                Sing in
              </Typography>
              <Grid container item spacing={2} xs={12}>
                <Grid item xs={12}>
                  <TextField id="email" name="email" label="Email" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Singin;
