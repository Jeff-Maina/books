import React, { useState } from "react";
import "../styles/header.css";
import settings from "../images/gear.png"

function Homenav() {
  const [menuActive, setMenuActive] = useState(false);
  const [menuState, setMenuState] = useState(false);

  let sitemenu = menuState ? "menuActive" : "menuInactive";

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
      {/* logo */}
      <div id="logo-container">
        <h3>
          <span id="just">read</span>
          <span id="webname">books</span>
        </h3>
      </div>

      <div id="menu">
      <i id="notifIcon" class="fa fa-bell-o"></i>
      <div id="vertical-line"></div>
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
          <span><i id="menuIcons" className="material-symbols-outlined">login</i><h3>Sign In</h3> <i id="chevron" className="material-icons">chevron_right </i></span>
          <span><i id="menuIcons" className="material-symbols-outlined">person</i><h3>Create Account</h3><i id="chevron" className="material-icons">chevron_right </i></span>
          <span><i id="menuIcons" className="material-symbols-outlined">info</i><h3>About</h3><i id="chevron" className="material-icons">chevron_right </i></span>
          <span><i id="menuIcons" className="material-symbols-outlined">bookmark</i><h3>Bookmarks</h3><i id="chevron" className="material-icons">chevron_right </i></span>
          <span><i id="menuIcons" className="material-symbols-outlined">settings</i><h3>Settings</h3><i id="chevron" className="material-icons">chevron_right </i></span>
          <span><i id="menuIcons" className="material-symbols-outlined">dark_mode</i><h3>Dark Mode</h3></span>
          <hr/>
          <span id="logout"><i id="menuIcons" className="material-symbols-outlined">person</i><h3>Log out</h3><i id="chevron" className="material-icons">chevron_right </i></span>
        </div>
      </div>
    </header>
  );
}

export default Homenav;
