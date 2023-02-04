import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Main.css";

function Main() {
  const [bookmarkclass, setbookmarkclass] = useState("hidden")

// make bookmark option visible
function toggleBookmark() {
  if (bookmarkclass === "hidden"){
    setbookmarkclass("visible");
  }
  else  if (bookmarkclass === "visible"){
    setbookmarkclass("hidden");
  }
}


  //toggle indicator (not sure what toggle means though)
  function handleIndicator(left, width) {
    document.getElementById("genre-indicator").style.left = `${left}em`;
    document.getElementById("genre-indicator").style.width = `${width}em`;
  }

  return (
    <main id="main">
      <div id="genres-container">
        <div id="genre-indicator"></div>
        <h4
          id="genre1"
          onClick={() => {
            handleIndicator(0.9, 4.7);
          }}
        >
          All Genres
        </h4>
        <h4
          id="genre2"
          onClick={() => {
            handleIndicator(6.8, 4.3);
          }}
        >
          Business
        </h4>
        <h4
          id="genre3"
          onClick={() => {
            handleIndicator(12.2, 4);
          }}
        >
          Science
        </h4>
        <h4
          id="genre4"
          onClick={() => {
            handleIndicator(17.2, 3.1);
          }}
        >
          Fiction
        </h4>
        <h4
          id="genre5"
          onClick={() => {
            handleIndicator(21.7, 5);
          }}
        >
          Philosophy
        </h4>
        <h4
          id="genre6"
          onClick={() => {
            handleIndicator(28, 4.6);
          }}
        >
          Biography
        </h4>
        <h4
          onClick={() => {
            handleIndicator(33.9, 3.3);
          }}
          id="genre7"
        >
          History
        </h4>
      </div>
      <hr />

      <div id="main-books-container">
        <div className="main-book">
          <div className="main-book-image">
            <img
              className="book-cover"
              src="https://i.pinimg.com/564x/94/19/78/9419786dec2cb61b68cfd0efd5ea3d51.jpg"
            draggable = "false"
            />
          </div>
          <div className="main-book-details">
            <i
            onClick={
              ()=>{
                toggleBookmark()
              }
            }
             id="moreIcon" className="material-icons">
              more_vert
            </i>
            <div   style = {{visibility : bookmarkclass}} id="bookmark">
  
             <span id="bookmarkSpan">
              <i className="material-icons">bookmark</i>
              <h3  onClick={
              ()=>{
                toggleBookmark()
              }
            }>bookmark</h3></span>
            </div>
            <h3 id="main-book-name">Every Other Weekend</h3>
            <h5 id="main-book-author">by Abigail Johnson</h5>
            <p id="main-book-description">
            lorem ipsum dolor sit amet, consectetur adipis  occident 
            lorem ipsum dolor sit amet, consectetur adipis  occident 
            lorem ipsum dolor sit amet, consectetur adipis  occident 
            lorem ipsum dolor sit amet, consectetur adipis  occident 
            </p>
            <NavLink exact to = "/book"><button id="main-book-button">view</button></NavLink>
          </div>
        </div>
        <div className="main-book">
          <div className="main-book-image">
            <img
              className="book-cover"
              src="https://i.pinimg.com/564x/8b/ae/1a/8bae1a37c088f06ce19b89f10a5b0707.jpg"
              draggable = "false"

            />
          </div>
          <div className="main-book-details">
            <i id="moreIcon" className="material-icons">
              more_vert
            </i>

          </div>
        </div>
        <div className="main-book">
          <div className="main-book-image">
            <img
              className="book-cover"
              src="https://i.pinimg.com/564x/0b/db/82/0bdb82271ac0e04342516fc8b110be59.jpg"
            />
          </div>
          <div className="main-book-details">
            <i id="moreIcon" className="material-icons">
              more_vert
            </i>
          </div>
        </div>
        <div className="main-book">
          <div className="main-book-image">
            <img
              className="book-cover"
              src="https://i.pinimg.com/564x/6f/bc/06/6fbc06cf87ffd972ec94f2b4cb18b47d.jpg"
            />
          </div>
          <div className="main-book-details">
            <i id="moreIcon" className="material-icons">
              more_vert
            </i>
          </div>
        </div>
        <div className="main-book">
          <div className="main-book-image">
            <img
              className="book-cover"
              src="https://i.pinimg.com/564x/6f/bc/06/6fbc06cf87ffd972ec94f2b4cb18b47d.jpg"
            />
          </div>
          <div className="main-book-details">
            <i id="moreIcon" className="material-icons">
              more_vert
            </i>
          </div>
        </div>
        <div className="main-book">
          <div className="main-book-image">
            <img
              className="book-cover"
              src="https://i.pinimg.com/564x/6f/bc/06/6fbc06cf87ffd972ec94f2b4cb18b47d.jpg"
            />
          </div>
          <div className="main-book-details">
            <i id="moreIcon" className="material-icons">
              more_vert
            </i>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
