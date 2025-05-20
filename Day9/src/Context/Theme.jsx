import { createContext, useState } from "react";
import './styletheme.css'
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const ChangeTheme = () => {
    setTheme(prev =>!prev);
  };
console.log(theme);
document.body.style.backgroundColor=theme?'black':'white'   
document.body.style.color=theme?'white':'black'

  return (
    <ThemeContext.Provider value={{ theme, setTheme, ChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
