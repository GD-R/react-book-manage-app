import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import BookForm from './BookForm'
import { useNavigate } from 'react-router-dom'
import BooksContext from '../context/BooksContext';


const EditBook = () => {

  const navigate = useNavigate()

  const {books , setBooks} = useContext(BooksContext)
  const {id} = useParams();
  const editThisBook = books.find((book) => book.id === id);

  const filterBooks = books.filter((book) => book.id !== id);
 
  const handleOnSubmit = (book) => {
     setBooks([book, ...filterBooks]);
     navigate("/");
  }
     
  return (
    <>
    <BookForm book={editThisBook} handleOnSubmit={handleOnSubmit}/>
    </>
  )
}

export default EditBook
