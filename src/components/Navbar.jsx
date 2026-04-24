import React, { useEffect, useState } from "react";

function Navbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.body.classList.add("light");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;

    if (nextIsDark) {
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }

    setIsDark(nextIsDark);
  };

  return (
    <nav className="navbar">
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>

      <button
        className="navbar__toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {isDark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;