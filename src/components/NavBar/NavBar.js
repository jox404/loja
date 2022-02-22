import reactDom, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  createMuiTheme,
  ThemeProvider,
  Link,
  Grid,
} from "@mui/material";
import MangaIcon from "@mui/icons-material/MenuBookTwoTone";
import JapanFlagIcon from "@mui/icons-material/Circle";
import AvatarAccountIcon from "@mui/icons-material/AccountCircle";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D72323",
      contrastText: "#fff",
    },
    secondary: {
      main: "#000",
    },
    error: {
      main: "#FF0000",
    },
    info: {
      main: "#FFC600",
    },
    white: {
      main: "#3F3F44",
    },
    dark: {
      main: "#272727",
      contrastText: "#fff",
    },
    milk: {
      main: "#FDFAF6",
      contrastText: "#D72323",
    },
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInStatus: false,
      sexo: "famale",
    };
  }
  render() {
    const signInStatus = this.state.signInStatus;
    const sexo = this.state.sexo;
    return (
      <>
        <ThemeProvider theme={theme}>
          <Box>
            <AppBar color="white" elevation={0}>
              <Toolbar sx={{ borderBottom: 1, borderColor: "#EEEEEE" }}>
                <Grid container>
                  <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                    <Button variant="text" color="primary">
                      SUBSCRIBE
                    </Button>
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                    <Typography align="left" sx={{ flex: 1 }}>
                      <Button color="milk" variant="text">
                        RELEASES
                      </Button>

                      <Button color="milk" variant="text">
                        TRENDS
                      </Button>
                    </Typography>
                  </Grid>
                  <Grid item xl={2} lg={2} md={1} sm={1} xs={1}>
                    <Typography align="center" sx={{ flex: 1 }}>
                      {/* VAI LEVAR PARA A HOME PAGE */}

                      <JapanFlagIcon sx={{ color: "#D72323", fontSize: 55 }} />
                    </Typography>
                  </Grid>
                  <Grid item xl={3} lg={3} md={4} sm={4} xs={4}>
                    <Button variant="text" color="primary">
                      SUBSCRIBE
                    </Button>
                  </Grid>
                  <Grid item xl={2} lg={2} md={1} sm={1} xs={1}>
                    {signInStatus === true ? (
                      <Typography align="right">
                        <AvatarAccountIcon
                          sx={
                            sexo === "male"
                              ? { color: "#B2F9FC", fontSize: 40 }
                              : { color: "#FFC4E1", fontSize: 40 }
                          }
                        />
                      </Typography>
                    ) : (
                      <Typography align="right">
                        <Button
                          variant="contained"
                          color="secondary"
                          sx={{
                            margin: "2px",
                            display: { xs: "none", sm: "none", md: "inline" },
                          }}
                        >
                          Sign In
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{ margin: "2px" }}
                        >
                          Sign up
                        </Button>
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
          </Box>
        </ThemeProvider>
      </>
    );
  }
}

export default NavBar;
