import React, { useState } from "react";
// import Calendar from 'react-calendar';
import "../styles/Photography.css";

import Dec2023 from "../media/books-whenBreathBecomesAir.jpeg";

const Photography = () => {

  return (
    <div id="photography">
      <p className="poppins-400-font">WHERE I’VE BEEN</p>
      <h1 className="poppins-800-font">Travel Photography</h1>
      <p className="montserrat-400-font">
        Moments I've captured from my adventures around the world!
      </p>

      <h3 className="poppins-600-font">Alberta 2023</h3>
      <h3 className="poppins-600-font">British Columbia 2023</h3>
      <h3 className="poppins-600-font">Newfoundland 2024</h3>
    </div>
  );
};

export default Photography;