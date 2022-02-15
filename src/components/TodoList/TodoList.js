import { DeleteOutlined } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Avatar,
  Button,
  Fab,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: {
        product: '',
        amount: '1',
        weight: '',
        price: '',
        productValue: '',
        total: '',
      },
      shoppingList: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ query: { ...this.state.query, [name]: value } });
  }
  deleteUser(index, array) {
    array.splice(index, 1);
    console.log('chamando...', array, index);
    this.setState({ array: array });
    return array;
  }
  list = (event) => {
    const dados = {
      product: this.state.query.product,
      amount: this.state.query.amount,
      weight: this.state.query.weight,
      price: this.state.query.price,
      productValue: this.state.query.productValue,
      total: this.state.query.total,
    };

    this.setState((state) => ({
      shoppingList: [...state.shoppingList, dados],
      query: {
        product: '',
        amount: '1',
        weight: '',
        price: '',
        productValue: '',
        total: '',
      },
    }));
  };
  render() {
    return (
      <>
        <Box sx={{ mt: 1, mx: 1, alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: '#395B64', width: 60, height: 60 }}>
            <ShoppingCartIcon />
          </Avatar>
          <Typography component={'h1'} variant={'h6'}>
            {'SHOPPING LIST'}
          </Typography>
          <Typography
            variant='h5'
            sx={{ color: '#2666CF' }}
            alignContent={'center'}
          >
            <Avatar
              sx={{
                width: 40,
                height: 40,
                bgcolor: '#8A39E1',
                m: 1,
                ml: 2,
              }}
            >
              <ShoppingCartIcon />
            </Avatar>
            Sing in
          </Typography>
          <Grid container>
            <Grid
              container
              item
              xs={12}
              lg={6}
              spacing={2}
              justifyContent={'center'}
              sx={{ display: 'flex', alignContent: 'center' }}
            >
              <Grid item lg={12} xs={12}>
                <TextField
                  name='product'
                  placeholder='Product'
                  label='Product'
                  value={this.state.query.product}
                  onChange={this.handleInputChange}
                  fullWidth
                />
              </Grid>

              <Grid item lg={12} xs={12}>
                <TextField
                  name='amount'
                  type={'number'}
                  placeholder='amount'
                  label='amount'
                  value={this.state.query.amount}
                  onChange={this.handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <TextField
                  name='weight'
                  type={'number'}
                  placeholder='weight'
                  label='weight'
                  value={this.state.query.weight}
                  onChange={this.handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <TextField
                  name='price'
                  type={'number'}
                  placeholder='price'
                  label='price'
                  value={this.state.query.price}
                  onChange={this.handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <TextField
                  name='productValue'
                  type={'number'}
                  placeholder='productValue'
                  label='productValue'
                  value={this.state.query.productValue}
                  onChange={this.handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <Button variant='contained' onClick={this.list} fullWidth>
                  ADD
                </Button>
              </Grid>
            </Grid>
            {/* TABLE */}
            <Grid item lg={12} xs={12}>
              <Box>
                <TableContainer>
                  <Table
                    size='small'
                    sx={{ maxWidth: 200, paddingLeft: '0px', margin: 0 }}
                  >
                    <TableHead>
                      <TableRow>
                        {/* ARRUMAR ESSA BOSTA AQUI!!!!!!!!!!! */}
                        <TableCell sx={{ paddingLeft: 0 }}>
                          Product
                        </TableCell>{' '}
                        <TableCell sx={{ paddingLeft: 0 }}>Amount</TableCell>
                        <TableCell sx={{ paddingLeft: 0 }}>Weight</TableCell>
                        <TableCell sx={{ paddingLeft: 0 }}>Price</TableCell>
                        <TableCell sx={{ paddingLeft: 0 }}>Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.shoppingList.map((list, index) => {
                        const total = list.price * list.amount;
                        return (
                          <>
                            <TableRow
                              key={'TableRow' + index}
                              sx={{ fontSize: 10 }}
                            >
                              <TableCell sx={{ m: 0 }}>
                                {list.product}
                              </TableCell>
                              <TableCell sx={{ paddingLeft: 0 }}>
                                {list.amount}
                              </TableCell>
                              <TableCell sx={{ paddingLeft: 0 }}>
                                {list.weight}
                              </TableCell>
                              <TableCell sx={{ paddingLeft: 0 }}>
                                {list.price}
                              </TableCell>
                              <TableCell sx={{ paddingLeft: 0 }}>
                                {'R$:' + total}
                              </TableCell>
                              <Avatar
                                sx={{
                                  maxWidth: 40,
                                  bgcolor: '#2666CF',
                                  width: 40,
                                  height: 40,
                                }}
                                onClick={() =>
                                  this.deleteUser(
                                    index,
                                    this.state.shoppingList
                                  )
                                }
                              >
                                <DeleteOutlined />
                              </Avatar>
                            </TableRow>
                          </>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

export default TodoList;
