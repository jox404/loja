import { createTheme } from '@mui/material/styles';

const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#FF5F00',
      dark: '#e04300',
      light: '#ff5b14',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FB3640',
    },
    error: {
      main: '#FF0000',
    },
    info: {
      main: '#FFC600',
    },
    main: {
      main: '#393E46',
    },
    milk: {
      main: '#fff',
    },
  },
});

export default LightTheme