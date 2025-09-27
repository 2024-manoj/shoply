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
// import { Dialog } from "@mui/material";

function App() {
  return (
    <>
      <ContextProvider>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
        {/* <Features /> */}
        < ProductDialog />
        <Features />
      </ContextProvider>
    </>
  );
}

export default App;
