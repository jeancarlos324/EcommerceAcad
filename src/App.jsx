import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Purchases from "./routes/Purchases";
import Home from "./routes/Home";
import ProductDetail from "./routes/ProductDetail";
import Product from "./routes/Product";
import NavigatorStore from "./components/NavigatorStore";
import LoadingScreen from "./components/LoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "./store/slice/product.slice";
import { useEffect } from "react";
import ProtectedRoutes from "./components/ProtectedRoutes";
import FooterStore from "./components/FooterStore";
import Register from "./routes/Register";
//npm install react-bootstrap
//npm install @reduxjs/toolkit react-redux

function App() {
  const dispatch = useDispatch();
  const isLoadingScreen = useSelector((state) => state.setIsLoading);
  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);
  //console.log(isLoadingScreen);
  return (
    <HashRouter>
      <div className="bg-secondary-color">
        {isLoadingScreen && <LoadingScreen />}
        <NavigatorStore />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
          </Route>
        </Routes>
        <FooterStore />
      </div>
    </HashRouter>
  );
}

export default App;
