import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Link,
  Button,
} from "@mui/material";
import { React, Component } from "react";
import IconMenu from "@mui/icons-material/Menu";
import "./header.css";
import "./jox.css";
import { Box } from "@mui/system";

import FreeBreakfastOutlineIcon from "@mui/icons-material/FreeBreakfastOutlined";

class Header extends Component {
  render() {
    return (
      <Box flexGrow={1}>
        <AppBar style={{ backgroundColor: "#f0a500", color: "191919" }}>
          <Toolbar>
            <IconButton sx={{ mr: 30 }} variant="outlined">
              <IconMenu />
            </IconButton>

            <Typography variant="h6" sx={{ mr: 6 }}>
              <Link
                underline="hover"
                href="https://www.youtube.com/"
                fontFamily={"monospace"}
                fontSize="13pt"
                color="#334756"
              >
                Meninas
              </Link>
            </Typography>
            <Typography variant="h6" sx={{ mr: 6 }}>
              <Link
                underline="hover"
                href="https://www.youtube.com/"
                fontFamily={"monospace"}
                fontSize="13pt"
                color="#082032"
              >
                Mulheres
              </Link>
            </Typography>
            <Typography variant="h6" sx={{ mr: 6 }}>
              <Link
                underline="hover"
                href="https://www.youtube.com/"
                fontFamily={"monospace"}
                color="#334756"
              >
                Logo
              </Link>
            </Typography>
            <Typography variant="h6" sx={{ mr: 6, mt: 1 }}>
              <Link
                underline="hover"
                href="https://www.youtube.com/"
                fontFamily={"monospace"}
                fontSize="13pt"
                color="#334756"
              >
                <FreeBreakfastOutlineIcon></FreeBreakfastOutlineIcon>
              </Link>
            </Typography>
            <Typography variant="h6" sx={{ mr: 6 }}>
              <Link
                underline="hover"
                href="https://www.youtube.com/"
                fontFamily={"monospace"}
                fontSize="13pt"
              >
                Meninos
              </Link>
            </Typography>
            <Box sx={{ ml: 15 }}>
              <Link underline="none" href="https://www.youtube.com/">
                <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                  Entar
                </Button>
              </Link>
              <Link underline="none" href="https://www.youtube.com/">
                <Button variant="contained" color="secondary">
                  Cadastre-se
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Header;
