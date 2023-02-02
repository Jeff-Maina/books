import React, { useState } from "react";
import "../styles/header.css";

function Header() {
  const [categorymenustate, setCategoryMenuState] = useState(false);
  const [categories, setCategory] = useState('Categories');
  const [arrow,setArrow] = useState('arrow_drop_down');

  let categorymenu = categorymenustate ? "active" : "inactive";

  //expand category menu

  function expandMenu() {
    if(categorymenustate === false){
        setCategoryMenuState(true)
        setArrow('arrow_drop_up')
    }
    if(categorymenustate === true){
        setCategoryMenuState(false)
        setArrow('arrow_drop_down')

    }
  }

//   minimize menu

function minimizeMenu(selectedCategory) {
    setCategory(selectedCategory)
    setCategoryMenuState(false)
    setArrow('arrow_drop_down')
}

  return (
    <header id="header">
      <div id="select">
        <span onClick={()=>{expandMenu()}} id="categories">
          <h6>{categories}</h6>
          <i className="material-icons">{arrow}</i>
        </span>
       <div  className={categorymenu}  id="categoryList">
       <span>
          <h6 onClick={()=>{minimizeMenu("All")}}>All</h6>
        </span>
        <span>
          <h6 onClick={()=>{minimizeMenu("Books")}}>Books</h6>
        </span>
        <span>
          <h6 onClick={()=>{minimizeMenu("Magazines")}}>Magazines</h6>
        </span>
       </div>
      </div>

      
    </header>
  );
}

export default Header;
