import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "./context";

const Navbar = (e) => {
  const { appClass, setAppClass } = useGlobalContext();
  const primaryNavRef = useRef(null);

  // Toggle Nav
  const toggleNav = (e) => {
    const primaryNav = primaryNavRef.current;
    const toggleBtn = e.target;
    const isNavOpen = primaryNav.getAttribute("data-visible");

    if (isNavOpen === "true") {
      primaryNav.setAttribute("data-visible", false);
      toggleBtn.setAttribute("aria-expanded", false);
    } else {
      primaryNav.setAttribute("data-visible", true);
      toggleBtn.setAttribute("aria-expanded", true);
    }
  };

  return (
    <>
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>
      <header className="primary-header | flex">
        <div>
          <img
            src="/assets/shared/logo.svg"
            alt="space tourism logo"
            className="logo"
          />
        </div>

        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={(e) => toggleNav(e)}
        >
          <span className="sr-only">Menu</span>
        </button>

        <nav>
          <ul
            id="primary-navigation"
            className="primary-navigation | underline-indicators flex"
            data-visible="false"
            ref={primaryNavRef}
          >
            <li className={appClass === "home" ? "active" : ""}>
              <Link
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                to="/"
              >
                <span aria-hidden="true">00</span>Home
              </Link>
            </li>
            <li className={appClass === "destination" ? "active" : ""}>
              <Link
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                to="/destination"
              >
                <span aria-hidden="true">01</span>Destination
              </Link>
            </li>
            <li className={appClass === "crew" ? "active" : ""}>
              <Link
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                to="/crew"
              >
                <span aria-hidden="true">02</span>Crew
              </Link>
            </li>
            <li className={appClass === "technology" ? "active" : ""}>
              <Link
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                to="/technology"
              >
                <span aria-hidden="true">03</span>Technology
              </Link>
            </li>
          </ul>
        </nav>

        {/* primary-header::after element */}
      </header>
    </>
  );
};

export default Navbar;
