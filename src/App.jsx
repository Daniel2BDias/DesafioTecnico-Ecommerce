import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetStyles from "./GlobalStyles/ResetStyles.js";
import GlobalStyles from "./GlobalStyles/GlobalStyles.js";
import MainPage from "./Pages/MainPage.jsx";
import Header from "./components/Header/Header.jsx";
import ProductOverview from "./Pages/ProductOverview.jsx";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.jsx";
import Resume from "./Pages/Resume.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";

function App() {

  return (
    <>
      <ResetStyles />
      <GlobalStyles />
      <CartProvider>
        <BrowserRouter>
          <Header />
          <ShoppingCart
          />
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route
              path="/product/:id/"
              element={<ProductOverview />}
            ></Route>
            <Route path="/resume" element={<Resume />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
