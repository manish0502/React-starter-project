import React from "react";

// CSS
import "./index.css";

const Book = ({ IMG, title, author }) => {
  //const { IMG, title, author } = props;

  // attribute eventHandler
  // onClick onMouseOver

  // ClickHandler

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target)
    alert("Hello World")
  }

  const someMoreComplex =(author) =>{
      console.log("here is authors" , author)
  }
 


  return (
    <article className="book" onMouseOver={() =>{
      console.log("title is :" , title)
    }}>
      <img src={IMG} alt="Image not found" height="230px" width="50%" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>ref example</button> 
      <button type="button" onClick ={ () => someMoreComplex(author) }>some more complex</button>
    </article>
  );
};

export default Book;
