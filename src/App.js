import logo from "./logo.svg";
// import "./App.css";

import Singup from "./components/SingUp/SignUp";
import Login from "./components/Login/Signin";
import Form from "./components/FormTest/Form";
import TodoList from "./components/TodoList/TodoList";
import Teste from "./components/Tests/Teste";
import CardManga from "./components/Card/CardManga";
function App() {
  return (
    <div className="App">
      {/* <Login /> 
      <Singup />
      <Form /> 
      <TodoList />
      <Teste /> */}
      <CardManga />
    </div>
  );
}

export default App;
