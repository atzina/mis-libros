
import React from 'react';
import { useBooks } from './useBooks';
import SearchBooks from './SearchBooks';

const BookList = () => {
  const { bookList } = useBooks();

  return (
    <>
    <section>
        <SearchBooks/>
    </section>
    <div>
      <h2>Lista de Libros Añadidos</h2>
      <ul>
        {bookList.map((book, index) => (
          <li key={index}>{book.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default BookList;
