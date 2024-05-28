import React, {  useState } from 'react';
import PropTypes from 'prop-types';
import { BooksContext } from './useBooks';






const BooksProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]);

  const addBookToList = (book) => {
    setBookList((prevBooks) => [...prevBooks, book]);
    console.log("Book added:", book);
  };


  return (
    <BooksContext.Provider value={{ bookList, addBookToList }}>
      {children}
    </BooksContext.Provider>
  );
};

//regla de validación para children
BooksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BooksProvider, BooksContext };
