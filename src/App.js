import { useState, useEffect } from "react"
//import {Alert} from '@mui/material'
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MenuItems from "./components/MenuItems";

const API = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json";

export default function App() {

  const [todoItem, setTodoItem] = useState({});
  const [isbnToSearch,setIsbnToSearch] = useState({});

  useEffect(() => {
    if (isbnToSearch) {
      const searchAPI = "https://api.nytimes.com";
      fetch(API)
        .then((res) => res.json())
        .then((json) => {
          setTodoItem(json);
        });
    }
  }, [isbnToSearch]);

  const [search, setSearch] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(true);

    const isbn = event.target.isbnToSearch.value;
    setIsbnToSearch(isbn);
  };



  return (
    <div className="App">

      <Header>
        <NavBar>
          <MenuItems name="home" />
          <MenuItems name="library" />
          <MenuItems name="reviews" />
        </NavBar>
      </Header>

      <MainContent>
        <Search onSubmit={handleSearch} >
          <input type="number" name="isbnToSearch"></input>
          <button type="submit">Search By ISBN</button>
          {search ? <Alert variant="outlined" severity="info">
            The book you are looking for is called PROPS.BOOK.TITLE or todoItem
          </Alert> : null}
        </Search>
        <Form onClick={displayBook}>
          <Images>
            <Books name="bestseller1"></Books>
            <Books name="bestseller2"></Books>
            <Books name="bestseller3"></Books>
            <Books name="bestseller4"></Books>
            <Books name="bestseller5"></Books>
            <Books name="bestseller6"></Books>
          </Images>
        </Form>
      </MainContent>

      <Footer />
    </div>
  );
}


function MainContent(props) {
  return (
    <div>{props.children}</div>
  );
}

function Search(props) {
  return (
    <search onSubmit={props.onSubmit}>{props.children}</search>
  );
}

function Input(props) {
  return (
    <div style={{ color: "fuchsia", background: "white" }}>
      <input />
    </div>
  );
}

function Form(props) {
  return <form onClick={props.onClick} >{props.children}</form>;
}