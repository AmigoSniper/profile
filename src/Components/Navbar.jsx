import React, { useState, useEffect } from "react";
import Hours from "./Hours";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";

const Nav = () => {
  const [navbarblur, setnavbarblur] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        setnavbarblur(true);
      } else {
        setnavbarblur(false);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const showMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");
    ham[0].classList.toggle("showNavbar");
  };

  const hideMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };

  return (
    <nav className={navbarblur ? "Navbar blur" : "Navbar"}>
      <h1
        title="Reload"
        onClick={() => window.location.reload(true)}
        className="Logo"
      >
        AmigoSniper
      </h1>

      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="NavbarLinks">
        <li onClick={hideMenu}>
          <a href="#Home">
            <AiOutlineHome /> Home
          </a>
        </li>
        <li onClick={hideMenu}>
          <a href="#About">
            <BsPerson /> About
          </a>
        </li>
        <li onClick={hideMenu}>
          <a href="#Projects">
            <BsCodeSlash /> Projects
          </a>
        </li>
        <li onClick={hideMenu}>
          <a href="#Contact">
            <CgPhone />
            Contact
          </a>
        </li>
        <li onClick={hideMenu}>
          <Hours />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;