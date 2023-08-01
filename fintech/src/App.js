import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import StateComponent from "./components/StateComponent";

function App() {
  return (
    <div className="App">
      <Welcome userName="홍길동" age={14}></Welcome>
      <Welcome userName="김길동" age={34}></Welcome>
      <StateComponent></StateComponent>
    </div>
  );
}

export default App;
