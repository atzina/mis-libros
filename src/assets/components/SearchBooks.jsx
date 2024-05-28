import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBooks = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await response.json();
    setResults(data.items || []);
    console.log(data);

}


  return (
    <>
    <h1>Buscar Libros</h1>
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
          </li>
        ))}
      </ul>
    </div>
    </>
)

}





  

export default SearchBooks;