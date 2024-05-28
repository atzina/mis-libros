import { createContext, useContext } from 'react';

const BooksContext = createContext();

export const useBooks = () => useContext(BooksContext);

export { BooksContext };