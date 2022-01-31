import { React, Component } from "react";
import "./section.css";

import Main from "./Main";
import { Grid } from "@mui/material";

class Section extends Component {
  render() {
    return (
      <div
        className="bg-pink"
        style={{
          paddingLeft: 150,
          paddingRight: 150,
          position: "absolute",
          height: "100%",
          width: "75.2vw",
        }}
      >
        <Main></Main>
      </div>
    );
  }
}

export default Section;
