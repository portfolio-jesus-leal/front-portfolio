import React, { useContext } from 'react';
import { Button } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ThemeContext from "../../context/ThemeContext";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeContext)
  
    return (
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="button-theme"
      >
        <img src={theme === "dark" ? LightModeIcon : DarkModeIcon} className="theme-icon" alt="theme" />
      </Button>  
    )
  }

  export default ThemeSwitcher;