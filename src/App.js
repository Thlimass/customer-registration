import React from 'react';
import Header from '../src/Components/Header/index'
import Main from '../src/Components/Main/index'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
//   const customers = [
//     {
//       primeiroNome: 'João',
//       ultimoNome: 'Silva',
//       nascimento: '04-07-1985',
//       cpf: '234.198.045-44',
//       estadoCivil: 'solteiro',
//       genero: 'masculino',
//       cor: 'preta',
//       altura: '1.80',
//       tipoSanguineo: 'O+',
//       massaMuscular: '87.0'
// },
//   {
//       primeiroNome: 'Maria',
//       ultimoNome: 'Souza',
//       nascimento: '15-02-1980',
//       cpf: '067.142.543-21',
//       estadoCivil: 'casado(a)',
//       genero: 'feminino',
//       cor: 'branca',
//       altura: '1.77',
//       tipoSanguineo: 'O-',
//       massaMuscular: '80.0'
//   }
//   ];
  return (
    <div className="App">
    <Header />
    <Main />
    </div>
  );
}

export default App;
