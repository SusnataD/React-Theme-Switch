import { createContext, useReducer } from "react";

export const themeContext = createContext();

const initialState = { darkMode : false }

const themeReducer = (state, action) => {
    if(action.type === 'LIGHTMODE'){
        return { darkMode : false };
    }
    if(action.type === 'DARKMODE') {
        return { darkMode : true }
    }
    return state;
}

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    return (
        <themeContext.Provider value={{state,dispatch}}>{props.children}</themeContext.Provider>
    )
}