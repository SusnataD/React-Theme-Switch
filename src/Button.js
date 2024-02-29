import "./App.css";
import React, { useContext } from "react";
import { themeContext } from "./theme-context";

export default function SwitchButton(props) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const themeChangeHandler = () => {
    if(darkMode){
      theme.dispatch({type:'LIGHTMODE'})
    }
    else theme.dispatch({type:'DARKMODE'})
  }

  return (
  <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={themeChangeHandler}>
  {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
  </button>);
}
