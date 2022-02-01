import { React, Component } from "react";

import { Box, Button, ImageList, ImageListItem } from "@mui/material";
import imagens from "./img.js";
import "./main.css";
import "./jox.css";

const xicaras = imagens.xicara;

class Main extends Component {
  render() {
    return (
      <Box
        className="bg-white"
        style={{ marginTop: 70, justifyContent: "center" }}
      >
        <ImageList sx={{ width: 950, height: 450 }} cols={3} rowHeight={300}>
          {xicaras.map((xicara, index) => {
            return (
              <ImageListItem key={index}>
                <img src={xicara} style={{ width: 300 }} />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
    );
  }
}

export default Main;
