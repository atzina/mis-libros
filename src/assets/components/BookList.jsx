
import React from 'react';
import './BookList.css';
import { useBooks } from './useBooks';
import SearchBooks from './SearchBooks';

const BookList = () => {
  const { bookList } = useBooks();

  return (
    <>
    <div className='principal'>
    <section className='comp-search'>
        <SearchBooks/>
    </section>
    <div className='div-list'>
      <h3>Lista de Libros Añadidos</h3>
      <ul>
        {bookList.map((book, index) => (
          <li key={index}>{book.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
};

export default BookList;
