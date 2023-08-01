import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import StateComponent from "./components/StateComponent";
import InputComponent from "./components/InputComponent";
import StyledComponent from "./components/StyledComponent";

function App() {
  return (
    <div className="App">
      <InputComponent></InputComponent>
      <StyledComponent></StyledComponent>
    </div>
  );
}

export default App;
