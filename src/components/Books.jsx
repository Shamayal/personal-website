import React, { useState } from "react";
// import Calendar from 'react-calendar';
import "../styles/Books.css";

import Dec2023 from "../media/books-whenBreathBecomesAir.jpeg";
import Nov2023 from "../media/books-thursdayMurderClub.jpeg";
import Oct2023 from "../media/books-lessonsInChemistry.jpeg";
import Sep2023 from "../media/books-girlsThatInvest.jpeg";
import Aug2023 from "../media/books-cryingInHMart.jpeg";
import Jul2023 from "../media/books-thisIsGoingToHurt.jpg";
import Jun2023 from "../media/books-atomicHabits.jpeg";
import May2023 from "../media/books-yellowface.jpeg";
import Apr2023 from "../media/books-bridgeToTerabithia.jpeg";
import Mar2023 from "../media/books-theUnspokenRules.jpeg";
import Feb2023 from "../media/books-thePsychologyOfMoney.jpeg";
import Jan2023 from "../media/books-hanaKhanCarriesOn.jpeg";

const Books = () => {
  const bookReviews = [
    {
      month: "May",
      year: 2024,
      book: "Love From A to Z",
      author: "Paul Kalanithi",
      genre: "Romance",
      cover: <img src={Dec2023} />,
      review: "Philosophical",
    },
    {
      month: "April",
      year: 2024,
      book: "insert name",
      author: "Paul Kalanithi",
      genre: "Memoir",
      cover: <img src={Dec2023} />,
      review: "Philosophical",
    },
    {
      month: "March",
      year: 2024,
      book: "insert name",
      author: "Paul Kalanithi",
      genre: "Memoir",
      cover: <img src={Dec2023} />,
      review: "Philosophical",
    },
    {
      month: "February",
      year: 2024,
      book: "insert name",
      author: "Paul Kalanithi",
      genre: "Memoir",
      cover: <img src={Dec2023} />,
      review: "Philosophical",
    },
    {
      month: "January",
      year: 2024,
      book: "insert name",
      author: "Paul Kalanithi",
      genre: "Memoir",
      cover: <img src={Dec2023} />,
      review: "Philosophical",
    },
    {
      month: "December",
      year: 2023,
      book: "When Breath Becomes Air",
      author: "Paul Kalanithi",
      genre: "Memoir",
      cover: <img src={Dec2023} />,
      review: "Philosophical",
    },
    {
      month: "November",
      year: 2023,
      book: "Thursday Murder Club",
      author: "Richard Osman",
      genre: "Mystery",
      cover: <img src={Nov2023} />,
      review: "",
    },
    {
      month: "October",
      year: 2023,
      book: "Lessons in Chemistry",
      author: "Bonnie Garmus",
      genre: "Historical Fiction",
      cover: <img src={Oct2023} />,
      review: "",
    },
    {
      month: "September",
      year: 2023,
      book: "Girls That Invest: Your Guide to Financial Independence through Shares and Stocks",
      author: "Simran Kaur",
      genre: "Finance",
      cover: <img src={Sep2023} />,
      review: "",
    },
    {
      month: "August",
      year: 2023,
      book: "Crying in H Mart",
      author: "Michelle Zauner",
      genre: "Memoir",
      cover: <img src={Aug2023} />,
      review: "beautifully and brutally written account of experience death",
    },
    {
      month: "July",
      year: 2023,
      book: "This is going to hurt",
      author: "Adam Kay",
      genre: "Memoir",
      cover: <img src={Jul2023} />,
      review: "",
    },
    {
      month: "June",
      year: 2023,
      book: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      author: "James Clear",
      genre: "Self-Help",
      cover: <img src={Jun2023} />,
      review: "",
    },
    {
      month: "May",
      year: 2023,
      book: "Yellowface",
      author: "R.F. Kuang",
      genre: "Contemporary",
      cover: <img src={May2023} />,
      review: "",
    },
    {
      month: "April",
      year: 2023,
      book: "A Bridge to Terabithia",
      author: "Katherine Paterson",
      genre: "Realistic Fiction",
      cover: <img src={Apr2023} />,
      review: "Revisiting a childhood classic.",
    },
    {
      month: "March",
      year: 2023,
      book: "The Unspoken Rules: Secrets to Starting Your Career Off Right",
      author: "Gorick Ng",
      genre: "Self-Help",
      cover: <img src={Mar2023} />,
      review: "A guide to anyone navigating the job market",
    },
    {
      month: "February",
      year: 2023,
      book: "The Psychology of Money: Timeless lessons on wealth, greed, and happiness",
      author: "Morgan Housel",
      genre: "Finance",
      cover: <img src={Feb2023} />,
      review:
        "Financial literacy is vital to help us make informed decisions and plan ahead for a better quality of life. I believe financial knowledge empowers us to take control and decide how we want to reach our goals, whether it be paying off debt or saving up for a big purchase. Being in my early 20s, I am at a stage in my life where I have more disposable income and a responsibility to make informed decisions on how I will invest, spend, and save that money. Housel takes a different approach in the subject of business and finance ",

      // breaks down relationship with money and human emotion and situation play a huge role to make good decisions and plan your life, especially at the stage I am at now where I can make more choices with how I invest, spend, and
      //     The Psychology of Money is one of the those books that lays the fundamentals required for investment and saving your money without pushing and punishing with a lot of jargons, technical terms, and read-the-offer-documents-carefully-before-investing kind of mundane warnings (mind you, I am academically qualified and work in Finance and a Legal field). The book speaks in a very clear manner, chapters being crisp and brief, in a language which is assertive with a lot of understanding of the psychology of an individual average investor/human who wants to secure the future.

      // This book helped me to understand, something I never really did till now, that saving/investing money is a habit which is greatly guided by the relationship which one establishes with money itself. Do you see money as a tool/ enabler to pursue goals which brings you happiness or do you see money itself as happiness? Do you want to earn money because you want to buy 'things' (tangible, and as a show) or do you want to earn money because you want to secure a future that is stable, well-grounded, good-enough to weather through all the rough corners of life? Do you want to be rich or wealthy?. It's these fundamental questions which will guide in forming solid habits towards savings and investments.

      // The chapter explaining why money should be saved although there's no visible goal gave me words for thoughts I never could articulate otherwise. Money has to be saved not because one aims to buy a house or achieve a dream but rather it helps to buy one of the most valuable of all things - TIME. Also, the chapter on how debt erodes wealth gives a clear picture on the actual (opportunity) cost of debt, which for an individual investor, is too huge and substantially toxic in the long term (NOTE: This book does not talk about the educational debt and has not much to offer on the same. All the debts mentioned are those incurred for purchasing an asset/developing an asset/maintaining a lifestyle).

      // Although the chapters on compounding are too known to me, as someone from Finance field, to read the same in a clear language is such a pleasure in itself. I loved the insistence on being 'reasonable' in one's investments and expectations of returns rather than being completely 'rational'. Nothing helps to act as a motivation to save ourselves from the spiral of consumerism than the simple sentence, "If you buy too many things from your money, all you have is too many things and no money."

      // Although almost all the examples in this book is about a guy, and it really made me feel bad that there isn't a name of a woman in the list of best investors around the world, it did help me to understand that the true value of money is not in its value of amassing assets but rather in its purchasing power to leverage oneself in life - in terms of freedom, independence, security, and ability to achieve dream, which one doesn't have to let go.
    },
    {
      month: "January",
      year: 2023,
      book: "Hana Khan Carries On",
      author: "Uzma Jalaluddin",
      genre: "Contemporary",
      cover: <img src={Jan2023} />,
      review:
        "They say don’t judge a book by its cover, but how could I not when the striking colours of <i>Hana Khan Carries On</i> caught my eye. When I found out the protagonist is a 24 year old, south asian woman from Toronto who is about to embark on her career, it sounded a lot like me and I was intrigued to know more. Hana Khan is a radio host who is currently dealing with compromising her views for the sake of making a good impression at her internship and a failing family business. She starts her own podcast to share her thoughts as she experiences new changes in her neighbourhood and a hate-motivated attack. This book is bold, funny, and brings a fresh new perspective to the lives of immigrant children in Canada. Its themes of family relations, staying resilient, and standing up for your beliefs resonate with many. I’d definitely recommend it if you are looking to read more books focused on the lives of POC.",
    },
  ];

  const uniqueMonths = [...new Set(bookReviews.map((review) => review.month))];
  const uniqueYears = [...new Set(bookReviews.map((review) => review.year))];

  const [selectedMonth, setSelectedMonth] = useState(uniqueMonths[0]);
  const [selectedYear, setSelectedYear] = useState(uniqueYears[0]);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const selectedBook = bookReviews.find(
    (review) => review.month === selectedMonth && review.year === selectedYear
  );

  // const handleMonthYearChange = (e) => {
  //   const [selectedMonth, selectedYear] = e.target.value.split("-");
  //   setSelectedMonth(selectedMonth);
  //   setSelectedYear(parseInt(selectedYear));
  // };

  // i want to add a hover over option so that when you click a book it expands to show more information
  return (
    <div id="books">
      <p className="poppins-400-font">WHAT I'M READING</p>
      <h1 className="poppins-800-font">Book Reviews</h1>
      <p className="montserrat-400-font">
        As an avid reader Where I post my favourite book of the month. I like a
        variety of genres and non-fiction too
      </p>

      <h3 className="poppins-600-font">Select Month and Year</h3>
      {/* <select
        onChange={handleMonthYearChange}
        value={`${selectedMonth}-${selectedYear}`}
      >
        {bookReviews.map((review, index) => (
          <option key={index} value={`${review.month}-${review.year}`}>
            {`${review.month} ${review.year}`}
          </option>
        ))}
      </select> */}

      <h3 className="poppins-600-font">Select Month</h3>
      <select onChange={handleMonthChange} value={selectedMonth}>
        {uniqueMonths.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>

      <h3 className="poppins-600-font">Select Year</h3>
      <select onChange={handleYearChange} value={selectedYear}>
        {uniqueYears.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>

      {selectedBook ? (
        <>
          <h3 className="poppins-800-font">{`${selectedMonth} ${selectedYear}`}</h3>
          <p className="montserrat-400-font">{selectedBook.book}</p>
          <p className="montserrat-400-font">{selectedBook.review}</p>
          {selectedBook.cover}
        </>
      ) : (
        <p>No book review found for the selected month and year.</p>
      )}
    </div>
  );
};

export default Books;
