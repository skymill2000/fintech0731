import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ListComponent from "./components/ListComponent";
import StyledComponent from "./components/StyledComponent";
import AxiosComponent from "./components/AxiosComponent";
import NewsPage from "./pages/NewsPage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
