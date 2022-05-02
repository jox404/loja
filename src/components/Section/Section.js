import { react, Component } from 'react';

import { Box } from '@mui/system';
import {
  Button,
  ButtonGroup,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Input,
  Typography,
} from '@mui/material';

/* CSS */
import './style/style.css';
import CardAnime from '../Card/CardAnime';

/* FIRE BASE */
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getStorage, ref, uploadBytes } from 'firebase/storage'



class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginationAnimes: [],
      currentPage: 1,
      loadingAnimes: true,
    };
  }
  async pagination(currentPage, limitItems) {
    window.scrollTo(0, 0); //this function makes the page go back to the top
    this.setState({
      paginationAnimes: [],
      loadingAnimes: true,
    });
    var initialPage = currentPage * limitItems - limitItems;
    await fetch(
      `https://kitsu.io/api/edge/anime?page[limit]=${limitItems}&page[offset]=${initialPage}`,
      { method: 'get' }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        res.map((item) => {
          this.setState({
            paginationAnimes: this.state.paginationAnimes.concat(item),
          });
        });
      })
      .then(() => {
        this.setState({
          loadingAnimes: false,
        });
      });
  }

  nextPage(limitItems) {
    const nextPage = this.state.currentPage + 1;
    this.pagination(nextPage, limitItems);
    this.setState({
      currentPage: nextPage,
    });
  }
  prevPage(limitItems) {
    const prevPage = this.state.currentPage - 1;
    this.pagination(prevPage, limitItems);
    this.setState({
      currentPage: prevPage,
    });
  }
  componentDidMount() {
    this.pagination(this.state.currentPage, 8);
  }

  render() {
    const paginationItems = this.state.paginationAnimes;

    return (
      <>
        <Container maxWidth='lg' sx={{ marginTop: 7, bgcolor: '#95989c' }}>
          <Typography
            variant='h5'
            align='center'
            sx={{ paddingTop: 2, paddingBottom: 2 }}
          >
            RELEASES OF THE WEEK
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Box sx={{ minHeight: 900 }}>
            <Grid
              container
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-around'}
              sx={{ minHeight: 530 }}
            >
              <CircularProgress
                sx={{
                  display: `${this.state.loadingAnimes === true ? 'inline' : 'none'
                    }`,
                  marginTop: 25,
                }}
              />
              {paginationItems.map((anime, index) => {
                const data = {
                  name:
                    anime.attributes.titles.en_jp === undefined || null
                      ? anime.attributes.titles.en_us === undefined || null
                        ? anime.attributes.titles.en === undefined || null
                          ? anime.attributes.titles.ja_jp
                          : anime.attributes.titles.en
                        : anime.attributes.titles.en_us
                      : anime.attributes.titles.en_jp,
                  bgImage: anime.attributes.posterImage.large,
                  synopsis:
                    anime.attributes.synopsis === ''
                      ? "Sorry, We don't have a synopsis for this anime"
                      : anime.attributes.synopsis,
                  id: anime.id
                };

                return (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CardAnime
                      key={index}
                      name={data.name}
                      bgImage={data.bgImage}
                      synopsis={data.synopsis}
                      id={data.id}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <ButtonGroup sx={{ mb: 1 }}>
              <Button
                variant='contained'
                disabled={this.state.currentPage === 1 ? true : false}
                onClick={() => this.prevPage(8)}
              >
                Prev
              </Button>
              <Button variant='contained' color='warning'>
                {`${this.state.currentPage}`}
              </Button>
              <Button variant='contained' onClick={() => this.nextPage(8)}>
                Next
              </Button>
            </ButtonGroup>
          </Box>
        </Container>
      </>
    );
  }
}
export default Section;
