import React, { useState } from "react";
import data from "./data";
function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);
  const submitHandler = (e) => {
    e.preventDefault();
    let number = parseInt(count);
    if (number <= 0) {
      return (number = 1);
    }
    if (number > data.length - 1) {
      return (number = data.length - 1);
    }
    setText(data.slice(0, number));
  };
  return (
    <section className="section-center">
      {" "}
      <h3>tired of boring lorem ipsum?</h3>
      <form onSubmit={submitHandler} className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, idx) => {
          return <p key={idx}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
