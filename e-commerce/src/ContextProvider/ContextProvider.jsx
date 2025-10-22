import React, { createContext, useContext, useState } from "react";
const contextDistributor = createContext();

const ContextProvider = ({ children }) => {
  const [dialogState, setDialogState] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartDrawer,setCartDrawer] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const dialogOpen = (product)=> {
    setSelectedProduct(product);
    setDialogState(true);

  }

  const openDrawer = () =>{
    setCartDrawer(true);
  }

  const closedDrawer = () => {
    setCartDrawer(false);
  }

  const toggleDrawer = ()=> {
    setCartDrawer((prev)=>!prev)
  }
  const dialogClose = ()=> {
    setSelectedProduct(null);
    setDialogState(false);
  }
  const values = { dialogState, dialogOpen, dialogClose , selectedProduct, cartDrawer, openDrawer, closedDrawer, toggleDrawer
    , isLogin, setIsLogin
  };
  return <contextDistributor.Provider  value={values}>{children}</contextDistributor.Provider>;
};

export default ContextProvider;
export  const useDialog = ()=> useContext(contextDistributor);
