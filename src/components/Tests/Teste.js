import { React, Component } from 'react';
let dados = ['joao', 'paulo', 'ana'];
const novosDados = dados.splice(1, 1);

class Teste extends Component {
  render() {
    console.log(dados, novosDados);
    return <></>;
  }
}

export default Teste;
