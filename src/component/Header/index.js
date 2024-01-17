import { CheckCircleFill, Sun, MoonFill } from "react-bootstrap-icons";
import { useContext } from "react";
// import { NavLink, Link } from "react-router-dom";

import "./style.css";
import ThemeContext from "../../Context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <div className="header_container">
        <div className="logo">
          <span className={`${theme === "light" ? "light" : "dark"}`}>
            <CheckCircleFill /> Pomofocus
          </span>
        </div>
        <div className="menu">
          <div className="theme-button">
            {theme === "light" ? (
              <button
                type="button"
                className="dark-button"
                onClick={() => setTheme("dark")}
              >
                <MoonFill />
              </button>
            ) : (
              <button
                type="button"
                className="light-button"
                onClick={() => setTheme("light")}
              >
                <Sun />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
