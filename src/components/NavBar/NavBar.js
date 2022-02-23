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
  ButtonGroup,
  Drawer,
  List,
  ListSubheader,
  IconButton,
} from "@mui/material";
import DrawerMenu from "../DrawerMenu/DrawerMenu";

import MangaIcon from "@mui/icons-material/MenuBookTwoTone";
import JapanFlagIcon from "@mui/icons-material/Circle";
import AvatarAccountIcon from "@mui/icons-material/AccountCircle";
import { SearchOutlined } from "@mui/icons-material";

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
      showDrawerRight: false,
      showDrawerLeft: false,
    };
  }
  showDrawer(drawer) {
    this.setState({
      drawer: true,
    });
  }
  render() {
    const signInStatus = this.state.signInStatus;
    const sexo = this.state.sexo;
    const mobileDrawe = ["TRADS", "LACAMENTOS"];
    const sideBar = ["MY LIST", "FOLLOWING"]; /* trocar o nome dessa const */
    return (
      <>
        <ThemeProvider theme={theme}>
          <AppBar color="white" elevation={0}>
            <Toolbar sx={{ borderBottom: 1, borderColor: "#EEEEEE" }}>
              <Box
                sx={{ display: "flex", justifyContent: "left", width: "400px" }}
              >
                <Button variant="text" color="primary">
                  SUBSCRIBE
                </Button>

                <Button color="milk" variant="text">
                  RELEASES
                </Button>

                <Button color="milk" variant="text">
                  TRENDS
                </Button>
                <Button color="milk" variant="text">
                  CUSTOM SEARCH
                </Button>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography align="center">
                  {/* VAI LEVAR PARA A HOME PAGE */}

                  <JapanFlagIcon sx={{ color: "#D72323", fontSize: 55 }} />
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  width: "400px",
                }}
              >
                <Button
                  variant="outlined"
                  color="milk"
                  startIcon={<SearchOutlined />}
                >
                  {"Search..."}
                </Button>

                {signInStatus === true ? (
                  <IconButton>
                    <AvatarAccountIcon
                      sx={
                        sexo === "male"
                          ? { color: "#B2F9FC", fontSize: 40 }
                          : { color: "#FFC4E1", fontSize: 40 }
                      }
                    />
                  </IconButton>
                ) : (
                  <>
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
                  </>
                )}
              </Box>
              <DrawerMenu anchor="left" open={false} list={mobileDrawe} />
              <DrawerMenu anchor="right" open={false} list={sideBar} />
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </>
    );
  }
}

export default NavBar;
