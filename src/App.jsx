import NavBar from "./components/NavBar.jsx"
import Home from "./components/Home.jsx"
import Author from "./components/Author.jsx"
import Books from "./components/Books.jsx"
import AuthorRecords from "./Records/AuthorRecords.jsx"
import BooksRecords from "./Records/BooksRecords.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"
import "./App.css"



function App() {
  const [data, setData] = useState([]);
  const [author, setAuthor] = useState([]);

  const [edit, setEdit] = useState({
    id: "",
    title: "",
    author: "",
    isbn: "",
    data: "",
    isEditing: false,
  });

  const [authedit, setAuthEdit] = useState({
    id: "",
    name: "",
    date: "",
    bio: "",
    isEditing: false,
  });


  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Books"
            element={
              Object.keys(edit).length > 0 ? (
                <Books data={data} setData={setData} edit={edit} />
              ) : ("")
            }
          />

          <Route path="/Author"
            element={
              Object.keys(authedit).length > 0 ? (
                <Author author={author} setAuthor={setAuthor} authedit={authedit} />
              ) : ("")
            }
          />

          <Route path="/BooksRecords"
            element={
              <BooksRecords
                data={data}
                setData={setData}
                edit={edit}
                setEdit={setEdit}
              />
            }
          />

          <Route path="/AuthorRecords"
            element={
              <AuthorRecords
                author={author}
                setAuthor={setAuthor}
                authedit={authedit}
                setAuthEdit={setAuthEdit}
              />
            }
          />

        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App