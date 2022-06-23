import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import EditBook from "./components/EditBook";
import Header from "./components/Header";
import BooksContext from "./context/BooksContext";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [books, setBooks] = useLocalStorage("books", []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <BooksContext.Provider value={{ books, setBooks }}>
          <Routes>
            <Route path="*" element={<BooksList />} />
            <Route path="/" element={<BooksList />} />
            <Route path="/edit/:id" element={<EditBook />} />
            <Route path="/add" element={<AddBook />} />
          </Routes>
        </BooksContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
