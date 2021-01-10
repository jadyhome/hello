import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { __GetJa } from "../services/LanguageService";
import Card from "../components/Card";

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
        {ja.map((j) => (
          <Card
            key={j.id}
            phrases={j.phrases}
            translation={j.translation}
            romanization={j.romanization}
          />
        ))}
      </div>
    </div>
  );
};

export default Japanese;
