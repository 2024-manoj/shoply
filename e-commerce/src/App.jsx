import { useState } from "react";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import MainHeader from "./Components/MainHeader/MainHeader";
import Fashion from "./Pages/Fashion/Fashion";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Features from "./Components/Features/Features";
import ContextProvider from "./ContextProvider/ContextProvider";
import ProductDialog from "./Components/ProductDialog/ProductDialog";
// import { Login } from "@mui/icons-material";
// import { Dialog } from "@mui/material";
import Login from './Pages/Login/Login'
function App() {
  return (
    <>
      <ContextProvider>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        {/* <Features /> */}
        < ProductDialog />
        <Features />
      </ContextProvider>
    </>
  );
}

export default App;
