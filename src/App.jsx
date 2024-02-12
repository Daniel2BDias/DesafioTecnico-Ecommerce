import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetStyles from "./GlobalStyles/ResetStyles.js";
import GlobalStyles from "./GlobalStyles/GlobalStyles.js";
import MainPage from "./Pages/MainPage.jsx";
import Header from "./components/Header/Header.jsx";
import ProductOverview from "./Pages/ProductOverview.jsx";

function App() {
  
  return (
    <>
    <ResetStyles />
    <GlobalStyles />
      <BrowserRouter>
      <Header />
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/product/:id/" element={<ProductOverview />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
