import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
      </Routes> 
      <BookForm />     
    </div>
  );
}

export default App;
