import React, { useState } from "react";
import "../styles/header.css";

function Header() {
  const [categorymenustate, setCategoryMenuState] = useState(false);
  const [categories, setCategory] = useState("Categories");
  const [arrow, setArrow] = useState("arrow_drop_down");
  const [iconVisibility, setIconVisibility] = useState("hidden");
  const [menuActive, setMenuActive] = useState(false);
  const [menuState, setMenuState] = useState(false);

  let categorymenu = categorymenustate ? "active" : "inactive";
  let sitemenu = menuState ? "menuActive" : "menuInactive";

  //expand category menu

  function expandMenu() {
    if (categorymenustate === false) {
      setCategoryMenuState(true);
      setArrow("arrow_drop_up");
    }
    if (categorymenustate === true) {
      setCategoryMenuState(false);
      setArrow("arrow_drop_down");
    }
  }

  //   minimize menu

  function minimizeMenu(selectedCategory) {
    setCategory(selectedCategory);
    setCategoryMenuState(false);
    setArrow("arrow_drop_down");
  }

  // menu animation

  function animateIcon() {
    let bar1 = document.getElementById("bar1");
    let bar2 = document.getElementById("bar2");
    let bar3 = document.getElementById("bar3");
    if (menuActive === false) {
      bar1.style.opacity = 0;
      bar2.style.transform = "rotateZ(45deg)";
      bar3.style.width = "2em";
      bar3.style.transform = "rotateZ(-45deg)";
      bar3.style.left = "5px";
      bar3.style.top = "0px";
      setMenuActive(true);
    } else if (menuActive === true) {
      bar1.style.opacity = 1;
      bar2.style.transform = "rotateZ(0deg)";
      bar3.style.width = "1.5em";
      bar3.style.transform = "rotateZ(0deg)";
      bar3.style.left = "0px";
      bar3.style.top = "0px";
      setMenuActive(false);
    }
  }

  // site menu toggle

  function handleSiteMenu(){
    if (menuActive === false) {
      setMenuState(true);
    }
    if (menuActive === true) {
      setMenuState(false);
    }
  }

  return (
    <header id="header">
      <div id="select">
        <span
          onClick={() => {
            expandMenu();
          }}
          id="categories"
        >
          <h6>{categories}</h6>
          <i className="material-icons">{arrow}</i>
        </span>
        <div className={categorymenu} id="categoryList">
          <span>
            <h6
              onClick={() => {
                minimizeMenu("All");
              }}
            >
              All
            </h6>
          </span>
          <span>
            <h6
              onClick={() => {
                minimizeMenu("Books");
              }}
            >
              Books
            </h6>
          </span>
          <span>
            <h6
              onClick={() => {
                minimizeMenu("Magazines");
              }}
            >
              Magazines
            </h6>
          </span>
        </div>
      </div>

      <div id="input-container">
        <input
          onFocusCapture={() => {
            setIconVisibility("hidden");
          }}
          onChange={() => {
            setIconVisibility("visible");
          }}
          type="text"
          id="textInput"
          placeholder="Search Book"
        ></input>
        <i
          style={{ visibility: iconVisibility }}
          id="searchIcon"
          className="material-icons"
        >
          search
        </i>
      </div>
      {/* logo */}
      <div id="logo-container">
        <h3>
          <span id="just">read</span>
          <span id="webname">books</span>
        </h3>
      </div>

      <div id="menu">
        <div
          onClick={() => {
            handleSiteMenu()
            animateIcon();
          }}
          id="menuIcon"
        >
          <div className="bar" id="bar1"></div>
          <div className="bar" id="bar2"></div>
          <div className="bar" id="bar3"></div>
        </div>
        <div className={sitemenu} id="menu-content">
          <span><h3>Sign In</h3> <i className="material-icons">chevron_right </i></span>
          <span><h3>Create Account</h3><i className="material-icons">chevron_right </i></span>
          <span><h3>About</h3><i className="material-icons">chevron_right </i></span>
          <span><h3>Bookmarks</h3><i className="material-icons">chevron_right </i></span>
          <span><h3>Settings</h3><i className="material-icons">chevron_right </i></span>
          <span id="logout"><h3>Log out</h3><i className="material-icons">chevron_right </i></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
