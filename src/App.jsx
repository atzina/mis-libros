import { Routes, Route } from "react-router-dom"
import './App.css'
import BookDetails from "./assets/components/BookDetails"
import BookItem from "./assets/components/BookItem"
import BookList from "./assets/components/BookList"
import SearchBooks from "./assets/components/SearchBooks"
import { BooksProvider } from './assets/components/BooksContext'
import { BooksContext } from "./assets/components/BooksContext"


function App() {
  
  return (
    <>
       <BooksProvider>
         <Routes>
            <Route path = "/" element ={<BookList/>}/>
            <Route path = "book-item" element ={<BookItem/>}/>
            <Route path = "search-books" element ={<SearchBooks/>}/>
            <Route path = "book-details/:id" element ={<BookDetails/>}/>
            <Route path = "list" element ={<BooksContext/>}/>
          </Routes>
        </BooksProvider>

    </>
  )
}

export default App
