import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Nav from "./Nav";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";

export default function Header() {
  // Toggle for navbar visibility
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    setIsBurgerOpen(!isBurgerOpen);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <header className="header">
      <Link className="logo" to="/">
        Austin Scott
      </Link>

      {(!isSmallScreen || isNavVisible) && <Nav />}
      <Burger
        className="menu-button"
        isOpen={isBurgerOpen}
        onClick={toggleNav}
      />
    </header>
  );
}
