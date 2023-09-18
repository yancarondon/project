import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import book1 from '/Users/yancarondon/Downloads/Humber/CPAN144/projectyanca/src/images/book1.png';

export default function SampleReviewsPage() {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleOpenForm = () => {
    setShowReviewForm(true);
  };

  return (
    <div style={{textAlign: 'center', marginTop: '80px'}}>
      <h2 id='reviewLine'>Got a book you recently read and want to add it to our list? 
      <br />
      Leave a review below!</h2>
      <br />
      <img src={book1} height={300} width={300} />
      <br /> <br /><br />
      {showReviewForm ? (
        <ReviewForm />
      ) : (
        <button id='reviewButton' onClick={handleOpenForm}>Leave a Review</button>
      )}
    </div>
  );
}