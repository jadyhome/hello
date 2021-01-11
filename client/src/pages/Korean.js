import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { __GetKo } from "../services/LanguageService";
import Card from "../components/Card";

const Korean = () => {
  const [ko, setKo] = useState([]);

  useEffect(() => {
    getKo();
  }, []);

  const getKo = async () => {
    const koLang = await __GetKo();
    setKo(koLang);
    console.log(koLang);
  };

  return (
    <div className="ko-page">
      <div className="top-bar">
        <h1 className="header">ko</h1>
      </div>

      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/translate">translate</Link>}
        {<Link to="/saved">saved</Link>}
        {<Link to="/japanese">japanese</Link>}
        {<Link to="/chinese">chinese</Link>}
        {<Link to="/about">about</Link>}
      </div>

      <div className="info">
        <h6>
          korean 101 <br /> common phrases you can use
        </h6>
      </div>

      <div className="ko-card">
        {ko.map((k) => (
          <Card
            key={k.id}
            phrases={k.phrases}
            translation={k.translation}
            romanization={k.romanization}
          />
        ))}
      </div>
    </div>
  );
};

export default Korean;
