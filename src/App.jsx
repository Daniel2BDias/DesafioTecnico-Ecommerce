import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetStyles from "./GlobalStyles/ResetStyles.js";
import GlobalStyles from "./GlobalStyles/GlobalStyles.js";
import MainPage from "./Pages/MainPage.jsx";
import Header from "./components/Header/Header.jsx";
import ProductOverview from "./Pages/ProductOverview.jsx";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.jsx";
import { useState } from "react";
import Resume from "./Pages/Resume.jsx";

function App() {
  const [cartState, setCartState] = useState(false);
  const [cart, setCart] = useState([]);

  function cartController () {
        setCartState(!cartState);
  };

  return (
    <>
    <ResetStyles />
    <GlobalStyles />
      <BrowserRouter>
      <Header cartController={cartController}/>
      <ShoppingCart cartState={cartState} cart={cart} setCart={setCart} setCartState={setCartState}/>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/product/:id/" element={<ProductOverview setCart={setCart}/>}></Route>
            <Route path="/resume" element={<Resume cart={cart} />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
