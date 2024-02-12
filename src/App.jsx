import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetStyles from "./GlobalStyles/ResetStyles.js";
import GlobalStyles from "./GlobalStyles/GlobalStyles.js";
import MainPage from "./Pages/MainPage.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <>
    <ResetStyles />
    <GlobalStyles />
    <Header />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
