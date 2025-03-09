import React from "react";
import { useTheme } from "./ThemeContext";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="section">
      <div className="container">
        <div className="box has-text-centered">
          <h1 className={`title ${theme === "light" ? "has-text-black" : "has-text-white"}`}>Theme Toggle App</h1>
          <button className={`button is-large ${theme === "light" ? "is-dark" : "is-light"}`} onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;