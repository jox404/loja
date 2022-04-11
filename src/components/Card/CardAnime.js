import { CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React, { Component } from 'react';
import { Card, Box } from '@mui/material';
import RatingBar from './RatingBar';

class CardAnime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      show: false,
    };
  }
  upBar = () => {
    this.setState({
      show: true,
    });
  };

  downBar = () => {
    this.setState({
      show: false,
    });
  };

  saveRating = (event) => {
    this.setState({
      rating: event.target.value,
    });
  };

  render() {
    const { name, alternativeName, bgImage, synopsis } = this.props;
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            justifyItems: 'center',
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: 350, sm: 280, md: 280, lg: 280, xl: 280 },
              minWidth: { xs: 350, sm: 280, md: 280, lg: 280, xl: 280 },
              maxHeight: 500,
              minHeight: 500,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 0,
              marginBottom: 5,
            }}
          >
            <Card elevation={15}>
              <CardHeader
                title={name}
                sx={{ overflow: 'auto', pb: 0, height: 70, fontSize: 30 }}
              />

              <Box onMouseEnter={this.upBar} onMouseLeave={this.downBar}>
                {this.state.show === true ? (
                  <RatingBar
                    rating={this.state.rating}
                    funSaveRating={this.saveRating}
                  />
                ) : (
                  ''
                )}

                <CardMedia component={'img'} image={bgImage} height={300} />
              </Box>

              <CardContent className='CardContentAnime'>
                <Typography
                  varinat='body2'
                  textAlign={'justify'}
                  sx={{ maxHeight: 100, overflow: 'auto' }}
                >
                  {synopsis}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </>
    );
  }
}
export default CardAnime;
