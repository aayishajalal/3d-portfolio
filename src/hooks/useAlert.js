import React, { useState } from "react";
//reuse multiple times across the project
const useAlert = () => {
  /* 1. useState -- alert, 
  setAlert -- to handle error & success
  = useState({show: false, text:" ", type:"danger"})
  2. showAlert({text, type="danger"}) - setAlert 
  3. hideAlert()=>{
    setAlert({show:false})}
  */

  const [alert, setAlert] = useState({
    show: false,
    text: " ",
    type: "danger",
  });

  const showAlert = ({ text, type = "danger" }) =>
    setAlert({
      show: true,
      text,
      type,
    });

  const hideAlert = () =>
    setAlert({
      show: false,
      text: "",
      type: "danger",
    });
  return { alert, showAlert, hideAlert };
};

export default useAlert;
