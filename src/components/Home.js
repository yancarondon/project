import { useState, useEffect } from "react"
import { Alert } from '@mui/material'
import bookImage from '/Users/yancarondon/Downloads/Humber/CPAN144/projectyanca/src/images/bookImage.jpg';


export default function Home() {
  const [fetchFromAPI, setFetchFromAPI] = useState({});
  const [isbnToSearch, setIsbnToSearch] = useState("");
  const [search, setSearch] = useState(false);
  const [bookTitle, setBookTitle] = useState("");

  const handleIsbnToSearch = (event) => {
    event.preventDefault();
    setIsbnToSearch(event.target.value);
  }

  const handleSearch = () => {
    const API_URL = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=gzHZHnbY0tc6zEwZY9KiduMUUDS7co2V&price=0.00";
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const matchingBook = data.results.find((book) => book.isbns.some(isbn => isbn.isbn10 === isbnToSearch));
        if (matchingBook) {
          setBookTitle(matchingBook.title);
          setSearch(true);
        } else {
          setBookTitle("");
        }
      })
  }

  const [displayBook1, setDisplayBook1] = useState(false);
  const [displayBook2, setDisplayBook2] = useState(false);
  const [displayBook3, setDisplayBook3] = useState(false);
  const [displayBook4, setDisplayBook4] = useState(false);
  const [displayBook5, setDisplayBook5] = useState(false);
  const [displayBook6, setDisplayBook6] = useState(false);
  useEffect(() => {
    const API_URL = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=gzHZHnbY0tc6zEwZY9KiduMUUDS7co2V&price=0.00";
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setFetchFromAPI(json);
      });
  }, []);

  return (
    <>
      {/* ISBN search bar */}
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
        <input type="text" placeholder="Search by ISBN10" value={isbnToSearch} onChange={handleIsbnToSearch}></input>
        <button type="submit" id='searchButton' onClick={handleSearch}>Search</button>
      </div>

      {search ? (
        
        <Alert 
        variant="outlined" 
        severity="info" 
      style={{ backgroundColor: '#f7f5f5', borderColor: 'grey', color: 'black',borderRadius: '25px', marginRight: '30%', marginLeft: '30%'}}>
        The book you are looking for is called <b style={{ fontWeight: 'bold', color: '#08416e' }}> {bookTitle} </b>
      </Alert>
      
      ) : null}




      {/* Table with pictures that display best-sellers */}
      <h1 id='bestsellers'>BESTSELLERS</h1>
      <p id='bestsellersText'>Click on any of the books below to uncover our bestsellers.</p>
      <br /><br />
      

        <div id="booksDiv">
          {displayBook1 ? (<div onClick={() => { setDisplayBook1(!displayBook1) }}>
            <b><b>Title:</b></b> {fetchFromAPI.results[1].title}<br /><br />
            <b><b>Author:</b> </b>  {fetchFromAPI.results[1].author}<br /><br />
            <b>Description:</b> {fetchFromAPI.results[1].description}
          </div>) : <img 
            src={bookImage}
            style={{ height: '200px', width: '150px' , marginLeft:'40%', marginRight:'40%'}}
            onClick={() => { setDisplayBook1(!displayBook1) }}/>}
        </div><br/>
        <div id="booksDiv">
          {displayBook2 ? (<div onClick={() => { setDisplayBook2(!displayBook2) }}>
            <b>Title:</b> {fetchFromAPI.results[2].title}<br /><br />
            <b><b>Author:</b> </b> {fetchFromAPI.results[2].author}<br /><br />
            <b>Description:</b> {fetchFromAPI.results[2].description}
          </div>) : <img 
            src={bookImage}
            style={{ height: '200px', width: '150px' , marginLeft:'40%', marginRight:'40%' }}
            onClick={() => { setDisplayBook2(!displayBook2) }} />}
        </div><br/>
        <div id="booksDiv">
          {displayBook3 ? (<div onClick={() => { setDisplayBook3(!displayBook3) }}>
            <b>Title:</b> {fetchFromAPI.results[3].title}<br /><br />
            <b>Author:</b>  {fetchFromAPI.results[3].author}<br /><br />
            <b>Description:</b> {fetchFromAPI.results[3].description}
          </div>) : <img 
            src={bookImage}
            style={{ height: '200px', width: '150px' , marginLeft:'40%', marginRight:'40%' }}
            onClick={() => { setDisplayBook3(!displayBook3) }} />}

        </div><br/>
        <div id="booksDiv">
          {displayBook4 ? (<div onClick={() => { setDisplayBook4(!displayBook4) }}>
            <b>Title:</b> {fetchFromAPI.results[4].title}<br /><br />
            <b>Author:</b>  {fetchFromAPI.results[4].author}<br /><br />
            <b>Description:</b> {fetchFromAPI.results[4].description}
          </div>) : <img 
            src={bookImage}
            style={{ height: '200px', width: '150px' , marginLeft:'40%', marginRight:'40%'   }}
            onClick={() => { setDisplayBook4(!displayBook4) }} />}
        </div><br/>
        <div id="booksDiv">
          {displayBook5 ? (<div onClick={() => { setDisplayBook5(!displayBook5) }}>
            <b>Title:</b> {fetchFromAPI.results[12].title}<br /><br />
            <b>Author:</b>  {fetchFromAPI.results[12].author}<br /><br />
            <b>Description:</b> {fetchFromAPI.results[12].description}
          </div>) : <img 
            src={bookImage}
            style={{ height: '200px', width: '150px' , marginLeft:'40%', marginRight:'40%' }}
            onClick={() => { setDisplayBook5(!displayBook5) }} />}
        </div><br/>
        <div id="booksDiv">
          {displayBook6 ? (<div onClick={() => { setDisplayBook6(!displayBook6) }}>
            <b>Title:</b> {fetchFromAPI.results[6].title}<br /><br />
            <b>Author:</b>  {fetchFromAPI.results[6].author}<br /><br />
            <b>Description:</b> {fetchFromAPI.results[6].description}
          </div>) : <img 
            src={bookImage}
            style={{ height: '200px', width: '150px' , marginLeft:'40%', marginRight:'40%' }}
            onClick={() => { setDisplayBook6(!displayBook6) }} />}
        </div><br/>
    </>
  );
}



