import logo from './logo.svg';
// import "./App.css";
import Singup from './components/SingUp/Singup';
import Login from './components/Login/Singin';
import Form from './components/FormTest/Form';
import TodoList from './components/TodoList/TodoList';
import Teste from './components/Tests/Teste';
function App() {
  return (
    <div className='App'>
      {/* <Login /> 
      <Singup />
      <Form />  */}
      <TodoList />
      <Teste />
    </div>
  );
}

export default App;
