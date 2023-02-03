import React, { useState } from "react";
import "../styles/Randombooks.css";

function Randombooks() {
const [slideShowActive, setSlideShowActive] = useState(true)

function slideLeft() {
  document.getElementById('randombooks').scrollLeft -= 660;

}


// sliding animation

// setInterval(()=>{
//   if(slideShowActive === true) {
//     document.getElementById('randombooks').scrollLeft += 660;
//   }
// },4000)

function slideRight() {
  document.getElementById('randombooks').scrollLeft += 660;
  if (document.getElementById('randombooks').scrollLeft > 5280){
 document.getElementById('randombooks').scrollLeft = 0
}
 }


    return ( 
        <div id="randombooks">
        <div onClick={slideLeft} id="previous">
          <i className="material-icons">chevron_left</i>
        </div>
        <div onClick={slideRight} id="next">
          <i className="material-icons">chevron_right</i>
        </div>
          <div className="randomBook"></div>
          <div className="randomBook">
              <div id="imagecard">
                <img src="https://i.pinimg.com/564x/71/d4/68/71d468eb9c5d0ae01b4352215f9b7ea3.jpg" />
              </div>
              <div id="book-details">
              <h2 id="randombook-name">The Great Gatsby</h2>
              <h6 id="authorname">by F. Scott Fitzgerald</h6>
              <div id="bookrating">
              <input type="radio" name="rating" value="5" id="5"/><label for="5">★</label>
              <input type="radio" name="rating" value="4" id="4"/><label for="4">★</label>
              <input type="radio" name="rating" value="3" id="3"/><label for="3">★</label>
              <input type="radio" name="rating" value="2" id="2"/><label for="2">★</label>
              <input type="radio" name="rating" value="1" id="1"/><label for="1">★</label>   
              </div>
             <span>
              <p>
                lorem ipsum dolor sit amet, consectetur adip  occurence velit sed diam nonum et just sed diam nonum et just labor
              </p>
             </span>
             <button id="check-btn">Check out</button>
              </div>
             
          </div>
          <div className="randomBook"></div>
          <div className="randomBook"></div>
          <div className="randomBook"></div>
          <div className="randomBook"></div>
          <div className="randomBook"></div>
          <div className="randomBook"></div>
          <div className="randomBook"></div>
          <div className="randomBook"></div>
          <div className="randomBook"></div>
        </div>
     );
}

export default Randombooks;