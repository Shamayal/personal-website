import React, { useState } from 'react';
// import Calendar from 'react-calendar';
import "../styles/Books.css";

const Books = () => {

  const bookReviews = [
    { month: "November", year: 2023, book: "This is Going to Hurt", author: "Adam Kay", review: "" },
    { month: "October", year: 2023, book: "Lessons in Chemistry", author: "", review: "" },
    { month: "September", year: 2023, book: "Girls That Invest: Your Guide to Financial Independence through Shares and Stocks", author: "", review: "" },
    { month: "August", year: 2023, book: "This is Going to Hurt", author: "", review: "" },
    { month: "July", year: 2023, book: "The Unspoken Rules: Secrets to Starting Your Career Off Right", author: "", review: "" },
    { month: "June", year: 2023, book: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones", author: "", review: "" },
    { month: "May", year: 2023, book: "Lessons in Chemistry", author: "", review: "" },
    { month: "April", year: 2023, book: "A Wrinkle in Time", author: "", review: "Revisiting a childhood classic." },
    { month: "March", year: 2023, book: "Lessons in Chemistry", author: "", review: "" },
    { month: "February", year: 2023, book: "The Psychology of Money: Timeless lessons on wealth, greed, and happiness", author: "", review: "" },
    { month: "January", year: 2023, book: "Hana Khan Carries On", author: "", review: "They say don’t judge a book by its cover, but how could I not when the striking colours and image of <i> Hana Khan Carries On</i>  caught my eye. When I found out the protagonist is a 24 year old, south asian woman from Toronto, it sounded a lot like me and I was intrigued to know more. Hana Khan is a radio host who is currently dealing with compromising her views for the sake of making a good impression at her internship and a failing family business. She starts her own podcast to share her thoughts as she experiences new changes in her neighbourhood and a hate-motivated attack. This book is bold, funny, and brings a fresh new perspective to the lives of immigrant children in Canada. Its themes of family relations, staying resilient, and standing up for your beliefs resonate with many. I’d definitely recommend it if you are looking to read more books focused on the lives of POC." },
  ]
  
  const [selectedMonth, setSelectedMonth] = useState("November");
  const [selectedYear, setSelectedYear] = useState(2023);

  const handleMonthYearChange = (e) => {
    const [selectedMonth, selectedYear] = e.target.value.split("-");
    setSelectedMonth(selectedMonth);
    setSelectedYear(parseInt(selectedYear));
  };

  const selectedBook = bookReviews.find(
    (review) =>
      review.month === selectedMonth && review.year === selectedYear
  );

  return (
    <div>
      <p className="poppins-400-font">WHAT I'M READING</p>
      <h1 className="poppins-800-font">Book Reviews</h1>
      <p>As an avid reader Where I post my favourite book of the month. I like a variety of genres and non-fiction too</p>

      <h3 className="poppins-600-font">Select Month</h3>

      <h3 className="poppins-600-font">Select Month and Year</h3>
      <select onChange={handleMonthYearChange} value={`${selectedMonth}-${selectedYear}`}>
        {bookReviews.map((review, index) => (
          <option key={index} value={`${review.month}-${review.year}`}>
            {`${review.month} ${review.year}`}
          </option>
        ))}
      </select>

      {selectedBook ? (
        <>
          <h3>{`${selectedMonth} ${selectedYear}`}</h3>
          <p>{selectedBook.book}</p>
          <p>{selectedBook.review}</p>
        </>
      ) : (
        <p>No book review found for the selected month and year.</p>
      )}

    </div>
  )
}

export default Books;