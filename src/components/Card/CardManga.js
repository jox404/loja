import { CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import React, { Component } from "react";
import { Card, Box } from "@mui/material";
import RatingBar from "./RatingBar";

class CardManga extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ratingBar: "",
    };
  }
  render() {
    const upBar = () => {
      this.setState({
        ratingBar: <RatingBar />,
      });
    };
    const downBar = () => {
      this.setState({
        ratingBar: "",
      });
    };
    return (
      <>
        <Box sx={{ display: "flex", justifyItems: "center" }}>
          <Box sx={{ maxWidth: 400, marginLeft: 10, marginTop: 5 }}>
            <Card elevation={15}>
              <CardHeader
                title="Jujutsu Kaisen"
                subheader={"Autor: " + "Gege Akutami"}
              />
              <CardMedia
                component={"img"}
                image="http://vortexcultural.com.br/images/2021/05/jujutsu_capa.png"
                height={300}
                sx={{}}
                onMouseMove={upBar}
                onMouseOut={downBar}
              ></CardMedia>
              <Box sx={{ position: "absolute" }}>{this.state.ratingBar}</Box>
              <CardContent className="CardContentManga">
                <Typography varinat="body2" textAlign={"justify"}>
                  Jujutsu Kaisen é um Mangá sombrio que lida com elementos
                  sobrenaturais como maldições, espíritos e feitiçaria. ... A
                  mera presença deste objeto é capaz de atrair maldições por
                  causa de sua energia amaldiçoada. Assim, seus amigos ficam em
                  perigo e aparecem dois feiticeiros para resolver o problema
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </>
    );
  }
}
export default CardManga;
