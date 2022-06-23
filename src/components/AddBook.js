import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import BooksContext from '../context/BooksContext';
import BookForm from './BookForm'

const AddBook = () => {

  const {books,setBooks} = useContext(BooksContext);
  const navigate = useNavigate()
   
    const handleOnSubmit = (book) => {
        setBooks([book,...books]);
        navigate("/");
    }

  return (
    <div>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </div>
  )
}

export default AddBook
