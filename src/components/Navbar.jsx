import React, { useEffect } from "react";

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
// save mode to localStorage
const saveMode = () => {
  return localStorage.getItem("darkMode") || "light";
};

function Navbar() {
  const { title } = useParams();
  const [theme, setTheme] = useState(saveMode());
  const handleThemeToggle = () => {
    const newTheme = theme == "dark-mode" ? "light" : "dark-mode";
    setTheme(newTheme);
  };
  useEffect(() => {
    localStorage.setItem("darkMode", theme);
    document.body.classList = "";
    document.body.classList.add(theme);
  }, [theme]);
  return (
    <header>
      <div className="header-container contanier">
        <div>
          {title && (
            <Link to="/" className="header-logo">
              <figure>
                <img
                  src={`../assets/icon-${title.toLowerCase()}.svg`}
                  alt={`${title} icon`}
                />
              </figure>
              <span>{title}</span>
            </Link>
          )}
        </div>
        <div onClick={handleThemeToggle}>
          <div className="dark-btn">
            <input type="checkbox" checked={theme == "dark-mode"} readOnly />
            <span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
