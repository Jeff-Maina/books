import React from "react";
import "../styles/Aside.css"

function Aside() {
    return ( 
        <div id="aside">
          <div id="authors-container">
            <h2 id="authors-title">Author of the week</h2>
             <span id="author-span"><div style={{backgroundImage : 'url(https://i.pinimg.com/736x/51/fd/e8/51fde874559486c04a85d7a91a43e352.jpg)'}} id="author-image"></div><h5 id="author-name">Sebastian Alvarez</h5></span>
             <span id="author-span"><div style={{backgroundImage : 'url(https://i.pinimg.com/564x/3f/19/de/3f19de837c52f9e23af1d0e2cbafc4dd.jpg)'}} id="author-image"></div><h5 id="author-name">Lilu tores</h5></span>
             <span id="author-span"><div style={{backgroundImage : 'url(https://i.pinimg.com/564x/0b/10/20/0b1020995b8bd92a687f03ba76a866b2.jpg)'}} id="author-image"></div><h5 id="author-name">Angelina Joline</h5></span>
             <span id="author-span"><div style={{backgroundImage : 'url(https://i.pinimg.com/736x/68/4a/37/684a37d81cce179f54866420d08a81f8.jpg)'}} id="author-image"></div><h5 id="author-name">Brad Pitt</h5></span>
             <span id="author-span"><div style={{backgroundImage : 'url(https://i.pinimg.com/564x/0a/85/a7/0a85a7739309280de6483207337a86b4.jpg)'}} id="author-image"></div><h5 id="author-name">Zylensky madagascer</h5></span>
             <span id="author-span"><div style={{backgroundImage : 'url(https://i.pinimg.com/736x/ba/7a/89/ba7a896a01449d0141cffc5f59b18180.jpg)'}} id="author-image"></div><h5 id="author-name">Sebastian Alvarez</h5></span>
          </div>
          <div id="books-container">
            <h2 id="books-title">Books of the week</h2>
            <div id="books-holder">
            <span className="book-span"><div className="book-image"  style={{backgroundImage : 'url(https://i.pinimg.com/564x/94/19/78/9419786dec2cb61b68cfd0efd5ea3d51.jpg)'}}></div><span className="detailsBook"><h5 className="book-name">The Great Gatsby</h5><h6 className="bookAuthor">by Jeff Maina</h6></span></span>
            <span className="book-span"><div className="book-image"  style={{backgroundImage : 'url(https://i.pinimg.com/564x/8b/ae/1a/8bae1a37c088f06ce19b89f10a5b0707.jpg)'}}></div><span className="detailsBook"><h5 className="book-name">Nobody Knows</h5><h6 className="bookAuthor">by Rl stine</h6></span></span>
            <span className="book-span"><div className="book-image"  style={{backgroundImage : 'url(https://i.pinimg.com/564x/0e/a0/1d/0ea01d0127013075212d885720144fc6.jpg)'}}></div><span className="detailsBook"><h5 className="book-name">Nineth Life</h5><h6 className="bookAuthor">by Jeff Maina</h6></span></span>
            <span className="book-span"><div className="book-image"  style={{backgroundImage : 'url(https://i.pinimg.com/736x/ba/7a/89/ba7a896a01449d0141cffc5f59b18180.jpg)'}}></div><span className="detailsBook"><h5 className="book-name">The Great Gatsby</h5><h6 className="bookAuthor">by Jeff Maina</h6></span></span>
            </div>
          </div>
        </div>
     );
}

export default Aside;