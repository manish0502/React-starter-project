import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client';
import Book from "./Book";
import { myBooks } from "./books";
// CSS
import "./index.css";




function BookList() {
  return (
    <section className="booklist">
      {myBooks.map((book) => {
        const { IMG, title, author } = book;
        return <Book  key ={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// ReactDOM.render(<BookList />, document.getElementById("root"));
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<BookList />);
