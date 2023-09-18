import React, { useState } from 'react';


export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookTitle: '',
    ISBN: '',
    rating: '',
    reviewText: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any required field is empty
    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.bookTitle === '' ||
      formData.ISBN === '' ||
      formData.rating === '' ||
      formData.reviewText === ''
    ) {
      // Display an alert if any required field is empty
      alert('Please fill out all the required fields.');
    } else {
      console.log('Form submitted:', formData);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Review Form</h1>
        <p>Got a book you recently read and want to add it to our list? Leave a review below!</p>
      </div>
      <div>
        <label>Name:</label>
        <input type="text" name="name"/>
      </div>
<br/>
      <div>
        <label>Email:</label>
        <input type="email" name="email"/>
      </div>
      <br/>
      <div>
        <label>Book Title:</label>
        <input type="text" name="bookTitle"/>
      </div>
      <br/>
      <div>
        <label>ISBN:</label>
        <input type="text" name="ISBN"/>
      </div>
      <br/>
      <div>
        <label>Rating from 1-5:</label>
        <input type="number" name="rating" min="1" max="5"/>
      </div>
      <br/>
      <div>
        <label>Review:</label>
        <textarea/>
      </div>
      <br/>
      <button type="submit" >Submit Review</button>
      
    </form>
  );
};
