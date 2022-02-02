import { React, Component } from "react";
import "./jox.css";

import Main from "./Main";
import Header from "./Header";
import { Grid } from "@mui/material";

class Section extends Component {
  render() {
    return (
      <>
        <div
          className="bg-dark"
          style={{
            paddingLeft: 150,
            paddingRight: 150,
            position: "fixed",
            height: "100%",
          }}
        >
          <Header />
          <Main />
        </div>
      </>
    );
  }
}

export default Section;
