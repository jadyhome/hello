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
      <div className="top-bar">
        <h1 className="header">ja</h1>
      </div>

      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/translate">translate</Link>}
        {<Link to="/saved">saved</Link>}
        {<Link to="/korean">korean</Link>}
        {<Link to="/chinese">chinese</Link>}
        {<Link to="/about">about</Link>}
      </div>

      <div className="info">
        <h6>
          japanese 101 <br /> common phrases you can use
        </h6>
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
