import React, { useState } from "react";
import { Link } from "react-router-dom";

const Translate = (props) => {
  const [text, setText] = useState("");

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  return (
    <div className="translate-page">
      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/saved">saved</Link>}
      </div>

      <div className="input">
        <textarea onChange={handleChange} />
      </div>
      <div className="output">
        <textarea onChange={handleChange} />
      </div>
    </div>
  );
};

export default Translate;
