import { React, Component } from "react";
import "./main.css";
import "./jox.css";
import Card from "./Card";
import { Grid, Box } from "@mui/material";

class Main extends Component {
  render() {
    return (
      <div className="bg-white" container>
        <div>
          <Box className="ht-3" style={{ display: "inline" }}>
            <Grid xs={3}>
              <Card />
              <Card />
            </Grid>
            <Grid xs={3}>
              <Card />
            </Grid>
            <Grid xs={3}>
              <Card />
            </Grid>
            <Grid xs={3}>
              <Card />
            </Grid>
          </Box>
        </div>
      </div>
    );
  }
}

export default Main;
