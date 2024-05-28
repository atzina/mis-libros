import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

const BookDetails = () => {
    const {id} = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
      const data = await response.json();
      setBook(data);
    };
    fetchBookDetails();
  }, [id]);

  if (!book) return <div>Cargando...</div>;

  return (
    <div>
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.description}</p>
      <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
      <p>{book.volumeInfo.publishedDate}</p>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
    </div>
  );
}

export default BookDetails;
