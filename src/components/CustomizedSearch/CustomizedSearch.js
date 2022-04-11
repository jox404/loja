import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { React, Component } from 'react';
import CardAnime from '../Card/CardAnime';
import NavBar from '../NavBar/NavBar';

class CustomizedSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginationAnimes: [],
      linksButton: [],
      currentPage: 0,
    };
  }
  async filterByCategori(filterBy, filterName, limitPerPage, link) {
    const filterLink =
      link === undefined
        ? `https://kitsu.io/api/edge/anime?filter%5B${filterBy}%5D=${filterName}&page%5Blimit%5D=${limitPerPage}&page%5Boffset%5D=0`
        : link;
    /* this.setState({
      currentPage: 0,
    }); */
    const currentPage =
      parseInt(
        filterLink.substring(filterLink.indexOf('&page%5Boffset%5D=') + 18)
      ) /
        limitPerPage +
      1;

    this.setState({ paginationAnimes: [], currentPage: currentPage });
    await fetch(filterLink, { method: 'get' })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({
          paginationAnimes: this.state.paginationAnimes.concat(res.data),
          /* currentPage: currentPage, */
        });
        this.setState({
          linksButton: res.links,
        });
      });
  }
  componentDidMount() {
    this.filterByCategori('categories', 'anime', 8, undefined);
  }
  render() {
    return (
      <>
        <NavBar />
        <Container
          sx={{
            marginTop: 7,
            paddingTop: 2,
            bgcolor: '#95989c',
          }}
        >
          <Typography textAlign={'center'} variant='h5' mb={2}>
            CUSTOMIZED SEARCH
          </Typography>
          <Divider />
          <Box mt={2}>
            <Grid container>
              {this.state.paginationAnimes.map((anime, index) => {
                return (
                  <Grid
                    item
                    key={index + 'item'}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={3}
                  >
                    <CardAnime
                      key={index}
                      name={anime.attributes.titles.en_us}
                      bgImage={anime.attributes.posterImage.large}
                      synopsis={anime.attributes.synopsis}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <ButtonGroup>
            <Button
              variant='contained'
              disabled={this.state.currentPage === 1 ? true : false}
              onClick={() =>
                this.filterByCategori(
                  'categories',
                  'adventure',
                  2,
                  this.state.linksButton.first
                )
              }
            >
              First
            </Button>
            <Button
              variant='contained'
              disabled={
                this.state.linksButton.prev === undefined ? true : false
              }
              onClick={() =>
                this.filterByCategori(
                  'categories',
                  'adventure',
                  2,
                  this.state.linksButton.prev
                )
              }
            >
              Prev
            </Button>

            <Button variant='contained' color='warning'>
              {this.state.currentPage}
            </Button>

            <Button
              variant='contained'
              disabled={
                this.state.linksButton.next === undefined ? true : false
              }
              onClick={() =>
                this.filterByCategori(
                  'categories',
                  'adventure',
                  2,
                  this.state.linksButton.next
                )
              }
            >
              Next
            </Button>

            <Button
              variant='contained'
              onClick={() =>
                this.filterByCategori(
                  'categories',
                  'adventure',
                  2,
                  this.state.linksButton.last
                )
              }
              disabled={
                this.state.linksButton.last === undefined ? true : false
              }
            >
              Last
            </Button>
          </ButtonGroup>
        </Container>
      </>
    );
  }
}

export default CustomizedSearch;
