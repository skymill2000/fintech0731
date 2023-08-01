import logo from "./logo.svg";
import "./App.css";

const Welcome = () => {
  return (
    <div>
      <p>안녕하세요 홍길동 님!</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
    </div>
  );
}

export default App;
