import reactDom, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  createMuiTheme,
  ThemeProvider,
} from "@mui/material";
import MangaIcon from "@mui/icons-material/MenuBookTwoTone";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#11468F",
    },
    secondary: {
      main: "#FB3640",
    },
    error: {
      main: "#FF0000",
    },
    info: {
      main: "#FFC600",
    },
    white: {
      main: "#FBF8F1",
    },
  },
});

class NavBar extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar color="white" elevation={0}>
              <Toolbar>
                <Button variant="contained" color="primary">
                  Torne-se Prime
                </Button>
              </Toolbar>
              <Typography item sx={{ justifyItems: "center" }}>
                <MangaIcon />
              </Typography>
            </AppBar>
          </Box>
        </ThemeProvider>
      </>
    );
  }
}

export default NavBar;
