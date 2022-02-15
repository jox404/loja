<<<<<<< HEAD
import ClearIcon from "@mui/icons-material/Clear";
import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";
import AddIcon from "@mui/icons-material/Add";
=======
import { DeleteOutlined } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
>>>>>>> abdbe1f94e2e8d63361bc1407b33e26a3f77db10
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
<<<<<<< HEAD
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
=======
} from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';
>>>>>>> abdbe1f94e2e8d63361bc1407b33e26a3f77db10

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: {
<<<<<<< HEAD
        product: "",
        amount: "1",
        weight: "",
        price: "",
        total: "",
=======
        product: '',
        amount: '1',
        weight: '',
        price: '',
        productValue: '',
        total: '',
>>>>>>> abdbe1f94e2e8d63361bc1407b33e26a3f77db10
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
<<<<<<< HEAD
  deleteItem(index, array) {
    array.splice(index, 1);
    console.log("chamando...", array, index);
=======
  deleteUser(index, array) {
    array.splice(index, 1);
    console.log('chamando...', array, index);
>>>>>>> abdbe1f94e2e8d63361bc1407b33e26a3f77db10
    this.setState({ array: array });
    return array;
  }
  list = (event) => {
    const dados = {
      product: this.state.query.product,
      amount: this.state.query.amount,
      weight: this.state.query.weight,
      price: this.state.query.price,
<<<<<<< HEAD
=======
      productValue: this.state.query.productValue,
>>>>>>> abdbe1f94e2e8d63361bc1407b33e26a3f77db10
      total: this.state.query.total,
    };

    this.setState((state) => ({
      shoppingList: [...state.shoppingList, dados],
      query: {
<<<<<<< HEAD
        product: "",
        amount: "1",
        weight: "",
        price: "",
        total: "",
=======
        product: '',
        amount: '1',
        weight: '',
        price: '',
        productValue: '',
        total: '',
>>>>>>> abdbe1f94e2e8d63361bc1407b33e26a3f77db10
      },
    }));
  };
  render() {
    return (
      <>
<<<<<<< HEAD
        <Box sx={{ mt: 1, mx: 1 }}>
          <Grid container xs={12} lg={12} spacing={2}>
            <Grid
              item
              xs={12}
              lg={12}
              spacing={2}
              justifyContent={"center"}
              sx={{ display: "flex", alignContent: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <LocalMallSharpIcon
                  sx={{
                    width: 60,
                    height: 60,
                    alignContent: "center",
                    justifyContent: "center",
                    color: "#398AB9",
                  }}
                />

                <Typography component={"h1"} variant={"h6"}>
                  {"SHOPPING LIST"}
                </Typography>
              </Box>
            </Grid>
            {/* ADICIONAR A LISTA */}
=======
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
>>>>>>> abdbe1f94e2e8d63361bc1407b33e26a3f77db10
            <Grid
              container
              item
              xs={12}
              lg={6}
              spacing={2}
<<<<<<< HEAD
              justifyContent={"center"}
              sx={{ display: "flex", alignContent: "center" }}
            >
              <Grid item lg={12} xs={12}>
                <TextField
                  name="product"
                  placeholder="Product"
                  label="Product"
=======
              justifyContent={'center'}
              sx={{ display: 'flex', alignContent: 'center' }}
            >
              <Grid item lg={12} xs={12}>
                <TextField
                  name='product'
                  placeholder='Product'
                  label='Product'
>>>>>>> abdbe1f94e2e8d63361bc1407b33e26a3f77db10
                  value={this.state.query.product}
                  onChange={this.handleInputChange}
                  fullWidth
                />
              </Grid>

              <Grid item lg={12} xs={12}>
                <TextField
<<<<<<< HEAD
                  name="amount"
                  type={"number"}
                  placeholder="amount"
                  label="amount"
=======
                  name='amount'
                  type={'number'}
                  placeholder='amount'
                  label='amount'
>>>>>>> abdbe1f94e2e8d63361bc1407b33e26a3f77db10
                  value={this.state.query.amount}
                  onChange={this.handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <TextField
<<<<<<< HEAD
                  name="weight"
                  type={"number"}
                  placeholder="weight"
                  label="weight"
=======
                  name='weight'
                  type={'number'}
                  placeholder='weight'
                  label='weight'
>>>>>>> abdbe1f94e2e8d63361bc1407b33e26a3f77db10
                  value={this.state.query.weight}
                  onChange={this.handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <TextField
<<<<<<< HEAD
                  name="price"
                  type={"number"}
                  placeholder="price"
                  label="price"
=======
                  name='price'
                  type={'number'}
                  placeholder='price'
                  label='price'
>>>>>>> abdbe1f94e2e8d63361bc1407b33e26a3f77db10
                  value={this.state.query.price}
                  onChange={this.handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item lg={12} xs={12}>
<<<<<<< HEAD
                <Button variant="contained" onClick={this.list} fullWidth>
                  ADD
                  <AddIcon />
=======
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
>>>>>>> abdbe1f94e2e8d63361bc1407b33e26a3f77db10
                </Button>
              </Grid>
            </Grid>
            {/* TABLE */}
<<<<<<< HEAD
            <Grid item lg={6} xs={12}>
              <Box>
                <TableContainer>
                  <Table
                    size="small"
                    sx={{
                      maxWidth: { xs: 200, sm: "100%" },
                      paddingLeft: "0px",
                      margin: 0,
                    }}
                  >
                    <TableHead>
                      <TableRow>
                        {/* ARRUMAR ESSA BOSTA AQUI!!!!!!!!!!! (FAZER O PAI SETAR O PADING 0 PARA OS FILHOS)*/}
                        <TableCell sx={{ paddingLeft: 0 }}>Product</TableCell>{" "}
=======
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
>>>>>>> abdbe1f94e2e8d63361bc1407b33e26a3f77db10
                        <TableCell sx={{ paddingLeft: 0 }}>Amount</TableCell>
                        <TableCell sx={{ paddingLeft: 0 }}>Weight</TableCell>
                        <TableCell sx={{ paddingLeft: 0 }}>Price</TableCell>
                        <TableCell sx={{ paddingLeft: 0 }}>Total</TableCell>
<<<<<<< HEAD
                        <TableCell sx={{ paddingLeft: 0 }}></TableCell>
=======
>>>>>>> abdbe1f94e2e8d63361bc1407b33e26a3f77db10
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.shoppingList.map((list, index) => {
                        const total = list.price * list.amount;
                        return (
                          <>
                            <TableRow
<<<<<<< HEAD
                              key={"TableRow" + index}
                              sx={{ fontSize: { xs: 10 } }}
=======
                              key={'TableRow' + index}
                              sx={{ fontSize: 10 }}
>>>>>>> abdbe1f94e2e8d63361bc1407b33e26a3f77db10
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
<<<<<<< HEAD
                                {"R$ " + total}
                              </TableCell>
                              <TableCell sx={{ paddingLeft: 0 }}>
                                <Avatar
                                  sx={{
                                    maxWidth: 40,
                                    bgcolor: "#B33030",
                                    width: 30,
                                    height: 30,
                                  }}
                                  onClick={() =>
                                    this.deleteItem(
                                      index,
                                      this.state.shoppingList
                                    )
                                  }
                                >
                                  <ClearIcon />
                                </Avatar>
                              </TableCell>
=======
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
>>>>>>> abdbe1f94e2e8d63361bc1407b33e26a3f77db10
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
