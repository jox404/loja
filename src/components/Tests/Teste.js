import { React, Component } from "react";
import { ThemeProvider, createMuiTheme, Button } from "@mui/material";

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
  },
});

class Teste extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Button color="primary" variant="contained">
          primary
        </Button>
        <Button color="secondary" variant="contained">
          secondary
        </Button>
        <Button color="error" variant="contained">
          error
        </Button>
        <Button color="info" variant="contained">
          info
        </Button>
      </ThemeProvider>
    );
  }
}

export default Teste;
