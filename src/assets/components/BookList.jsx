
import React from 'react';
import './BookList.css';
import { useBooks } from './useBooks';
import SearchBooks from './SearchBooks';

const BookList = () => {
  const { bookList, removeBookFromList } = useBooks();

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
          <li key={index}>{book.volumeInfo.title}
          <button onClick={() => removeBookFromList(book.id)}>Eliminar</button>
          </li>
          
        ))}
      </ul>
    </div>
    </div>
    </>
  );
};

export default BookList;
