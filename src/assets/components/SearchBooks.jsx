import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useBooks} from './useBooks'


const SearchBooks = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const { addBookToList } = useBooks();

  const handleSearch = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await response.json();
    setResults(data.items || []);
    console.log(data);

}

const handleAddToBookList = (book) => {
    addBookToList(book);
    
   
  };


  return (
    <>
    <h4>Buscar Libros</h4>
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Buscar libros..."
      />
      <button onClick={handleSearch}>Buscar</button>
      <ul>
        {results.map(book => (
          <li key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
            
            <Link to={`/book-details/${book.id}`}>Ver detalles</Link>
            <button onClick={() => handleAddToBookList(book)}>Agregar a lista</button>
          </li>
        ))}
      </ul>
    </div>
    </>
)

}





  

export default SearchBooks;