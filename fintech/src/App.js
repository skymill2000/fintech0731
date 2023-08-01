import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ListComponent from "./components/ListComponent";
import StyledComponent from "./components/StyledComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome></Welcome>}></Route>
        <Route path="/list" element={<ListComponent />}></Route>
        <Route path="/style" element={<StyledComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
