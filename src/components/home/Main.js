import { React, Component } from 'react';

import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';

import imagens from './img.js';
import texts from './texts.js';
import './main.css';
import './jox.css';

const xicaras = imagens.xicara;
const mensages = texts.mensage;

class Main extends Component {
  render() {
    return (
      <Box
        className='bg-white'
        style={{ marginTop: 70, justifyContent: 'center' }}
      >
        <ImageList sx={{ width: 950, height: 600 }} cols={3} rowHeight={300}>
          {xicaras.map((xicara, index) => {
            return (
              <ImageListItem key={index} style={{ margin: 0, padding: 0 }}>
                <img
                  src={xicara}
                  style={{ width: 300, margin: 0, padding: 0 }}
                />

                <ImageListItemBar
                  title={'teste'}
                  subtitle={'teste'}
                  style={{ margin: 0, padding: 0 }}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
    );
  }
}

export default Main;
