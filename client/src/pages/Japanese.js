import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { __GetJa } from "../services/LanguageService";

const Japanese = () => {
  const [ja, setJa] = useState([]);

  useEffect(() => {
    getJa();
  }, []);

  const getJa = async () => {
    const jaLang = await __GetJa();
    setJa(jaLang);
    console.log(jaLang);
  };

  console.log(ja[0].id)
  return (
    <div className="ja-page">
      <div className="top-left">
        <div className="ex">x</div>
        <div className="line">_</div>
        <div className="oh">o</div>
      </div>

      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/translate">translate</Link>}
        {<Link to="/saved">saved</Link>}
        {<Link to="/korean">korean</Link>}
        {<Link to="/chinese">chinese</Link>}
      </div>
      
      <div className="ja-card">
        {ja.map((j) => {
          <div className="j" key={j.id}>
            <p>{j.phrases}</p>
            <p>{j.translation}</p>
            <p>{j.romanization}</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Japanese;
