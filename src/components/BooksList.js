import React, { useContext } from 'react'
import Cards from './Cards'
import BooksContext from '../context/BooksContext';

const BooksList = () => {

  const {books , setBooks} = useContext(BooksContext)

  const handelDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  const cardsElement = books.map((book) => {
    return (<Cards key={book.id} {...book} handelDelete={handelDelete}/>)
  })


  return (
    <div className='container w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 '>
    { books.length > 0 ?  cardsElement : <p>No books available. Please add some books.</p> }
  
    </div>
  )
}

export default BooksList
