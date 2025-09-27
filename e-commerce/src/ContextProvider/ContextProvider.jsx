import React, { createContext, useContext, useState } from "react";
const contextDistributor = createContext();

const ContextProvider = ({ children }) => {
  const [dialogState, setDialogState] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dialogOpen = (product)=> {
    setSelectedProduct(product);
    setDialogState(true);

  }
  const dialogClose = ()=> {
    setSelectedProduct(null);
    setDialogState(false);
  }
  const values = { dialogState, dialogOpen, dialogClose , selectedProduct};
  return <contextDistributor.Provider  value={values}>{children}</contextDistributor.Provider>;
};

export default ContextProvider;
export  const useDialog = ()=> useContext(contextDistributor);
