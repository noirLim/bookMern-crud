import React from "react";
import { Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import About from "./components/About";
import Books from "./components/Book/Books";
import BookDetail from "./components/Book/BookDetail";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books" element={<Books/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/books/:id" element={<BookDetail/>} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
