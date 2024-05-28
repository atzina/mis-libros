import { Routes, Route } from "react-router-dom"
import './App.css'
import BookDetails from "./assets/components/BookDetails"
import BookItem from "./assets/components/BookItem"
import BookList from "./assets/components/BookList"
import SearchBooks from "./assets/components/SearchBooks"


function App() {
  
  return (
    <>
      <Routes>
        <Route path = "/" element ={<BookList/>}/>
        <Route path = "book-item" element ={<BookItem/>}/>
        <Route path = "book-list" element ={<SearchBooks/>}/>
        <Route path = "book-details" element ={<BookDetails/>}/>
      </Routes>
    </>
  )
}

export default App
