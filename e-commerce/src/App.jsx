import { useState } from "react";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import MainHeader from "./Components/MainHeader/MainHeader";
import Fashion from "./Pages/Fashion/Fashion";

function App() {

  return (
    <>
     < MainHeader/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/fashion" element={<Fashion/>}/>
      </Routes>
    </>
  );
}

export default App;
