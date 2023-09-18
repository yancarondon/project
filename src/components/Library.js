import React, { useState } from "react";
import book2 from "/Users/yancarondon/Downloads/Humber/CPAN144/projectyanca/src/images/library.png";

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sortBy, setSortBy] = useState("title");
  const [searchType, setSearchType] = useState("title");

  const handleSearch = () => {
    let API_URL = "https://api.nytimes.com/svc/books/v3/reviews.json?api-key=cxpPFG3GvEWqzwaL3eqfTRzZQpzfHTfp";
    
    if (searchTerm) {
      if (searchType === "author") {
        API_URL += `&author=${encodeURIComponent(searchTerm)}`;
      } else {  
        API_URL += `&title=${encodeURIComponent(searchTerm)}`;
      }
    }
  
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data.results || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setSearchResults([]); 
      });
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    const sortedResults = [...searchResults].sort((a, b) =>
      sortBy === "title"
        ? a.book_title.localeCompare(b.book_title)
        : a.book_author.localeCompare(b.book_author)
    );
    setSearchResults(sortedResults);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <div style={{textAlign: 'center', marginTop: '80px'}}>
      <img src={book2} height={300} width={300} />
      <p>Looking for something specific? Search by your favourite author or book title!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={handleChange}
        />
        <select value={searchType} onChange={handleSearchTypeChange}>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <button type="submit">Search</button>
      </form>

      <div style={{textAlign: 'center' }}>
        <div>
          <br />
          <span>Sort by:</span>
          <label>
            <input
            
              type="radio"
              value="title"
              checked={sortBy === "title"}
              onChange={handleSortChange}
              
            />
            Author
          </label>
          <label>
            <input
              type="radio"
              value="author"
              checked={sortBy === "author"}
              onChange={handleSortChange}
            />
            Title
          </label>
        </div>
        <div>
          {searchResults.length > 0 ? (
            searchResults.map((book) => (
              <div key={book.url}>
                <h3>{book.book_title}</h3>
                <p>Author: {book.book_author}</p>
                <p>Summary: {book.summary}</p>
                <p>ISBN: {book.isbn13}</p>
                <p>Publication Date: {book.publication_dt}</p>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Library;
